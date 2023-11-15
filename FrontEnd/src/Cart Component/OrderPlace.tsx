import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CheckoutPage = ({ route }) => {
  const { total } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Thank you for your purchase!</Text>
      <Text style={styles.text}>Total amount: ${total}</Text>
      {/* Add more checkout information here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default CheckoutPage;
