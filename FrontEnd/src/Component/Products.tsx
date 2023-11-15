import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native";

const Products = () => {
  const Electronics = [
    {
      id: 1,
      name: "Smartphones & Accessories",
      image: "https://source.unsplash.com/1024x768/?smartphone",
    },
    {
      id: 2,
      name: "Laptops & Computers",
      image: "https://source.unsplash.com/1024x768/?laptop",
    },
    {
      id: 3,
      name: "Audio Devices",
      image: "https://source.unsplash.com/1024x768/?airpod",
    },
    {
      id: 4,
      name: "Wearables",
      image: "https://source.unsplash.com/1024x768/?smartwatch",
    },
    {
      id: 5,
      name: "Cameras & Photography",
      image: "https://source.unsplash.com/1024x768/?dslr",
    },
    {
      id: 6,
      name: "Gaming Devices",
      image: "https://source.unsplash.com/1024x768/?ps5",
    },
    {
      id: 7,
      name: "Home Electronics",
      image: "https://source.unsplash.com/1024x768/?smarttv",
    },
  ];
  return (
    <View>
      <Text style={styles.heading}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Electronics.map((item, index) => (
          <View key={index}>
            <Image source={{ uri: item.image }} style={styles.images} />
            <Text style={styles.imageName}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
      
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  heading: {
    margin: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  images: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginLeft:10,
  },
  imageName: {
    width: 58,
    height: 40,
    marginTop: 4,
    marginLeft:8,
    fontSize:10,
    textAlign: "center",
    justifyContent: "center",
  },
});
