import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TextInput,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Imageslider from "../Component/Imageslider";
import Products from "../Component/Products";
import FlashSale from "../Component/FlashSale";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SortProduct from "../Component/SortProduct";

const Dashboard = () => {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <FontAwesome5 name="grip-lines" size={14} color="black" />
        <TextInput placeholder="Search in TechAssult" style={styles.searchInput} />
        <Ionicons name="md-search-sharp" size={15} color="purple " />
      </View>
      <Imageslider />
      <Products />
      <SortProduct />
      <FlashSale />
    </SafeAreaView>
  );
};


const deviceWidth = Math.round(Dimensions.get("window").width);

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    margin: 10,
    padding: 1,
    borderRadius: 10,
    borderColor: "grey",
  },
  searchInput: {
    fontSize: 10,
  },
  heading: {
    margin: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Dashboard;