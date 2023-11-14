// SearchHeader.js

import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchHeader = () => {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput style={styles.searchInput} placeholder="Search in TechAssult" />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: 'grey',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
});

export default SearchHeader;
