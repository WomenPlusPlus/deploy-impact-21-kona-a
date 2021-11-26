import React from 'react';
import { Text, View } from 'react-native';
import { GlobalStyles } from '../globals/GlobalStyles';
import { LocalStyles } from './LocalStyles';

const SearchedFor = () => {
    return (
    <View style={LocalStyles.subjectContainer}>
      <Text style={GlobalStyles.searchResText}>You searched for:</Text>
    </View>
    )
}

export default SearchedFor;
