// OrderHistoryPage.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const FavouritePage = () => {
  // Sample data for order history
  const [orderHistory, setOrderHistory] = useState([
    {
      id: '1',
      products: [
        { name: 'Product 1', price: 25.99, quantity: 2, image: { uri: 'https://source.unsplash.com/1024x768/?smartphone' } },
        { name: 'Product 2', price: 19.99, quantity: 1, image: { uri: 'https://source.unsplash.com/1024x768/?smartphone' } },
      ],
      total: 71.97,
      date: '2023-01-15T10:30:00',
    },
    {
      id: '1',
      products: [
        { name: 'Product 1', price: 25.99, quantity: 2, image: { uri: 'https://source.unsplash.com/1024x768/?smartphone' } },
        { name: 'Product 2', price: 19.99, quantity: 1, image: { uri: 'https://source.unsplash.com/1024x768/?smartphone' } },
      ],
      total: 71.97,
      date: '2023-01-15T10:30:00',
    },
    // Add more orders as needed
  ]);

  // Render each order in the order history
  const renderOrder = ({ item }) => (
    <View style={styles.orderItem}>
      <Text style={styles.orderDate}>{new Date(item.date).toLocaleDateString()}</Text>
      {item.products.map((product, index) => (
        <View key={index} style={styles.productItem}>
          <Image source={product.image} style={styles.productImage} />
          <View style={styles.productInfo}>
            <Text>{product.name}</Text>
            <Text>Price: ${product.price.toFixed(2)}</Text>
            <Text>Quantity: {product.quantity}</Text>
          </View>
        </View>
      ))}
      <Text style={styles.orderTotal}>Total: ${item.total.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={orderHistory}
        renderItem={renderOrder}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => <Text>No orders available</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    width:'100%',
  },
  orderItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'tomato',
    marginBottom: 10,
    paddingBottom: 10,
  },
  orderDate: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  productItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  orderTotal: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
});

export default FavouritePage;
