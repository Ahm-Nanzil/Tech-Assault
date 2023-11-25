import React from 'react';
import { View, Text } from 'react-native';

const PassingValue = ({ route }) => {
  const { total } = route.params;


  return (
    <View>
      <Text>Cart Page</Text>
      <Text >Total amount: ${total}</Text>

    </View>
  );
};

export default PassingValue;
