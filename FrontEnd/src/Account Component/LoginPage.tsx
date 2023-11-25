import { Button, Text, View, StyleSheet, TextInput,Image } from "react-native";
import React, { useState } from "react";
import { all } from "axios";
import logo from "./Pic/profile.jpg";

const LoginPage = (props: any) => {

    const [email, setEmail] = useState('Email');
    const [password, setPassword] = useState('****');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = () => {
        if(email == "abc@gmail.com" && password === "abc") {
            console.log('Good work', email, password);
            setIsLoggedIn(true);
            props.navigation.navigate("Home");
        } else {
            console.log('Uha Still work to do...', email, password);
            setIsLoggedIn(false);
        }
    };
    
    const navHandler = () => {
        props.navigation.navigate("Counter");
    }

    const showSuccessMessage = () => {
        return(
            <View>
                <Text>Successfully Logged In</Text>
            </View>
        )
    }

    const showLoginComponent = () => {
        return (
            <View style={style.loginBox}>
                <Image
                    source={require('./TechAssultLogo.png').default}
                    style={style.imageStyle}
                />
    
                <Text>Sign In To Your Account</Text>
                <View>
                    <TextInput style={style.inputStyle} onChangeText={setEmail} placeholder="Enter your email" />
                </View>
                <View>
                    <TextInput style={style.inputStyle} onChangeText={setPassword} placeholder="Enter Password" secureTextEntry />
                </View>
                <View style={style.buttonContainer}>
                    <View style={style.buttonBox}>
                        <Button title='Login' onPress={handleSubmit} color='tomato' />
                    </View>
                </View>
            </View>
        );
    };
    

    return (
        <View style={style.mainContainer}>
            {!isLoggedIn ? showLoginComponent() : showSuccessMessage()}
        </View>
    )
}

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'tomato',
        width:'90%',
    },
    counterContainer: {
        fontWeight: "700",
        color: "red",
        height: 40,
        margin: 5,
        
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonLeft: {
        height: 30,
        width: 60,
    },
    buttonRight: {
        height: 30,
        width: 60,
    },
    inputStyle: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 200, 
        borderRadius: 4
    },
    imageStyle: {
        width: 200, // Adjust the width as needed
        height: 200, // Adjust the height as needed
        
        border:'black',
      },
      loginBox: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 20, // Adjust the padding as needed
        alignItems: 'center',
    },

})


export default LoginPage;