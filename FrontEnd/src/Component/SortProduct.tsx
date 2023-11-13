import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const SortProduct = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      
      <Pressable
        style={{
          marginHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#D0D0D0",
          padding: 5,
          borderRadius: 20,
          width: 120,
          justifyContent: "center",
        }}
      >
        <Ionicons name="filter" size={20} color="black" />
        <Text style={{ marginRight: 6 }}>Filter</Text>
      </Pressable>

      <Pressable
        style={{
          marginHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#D0D0D0",
          padding: 5,
          borderRadius: 20,
          justifyContent: "center",
          width: 120,
        }}
      >
        <Text>Sort By Rating</Text>
      </Pressable>

      <Pressable
        style={{
          marginHorizontal: 10,
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#D0D0D0",
          padding: 5,
          borderRadius: 20,
          justifyContent: "center",
        }}
      >
        <Text>Sort By Price</Text>
      </Pressable>
    </View>
  );
};

export default SortProduct;

const styles = StyleSheet.create({});
