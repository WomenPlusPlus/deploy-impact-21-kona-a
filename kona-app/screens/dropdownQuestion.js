import React from 'react';
import { Text, View } from 'react-native';
import Card from '../components/question/card';
import Dropdown from '../components/question/dropdown';
import FlatButton from '../components/globals/Button';
import { questionStyles } from '../components/question/questionStyles';
import { globalStyles } from '../components/globals/GlobalStyles';

export default function DropdownQuestion () {
  return (
    // <View style={questionStyles.mainContainer}>
    <View style={globalStyles.questionContainer}>
      <View style={globalStyles.smallerQuestionContainer}>
        <Card />
        <Dropdown />
        <FlatButton style={questionStyles.btnContainer} text='Next' onPress={() => console.log("OK Pressed")}/>
      </View>
    </View>
  )
}
