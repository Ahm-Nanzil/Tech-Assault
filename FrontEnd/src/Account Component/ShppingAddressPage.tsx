// ShippingAddressShowPage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

const ShippingAddressShowPage = ({ route }) => {
  // Assuming the address details are passed through navigation route
  // const { address } = route.params;

  const addressDetails = {
    fullName: 'Abu Hasib Muhammad Nanzil',
    addressLine1: 'B block',
    addressLine2: 'Mirpur 10',
    city: 'Dhaka',
    postalCode: '1206',
    country: 'Bangladesh',
    // Add the Google Maps URL with the address coordinates
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3282332799913!2d90.36612287353347!3d23.806924478631803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d6f6b8c2ff%3A0x3b138861ee9c8c30!2sMirpur%2010%20Roundabout%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1700057648142!5m2!1sen!2sbd',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Shipping Address</Text>
      <Text style={styles.detail}>Full Name: {addressDetails.fullName}</Text>
      <Text style={styles.detail}>Address Line 1: {addressDetails.addressLine1}</Text>
      <Text style={styles.detail}>Address Line 2: {addressDetails.addressLine2}</Text>
      <Text style={styles.detail}>City: {addressDetails.city}</Text>
      <Text style={styles.detail}>Postal Code: {addressDetails.postalCode}</Text>
      <Text style={styles.detail}>Country: {addressDetails.country}</Text>

      {/* Webview for Google Maps */}
      <WebView
        source={{ html: `<iframe src="${addressDetails.mapUrl}" width="100%" height="100%" frameborder="0" allowfullscreen />` }}
        style={[styles.map, { borderColor: 'tomato' }]}
      />
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
  detail: {
    fontSize: 16,
    marginBottom: 10,
  },
  map: {
    flex: 1,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 2, // Add border width
    overflow: 'hidden',
  },
});

export default ShippingAddressShowPage;
