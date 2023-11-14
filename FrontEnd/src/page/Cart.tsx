import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const CartPage = () => {
  // Sample data for cart items
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Product 1', price: 25.99, quantity: 2 },
    { id: '2', name: 'Product 2', price: 19.99, quantity: 1 },
    // Add more items as needed
  ]);

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Render each item in the cart
  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text>{item.name}</Text>
      <Text>Price: ${item.price.toFixed(2)}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <TouchableOpacity onPress={() => removeFromCart(item.id)}>
        <Text style={styles.removeButton}>Remove</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity + 1)}>
        <Text style={styles.updateButton}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>
        <Text style={styles.updateButton}>-</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => <Text>Your cart is empty</Text>}
      />
      <View style={styles.totalContainer}>
        <Text>Total: ${calculateTotal()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cartItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    paddingBottom: 10,
  },
  removeButton: {
    color: 'red',
    marginTop: 5,
  },
  updateButton: {
    color: 'blue',
    marginTop: 5,
  },
  totalContainer: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
});

export default CartPage;
