import { View, Text, Image, StyleSheet, Button, Alert } from 'react-native';

const ProductDetails = ({ route, navigation }) => {
  const { product } = route.params;
  console.log(product);
  const addToCart = () => {

    Alert.alert('Added to Cart', `${product.name} has been added to your cart!`);

    
    navigation.navigate("Chekout From here", {
      screen: "checkout",
      params: { total: 12345678  },
    });
  
  };


  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
        <Text style={styles.productPrice}>Price: ${product.price}</Text>
        <Button title="Add to Cart" onPress={addToCart} color="tomato" />
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
