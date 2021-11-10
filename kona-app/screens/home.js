import React, { useState } from 'react';
import { Text, View, ImageBackground, ScrollView } from 'react-native';
import { GlobalStyles } from '../components/globals/GlobalStyles';
import FlatButton from '../components/globals/Button';
import BigButton from '../components/globals/BigButton';
import Data from '../assets/dummy_v3.json';
import SearchBar from '../components/globals/SearchBar';


export default function Home({ navigation }) {

  const [searchQuery, setSearchQuery] = useState('');

  const pressHandler = () => {
    navigation.navigate('FilteredOrgs', searchQuery)
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
      <ScrollView>
        <View style={GlobalStyles.container}>
          <View style={{flex: 1}}>
            <ImageBackground source={require('../assets/Vector.png')} style={{flex: 1, justifyContent: 'center'}}>
              <Text style={GlobalStyles.bannerText}>
               We're here to help you find the support you need.
              </Text>
            </ImageBackground> 
            <Text>What do you need help with?</Text>
            <SearchBar data={Data} setSearchQuery = {setSearchQuery}/>
          </View>
          { Data.forEach(org => console.log(org['Name'])) }
          { console.log(typeof(Data)) }
          { console.log(filteredOrgs) }
          { console.log(typeof(filteredOrgs)) }
        </View>
        <View style={GlobalStyles.whiteContainer}>
          <Text style={GlobalStyles.normalText}>I need help with:</Text>
          <BigButton answer='Food' onPress={pressFilter} />
          <BigButton answer='Shelter' onPress={pressFilter} />
          <BigButton answer='Education' onPress={pressFilter} />
          <BigButton answer='Agriculture' onPress={pressFilter} />
          <BigButton answer='Social Protection' onPress={pressFilter} />
        </View>
        <View style={GlobalStyles.whiteContainer}>
          <Text style={GlobalStyles.normalText}>I need help for:</Text>
          <BigButton answer='Victims of domestic violence' onPress={pressFilter} />
          <BigButton answer='Refugees' onPress={pressFilter} />
          <BigButton answer='Homeless People' onPress={pressFilter} />
          <BigButton answer='Disabled People' onPress={pressFilter} />
          <BigButton answer='LGBTQIA+' onPress={pressFilter} />
          <BigButton answer='Migrants' onPress={pressHandler} />
        </View>
        <FlatButton text='Cover Page' onPress={pressHandler} />
      </ScrollView>
    )
}
