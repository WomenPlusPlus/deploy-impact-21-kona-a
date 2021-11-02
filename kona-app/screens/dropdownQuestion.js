import React from 'react';
import { View } from 'react-native';
import Card from '../components/question/Card';
import Dropdown from '../components/question/Dropdown';
import FlatButton from '../components/globals/Button';
import { QuestionStyles } from '../components/question/QuestionStyles';
import { GlobalStyles } from '../components/globals/GlobalStyles';

export default function DropdownQuestion () {
  return (
    <View style={GlobalStyles.questionContainer}>
      <View style={GlobalStyles.smallerQuestionContainer}>
        <Card />
        <Dropdown />
        <FlatButton style={QuestionStyles.btnContainer} text='Next' onPress={() => console.log("OK Pressed")}/>
      </View>
    </View>
  )
}
