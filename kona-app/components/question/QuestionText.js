import React from 'react';
import { Text, View } from 'react-native';
import { QuestionStyles } from './QuestionStyles';


// change the text according to the question using props!
const QuestionText = () => {
    return (
    <View style={QuestionStyles.subjectContainer}>
      <Text style={QuestionStyles.questionText}>What do you need help with?</Text>
    </View>
    )
}

export default QuestionText;
