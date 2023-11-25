
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const ShippingAddressPage = () => {
  const [address, setAddress] = useState({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const handleChange = (field, value) => {
    setAddress((prevAddress) => ({ ...prevAddress, [field]: value }));
  };

  const handleSaveAddress = () => {
    // Implement logic to save the address details
    console.log('Address saved:', address);
    // You can save the address to a database, storage, or use it as needed in your app
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Shipping Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={address.fullName}
        onChangeText={(text) => handleChange('fullName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address Line 1"
        value={address.addressLine1}
        onChangeText={(text) => handleChange('addressLine1', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address Line 2"
        value={address.addressLine2}
        onChangeText={(text) => handleChange('addressLine2', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={address.city}
        onChangeText={(text) => handleChange('city', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Postal Code"
        value={address.postalCode}
        onChangeText={(text) => handleChange('postalCode', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Country"
        value={address.country}
        onChangeText={(text) => handleChange('country', text)}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveAddress}>
        <Text style={styles.saveButtonText}>Save Address</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  saveButton: {
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ShippingAddressPage;
