import React from 'react';
import { View, Text } from 'react-native';

const PassingValue = ({ route }) => {
  // Check if route is defined before accessing its params
  const { total } = route.params;

  // Now you can use the cartItems in your component

  return (
    <View>
      <Text>Cart Page</Text>
      {/* Display information about cartItems */}
      <Text >Total amount: ${total}</Text>

      {/* Add more details as needed */}
    </View>
  );
};

export default PassingValue;
