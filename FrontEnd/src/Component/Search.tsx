import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    // Handle your search logic here
    console.log('Search Query:', query);
    setSearchQuery(query);
  };

  return (
    <View style={styles.container}>
      <Icon name="search" type="font-awesome" color="#999" size={20} />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
});

export default SearchInput;
