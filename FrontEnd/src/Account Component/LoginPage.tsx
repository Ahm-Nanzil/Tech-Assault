import { Button, Text, View, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

const LoginPage = (props: any) => {

    const [email, setEmail] = useState('Email');
    const [password, setPassword] = useState('****');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = () => {
        if(email == "abc@gmail.com" && password === "abc123") {
            console.log('Good work', email, password);
            setIsLoggedIn(true);
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
        return(
            <View>

                <Text>Hello TO THE NEW PAGE nothing else.</Text>
                <View>
                    <TextInput style={style.inputStyle} onChangeText={setEmail} placeholder="Enter your email"></TextInput>
                </View>
                <View>
                    <TextInput style={style.inputStyle} onChangeText={setPassword} placeholder="Enter Password" secureTextEntry></TextInput>
                </View>
                <View>
                    <Button title='Submit' onPress={handleSubmit}></Button>
                </View>

                <View>
                    <Button title='BACK' onPress={navHandler}></Button>
                </View>
            </View>
        
        )
    }

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
        alignItems: 'center'
    },
    counterContainer: {
        fontWeight: "700",
        color: "red",
        height: 40,
        margin: 5
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
    }

})


export default LoginPage;