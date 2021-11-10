import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { GlobalStyles } from '../components/globals/GlobalStyles';
import FlatButton from '../components/globals/Button';
import BigButton from '../components/globals/BigButton';
import { QuestionStyles } from '../components/question/QuestionStyles';

export default function Filter({ route, navigation }) {

  const object = route.params;

  return (
    <ScrollView>
      { console.log(object) }
      { object.forEach(org => console.log(org["Name"])) }
      <View style={GlobalStyles.greyContainer}>
        <View style={GlobalStyles.whiteContainer}>
          <Text style={GlobalStyles.normalText}>I need help with:</Text>
          <View style={QuestionStyles.flexDirectionColumn}>
            <BigButton answer='Food' />
          </View>
          <Text style={GlobalStyles.normalText}>I need help for:</Text>
          <View style={QuestionStyles.flexDirectionColumn}>
            <BigButton answer='Refugees' />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
