import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../globals/GlobalStyles';
import { questionStyles } from './questionStyles';

const Card = () => {
    return (
    <View style={questionStyles.questionContainer}>
      <Text style={globalStyles.titleTextBold}>Education</Text>
      <Text style={globalStyles.normalText}>In which Country do you live?</Text>
    </View>
    )
}

export default Card;
