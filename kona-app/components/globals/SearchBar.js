import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { GlobalStyles } from './GlobalStyles';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function SearchBar({ placeholder, setSearchQuery, onSubmit }) {

  const navigation = useNavigation();
  const handleFilter = (text) => {
    setSearchQuery(text);
  };

  const goToSearch = () => {
    navigation.navigate('SearchPage');
  }
  
  return (
    <View style={{ paddingBottom: 51 }}>
      <View style={GlobalStyles.searchContainer}>
        <FontAwesome style={GlobalStyles.searchIcon} name="search" />
        <TextInput
          style={[GlobalStyles.placeholderText, GlobalStyles.input]}
          placeholder="Search"
          onChangeText={handleFilter, goToSearch}
          onSubmitEditing={onSubmit}
        />
      </View>
    </View>
  );
}
