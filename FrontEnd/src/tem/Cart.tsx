import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CheckoutPage from '../Cart Component/OrderPlace';
import { createStackNavigator } from '@react-navigation/stack';






const  CartPage=()=> {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CartPageScreen" component={CartPageScreen} />
      <Stack.Screen name="checkout" component={CheckoutPage} />
    </Stack.Navigator>
  );
}

const CartPageScreen = ({ route }) => {
  // Sample data for cart items
  const { params } = route;
  const cartItems = params?.cartItems || [];



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
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text>{item.name}</Text>
        <Text>Price: ${item.price.toFixed(2)}</Text>
        <Text>Quantity: {item.quantity}</Text>
      </View>
      <View style={styles.buttonsContainer}>
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
    </View>
  );

  const navigation = useNavigation();

  const handleCheckout = () => {
    // Navigating to the CheckoutPage and passing the total as a parameter
    navigation.navigate('checkout', { total: calculateTotal() });
  };

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
        <Button title="Checkout" onPress={handleCheckout} color="tomato" />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  cartItem: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    paddingBottom: 10,
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  buttonsContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
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
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 100,
  },
});

export {CartPage, CartPageScreen};
