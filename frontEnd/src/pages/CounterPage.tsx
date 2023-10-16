import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CounterPage= ()=>{
    let counter=0;

    const increaseHandler=() =>{
        counter = counter +1;
        console.log("current")
    }

    const decreaseHandler=() =>{
        counter = counter -1;
    }

    return (
        <view>
            <Text>{counter}</Text>
            <view>
                <Button title="Increase"></Button>
                <Button title="Decrease"></Button>

            </view>
        </view>
    )
}

const style= StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    counterContainer: {
        fontWeight: "700",
        fontSize: 16,
        color: "red"
      },

      buttonContainer:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },

      buttonLeft:{
        height: 30,
        width: 60,
      },
    
}

)

export default CounterPage;