import React from "react";
import { Text,View, StyleSheet, Image } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";



const Stack = createStackNavigator();


const Account = () =>{
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
                <Text style={styles.text}>Login</Text>
                <FontAwesome name="home" color="white" size={20} style={styles.icon} />
            </View>
            

        </View>
    </View>

    );
};

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

export default Account;