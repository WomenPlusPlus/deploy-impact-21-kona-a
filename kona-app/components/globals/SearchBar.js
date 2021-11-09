import React from 'react';
import { useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { GlobalStyles } from './GlobalStyles';
import { FontAwesome } from '@expo/vector-icons';

export default function SearchBar ({ placeholder, data, setSearchQuery }) {
    const handleFilter = (text) => {
            setSearchQuery(text);
    }
    return (
        <View>
            <View>
                <TextInput
                style={GlobalStyles.searchContainer}
                placeholder="Search here"
                onChangeText={handleFilter}/>
                <FontAwesome name="search" />
            </View>    
        </View>
    );
  }

