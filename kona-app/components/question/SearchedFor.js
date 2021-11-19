import React from 'react';
import { Text, View } from 'react-native';
import { GlobalStyles } from '../globals/GlobalStyles';
import { QuestionStyles } from './QuestionStyles';

const SearchedFor = () => {
    return (
    <View style={QuestionStyles.subjectContainer}>
      <Text style={GlobalStyles.titleTextBold}>You searched for:</Text>
    </View>
    )
}

export default SearchedFor;