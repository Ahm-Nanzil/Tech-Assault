// ProductDetails.js

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, Alert } from 'react-native';

const ProductDetails = ({ route, navigation }) => {
  const { product } = route.params;
  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {
    setCartItems([...cartItems, product]);
    
    // Log a message to the console or show an alert to confirm the addition
    console.log(`${product.name} has been added to your cart!`);
    // or
    // Alert.alert('Added to Cart', `${product.name} has been added to your cart!`);
    
    navigation.navigate('Account', { cartItems: [...cartItems, product] });
  };


  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.productPrice}>Price: ${product.price}</Text>
        <Button title="Add to Cart" onPress={addToCart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  detailsContainer: {
    marginTop: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 16,
    marginTop: 8,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    color: 'green',
  },
});

export default ProductDetails;
