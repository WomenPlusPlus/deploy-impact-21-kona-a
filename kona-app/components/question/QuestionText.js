import React from 'react';
import { Text, View } from 'react-native';
import { GlobalStyles } from '../globals/GlobalStyles';
import { QuestionStyles } from './QuestionStyles';


// change the text according to the question using props!
const QuestionText = () => {
    return (
    <View style={QuestionStyles.questionContainer}>
      <Text style={GlobalStyles.questionText}>What do you need help with?</Text>
    </View>
    )
}

export default QuestionText;
