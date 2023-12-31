import { StyleSheet, Text, View, Image, FlatList,TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetails from "./ProductDetails";
import { useNavigation } from '@react-navigation/native';


export interface CosmoProducts {
  product_id: number;
  product_name: string;
  product_category: string;
  product_description: string;
  price: number;
}



const FlashSale = () => {
  const cosmetics = [
    {
      id: 1,
      name: "Airpod",
      image: "https://source.unsplash.com/1024x768/?airpod",
    },
    {
      id: 2,
      name: "Samsang Fridge",
      image: "https://source.unsplash.com/1024x768/?fridge",
    },
    {
      id: 3,
      name: "Power Bank",
      image: "https://source.unsplash.com/1024x768/?powerbank",
    },
    {
      id: 4,
      name: "Dextop",
      image: "https://source.unsplash.com/1024x768/?pc",
    },
    {
      id: 1,
      name: "Airpod",
      image: "https://source.unsplash.com/1024x768/?airpod",
    },
    {
      id: 2,
      name: "Samsang Fridge",
      image: "https://source.unsplash.com/1024x768/?fridge",
    },
    {
      id: 3,
      name: "Power Bank",
      image: "https://source.unsplash.com/1024x768/?powerbank",
    },
    {
      id: 4,
      name: "Dextop",
      image: "https://source.unsplash.com/1024x768/?pc",
    },
    {
      id: 1,
      name: "Airpod",
      image: "https://source.unsplash.com/1024x768/?airpod",
    },
    {
      id: 2,
      name: "Samsang Fridge",
      image: "https://source.unsplash.com/1024x768/?fridge",
    },
    {
      id: 3,
      name: "Power Bank",
      image: "https://source.unsplash.com/1024x768/?powerbank",
    },
    {
      id: 4,
      name: "Dextop",
      image: "https://source.unsplash.com/1024x768/?pc",
    },
    {
      id: 1,
      name: "Airpod",
      image: "https://source.unsplash.com/1024x768/?airpod",
    },
    {
      id: 2,
      name: "Samsang Fridge",
      image: "https://source.unsplash.com/1024x768/?fridge",
    },
    {
      id: 3,
      name: "Power Bank",
      image: "https://source.unsplash.com/1024x768/?powerbank",
    },
    {
      id: 4,
      name: "Dextop",
      image: "https://source.unsplash.com/1024x768/?pc",
    },
    {
      id: 1,
      name: "Airpod",
      image: "https://source.unsplash.com/1024x768/?airpod",
    },
    {
      id: 2,
      name: "Samsang Fridge",
      image: "https://source.unsplash.com/1024x768/?fridge",
    },
    {
      id: 3,
      name: "Power Bank",
      image: "https://source.unsplash.com/1024x768/?powerbank",
    },
    {
      id: 4,
      name: "Dextop",
      image: "https://source.unsplash.com/1024x768/?pc",
    },
    {
      id: 1,
      name: "Airpod",
      image: "https://source.unsplash.com/1024x768/?airpod",
    },
    {
      id: 2,
      name: "Samsang Fridge",
      image: "https://source.unsplash.com/1024x768/?fridge",
    },
    {
      id: 3,
      name: "Power Bank",
      image: "https://source.unsplash.com/1024x768/?powerbank",
    },
    {
      id: 4,
      name: "Dextop",
      image: "https://source.unsplash.com/1024x768/?pc",
    },
    {
      id: 1,
      name: "Airpod",
      image: "https://source.unsplash.com/1024x768/?airpod",
    },
    {
      id: 2,
      name: "Samsang Fridge",
      image: "https://source.unsplash.com/1024x768/?fridge",
    },
    {
      id: 3,
      name: "Power Bank",
      image: "https://source.unsplash.com/1024x768/?powerbank",
    },
    {
      id: 4,
      name: "Dextop",
      image: "https://source.unsplash.com/1024x768/?pc",
    },
    {
      id: 1,
      name: "Airpod",
      image: "https://source.unsplash.com/1024x768/?airpod",
    },
    {
      id: 2,
      name: "Samsang Fridge",
      image: "https://source.unsplash.com/1024x768/?fridge",
    },
    {
      id: 3,
      name: "Power Bank",
      image: "https://source.unsplash.com/1024x768/?powerbank",
    },
    {
      id: 4,
      name: "Dextop",
      image: "https://source.unsplash.com/1024x768/?pc",
    },
    {
      id: 1,
      name: "Airpod",
      image: "https://source.unsplash.com/1024x768/?airpod",
    },
    {
      id: 2,
      name: "Samsang Fridge",
      image: "https://source.unsplash.com/1024x768/?fridge",
    },
    {
      id: 3,
      name: "Power Bank",
      image: "https://source.unsplash.com/1024x768/?powerbank",
    },
    {
      id: 4,
      name: "Dextop",
      image: "https://source.unsplash.com/1024x768/?pc",
    },
    {
      id: 1,
      name: "Airpod",
      image: "https://source.unsplash.com/1024x768/?airpod",
    },
    {
      id: 2,
      name: "Samsang Fridge",
      image: "https://source.unsplash.com/1024x768/?fridge",
    },
    {
      id: 3,
      name: "Power Bank",
      image: "https://source.unsplash.com/1024x768/?powerbank",
    },
    {
      id: 4,
      name: "Dextop",
      image: "https://source.unsplash.com/1024x768/?pc",
    },
    {
      id: 1,
      name: "Airpod",
      image: "https://source.unsplash.com/1024x768/?airpod",
    },
    {
      id: 2,
      name: "Samsang Fridge",
      image: "https://source.unsplash.com/1024x768/?fridge",
    },
    {
      id: 3,
      name: "Power Bank",
      image: "https://source.unsplash.com/1024x768/?powerbank",
    },
    {
      id: 4,
      name: "Dextop",
      image: "https://source.unsplash.com/1024x768/?pc",
    },
    {
      id: 1,
      name: "Airpod",
      image: "https://source.unsplash.com/1024x768/?airpod",
    },
    {
      id: 2,
      name: "Samsang Fridge",
      image: "https://source.unsplash.com/1024x768/?fridge",
    },
    {
      id: 3,
      name: "Power Bank",
      image: "https://source.unsplash.com/1024x768/?powerbank",
    },
    {
      id: 4,
      name: "Dextop",
      image: "https://source.unsplash.com/1024x768/?pc",
    },
  
  ];

  const navigation = useNavigation();


  return (
    <ScrollView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.scrollViewContent}
        data={cosmetics}
        numColumns={5}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('ProductDetails', { product: item })}
        >
          <Image source={{ uri: item.image }} style={styles.images} />
          <View style={styles.textContainer}>
            <Text style={styles.imageName}>{item.name}</Text>
          </View>
        </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke",
    padding: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  scrollViewContent: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  itemContainer: {
    width: "17%",
    margin: 5,
    backgroundColor: "white",
    borderRadius: 5,
    overflow: "hidden",
  },
  images: {
    width: "100%",
    height: 50,
    resizeMode: "cover",
    borderRadius: 5,
  },
  textContainer: {
    padding: 1,
  },
  imageName: {
    marginTop: 5,
    fontSize: 10,
    textAlign: "center",
  },
});

export default FlashSale;
