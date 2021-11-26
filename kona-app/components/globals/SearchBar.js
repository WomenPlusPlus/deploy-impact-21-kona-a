import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { GlobalStyles } from './GlobalStyles';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function SearchBar({ placeholder, initialSearchQuery, onSubmit, autoFocus, navigateOnChange }) {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);

  const navigation = useNavigation();
  const handleFilter = (text) => {
    if (navigateOnChange) {
      navigation.navigate('SearchPage', text);
      setSearchQuery("");
    } else {
      setSearchQuery(text);
    }
  };
  
  return (
    <View style={{ paddingBottom: 51 }}>
      <View style={GlobalStyles.searchContainer}>
        <FontAwesome style={GlobalStyles.searchIcon} name="search" />
        <TextInput
          style={[GlobalStyles.placeholderText, GlobalStyles.input]}
          placeholder="Search"
          value={searchQuery}
          onChangeText={handleFilter}
          onSubmitEditing={onSubmit}
          autoFocus={autoFocus}
        />
      </View>
    </View>
  );
}
