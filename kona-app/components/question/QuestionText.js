import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../globals/GlobalStyles';
import { questionStyles } from './questionStyles';

const QuestionText = () => {
    return (
    <View style={questionStyles.questionContainer}>
      <Text style={globalStyles.questionText}>What do you need help with?</Text>
    </View>
    )
}

export default QuestionText;
