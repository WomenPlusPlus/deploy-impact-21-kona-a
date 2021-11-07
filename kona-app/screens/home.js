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
    const filteredOrgs = Data.map((org) => {
      if (org['Main Category'].includes('Food')) {
        return org
      }
    })

    const pressFilter = () => {
        navigation.navigate('Filter', filteredOrgs)
    }

    return (
      <View style={GlobalStyles.container}>
        { Data.forEach(org => console.log(org['Name'])) }
        { console.log(filteredOrgs) }
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
