import React from 'react';
import { Text, View } from 'react-native';
import { GlobalStyles } from '../components/globals/GlobalStyles';
import FlatButton from '../components/globals/Button';
import BigButton from '../components/globals/BigButton';
import { QuestionStyles } from '../components/question/QuestionStyles';

export default function Filter({ route, navigation }) {

  const object = route.params;
  console.log(object)

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.titleTextHomepage}>Let's narrow down your results</Text>
      <View style={QuestionStyles.cardsContainerLeft}>
        <Text></Text>
        <BigButton answer='Food' />
        <BigButton answer='Shelter' />
        <BigButton answer='Education' />
        <BigButton answer='Agriculture' />
        <BigButton answer='Social Protection' />
      </View>
    </View>
  )
}
