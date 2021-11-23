import React from 'react';
import { Text, View } from 'react-native';
import { GlobalStyles } from '../globals/GlobalStyles';
import { QuestionStyles } from './QuestionStyles';

const Subject = () => {
    return (
    <View style={QuestionStyles.subjectContainer}>
      <Text style={GlobalStyles.titleTextBold}>Education</Text>
    </View>
    )
}

export default Subject;
