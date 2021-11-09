import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { GlobalStyles } from '../components/globals/GlobalStyles';
import FlatButton from '../components/globals/Button';
import BigButton from '../components/globals/BigButton';
import Data from '../assets/dummy_orgs.json';
import { QuestionStyles } from '../components/question/QuestionStyles';
import SearchBar from '../components/globals/SearchBar';


export default function Home({ navigation }) {

  const [searchQuery, setSearchQuery] = useState('');

  const pressHandler = () => {
    navigation.navigate('Cover', searchQuery)
}

const filteredOrgsYulia = Data.filter((org) => {
  if (org['Main Category'].toUpperCase().includes(searchQuery.toUpperCase())) {
    return org
  }
})

    const pressSearchHandler = () => {
        navigation.navigate('FilteredOrgs', filteredOrgsYulia)
    }
    
    const filteredOrgs = Data.filter((org) => {
      if (org['Main Category'].includes('Food')) {
        return org
      }
    })
    const pressFilter = () => {
        navigation.navigate('Filter', filteredOrgs)
    }

    if (searchQuery) {
        return (
          <View style={GlobalStyles.container}>
            <SearchBar data={Data} setSearchQuery = {setSearchQuery}/>
            <FlatButton text='Search' onPress={pressSearchHandler} />
          </View>
        );
    }
    return (
      <View style={GlobalStyles.container}>
        <SearchBar data={Data} setSearchQuery = {setSearchQuery}/>
        { Data.forEach(org => console.log(org['Name'])) }
        { console.log(typeof(Data)) }
        { console.log(filteredOrgs) }
        { console.log(typeof(filteredOrgs)) }
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
