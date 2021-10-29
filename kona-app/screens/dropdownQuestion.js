import React from 'react';
import { Text, View } from 'react-native';
import Card from '../components/question/card';
import Dropdown from '../components/question/dropdown';

export default function DropdownQuestion () {
  return (
    <View>
      <Card />
      <Dropdown />
    </View>
  )
}
