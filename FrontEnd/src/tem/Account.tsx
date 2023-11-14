import React from "react";
import { Text,View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./LoginPage";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook


const Stack = createStackNavigator();


const Account = () =>{

    const navigation = useNavigation(); // Initialize the navigation hook

  const goToAccountSettings = () => {
    // Navigate to the AccountSettings screen
    navigation.navigate("AccountSettings");
  };

    return (

    <View>
        <View style={styles.personalinfo}>
            {/* <Image source={require('profile.png')} style={styles.icon} /> */}
            <FontAwesome name="user" size={100} color="white" />

            <Text style={styles.title}>Ahm Nanzil</Text>
        </View>
        
        <View style={styles.usesinfo}>
            <View style={styles.item}>
                <Text style={styles.text}>My Orders</Text>
                <FontAwesome name="user" color="white" size={20} style={styles.icon} />
            </View>

            <View style={styles.item}>
                <Text style={styles.text}>My Favourite</Text>
                <FontAwesome name="home" color="white" size={20} style={styles.icon} />
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>Credits & Cuppons</Text>
                <FontAwesome name="home" color="white" size={20} style={styles.icon} />
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>Invite Friends</Text>
                <FontAwesome name="home" color="white" size={20} style={styles.icon} />
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>Shipping Address</Text>
                <FontAwesome name="home" color="white" size={20} style={styles.icon} />
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>Account Setting</Text>
                <FontAwesome name="home" color="white" size={20} style={styles.icon} />
            </View>

            <View style={styles.item}>
        <TouchableOpacity onPress={goToAccountSettings}>
          <Text style={styles.text}>Account Setting</Text>
          <FontAwesome name="home" color="white" size={20} style={styles.icon} />
        </TouchableOpacity>
      </View>
            
            

        </View>
    </View>

    );
};


const AccountSettings = () => {
    return (
      <View>
        <Text>This is the Account Settings page</Text>
        {/* Add your Account Settings UI here */}
      </View>
    );
  };

  const StackNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen name="Account " component={Account} />
      <Stack.Screen name="AccountSettings" component={AccountSettings} />
    </Stack.Navigator>
  );

const styles = StyleSheet.create({
    personalinfo: {
        height: 200,
        width: '100%',
        backgroundColor: 'tomato',
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
      },
      title: {
        fontSize: 18,
        fontWeight: "bold",
      },
      usesinfo: {
        marginTop: 20,
        flexDirection: "column",
        alignItems: "flex-start",
      },
      item: {
        marginLeft:10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        width: "100%",
        fontSize:70,
      },
      icon: {
        marginRight: 30,
        color:'black',
      },
      text:{
        fontSize:17,
      }

  });

export default StackNavigator;