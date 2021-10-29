import React from 'react';
import { Text, View } from 'react-native';
import Card from '../components/question/card';
import Dropdown from '../components/question/dropdown';
import FlatButton from '../components/globals/Button';

export default function DropdownQuestion () {
  return (
    <View>
      <Card />
      <Dropdown />
      <FlatButton text='Next' onPress={() => console.log("OK Pressed")}/>
    </View>
  )
}
