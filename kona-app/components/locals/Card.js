import React from 'react';
import { View } from 'react-native';
import Subject from './Subject';
import QuestionText from './QuestionText'

const Card = () => {
    return (
    <View>
      <Subject />
      <QuestionText />
    </View>
    )
}

export default Card;
