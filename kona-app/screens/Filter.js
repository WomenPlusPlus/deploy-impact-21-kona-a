import React from 'react';
import { Text, View } from 'react-native';
import { GlobalStyles } from '../components/globals/GlobalStyles';
import FlatButton from '../components/globals/Button';
import BigButton from '../components/globals/BigButton';
import { QuestionStyles } from '../components/question/QuestionStyles';

export default function Filter({ route, navigation }) {

  const object = route.params;

  return (
    <View style={GlobalStyles.container}>
      { console.log(object[0]['Name']) }
      { /* doesn't work because all objects are passing not just true ones. object.forEach(org => console.log(org)) */ }
      <Text style={GlobalStyles.titleTextHomepage}>Let's narrow down your results</Text>
      <View style={QuestionStyles.cardsContainerLeft}>
        <BigButton answer='Food' />
        <BigButton answer='Shelter' />
        <BigButton answer='Education' />
        <BigButton answer='Agriculture' />
        <BigButton answer='Social Protection' />
      </View>
    </View>
  )
}
