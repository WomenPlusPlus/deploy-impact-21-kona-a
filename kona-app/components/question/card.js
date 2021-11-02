import React from 'react';
import { View } from 'react-native';
import { QuestionStyles } from './QuestionStyles';
import Subject from './Subject';
import QuestionText from './QuestionText'

const Card = () => {
    return (
    <View style={QuestionStyles.questionContainer}>
      <Subject />
      <QuestionText />
    </View>
    )
}

export default Card;
