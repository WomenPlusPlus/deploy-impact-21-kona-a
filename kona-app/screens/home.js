import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { GlobalStyles } from '../components/globals/GlobalStyles';
import FlatButton from '../components/globals/Button';
import BigButton from '../components/globals/BigButton';
import Data from '../assets/dummy_orgs.json';
import { QuestionStyles } from '../components/question/QuestionStyles';

export default function Home({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('Cover')
    }

    const pressFilter = () => {
        navigation.navigate('Filter', Data)
    }

    return (
      <View style={GlobalStyles.container}>
        { Data.forEach(org => console.log(org['Name'])) }
        <Text style={GlobalStyles.titleTextHomepage}>What do you need help with?</Text>
        <View style={QuestionStyles.cardsContainerLeft}>
          <BigButton answer='Food' onPress={pressFilter} />
          <BigButton answer='Shelter' onPress={pressFilter} />
          <BigButton answer='Education' onPress={pressFilter} />
          <BigButton answer='Agriculture' onPress={pressFilter} />
          <BigButton answer='Social Protection' onPress={pressFilter} />
        </View>
        <FlatButton text='Cover Page' onPress={pressHandler} />
      </View>

    )
}
