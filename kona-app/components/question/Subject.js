import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../globals/GlobalStyles';
import { questionStyles } from './questionStyles';

const Subject = () => {
    return (
    <View style={questionStyles.questionContainer}>
      <Text style={globalStyles.titleTextBold}>Education</Text>
    </View>
    )
}

export default Subject;
