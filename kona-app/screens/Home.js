import React, { useState } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { GlobalStyles } from '../components/globals/GlobalStyles';
import FlatButton from '../components/globals/Button';
import BigButton from '../components/globals/BigButton';
import Data from '../assets/dummy_orgs.json';
import SearchBar from '../components/globals/SearchBar';

export default function Home({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");

  const pressHandler = () => {
    navigation.navigate('FilteredOrgs', searchQuery)
}

const filteredOrgsSearch = Data.filter((org) => {
  if (org['Main Category'].toUpperCase().includes(searchQuery.toUpperCase())) {
    return org
  }
})

    const pressSearchHandler = () => {
        navigation.navigate('FilteredOrgs', filteredOrgsSearch)
    }

  const pressFilter = (category) => {

      const filteredOrgs = Data.filter((org) => {
        if (org['Main Category'].includes(category)) {
          return org
        }
        
      });

        navigation.navigate('FilteredOrgs', filteredOrgs)
      }

  if (searchQuery) {
    return (
      <View style={GlobalStyles.container}>
        <SearchBar data={Data} setSearchQuery={setSearchQuery} />
        <FlatButton text="Search" onPress={pressSearchHandler} />
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={GlobalStyles.container}>
        <View style={GlobalStyles.homepageContainer}>
          <Image
            style={GlobalStyles.handImage}
            source={require("../assets/Vector.png")}
            style={GlobalStyles.handImage}
          />
          <Text style={GlobalStyles.bannerText}>
            We're here to help you find the support you need.
          </Text>
          <Text style={[GlobalStyles.normalText, GlobalStyles.ptpb]}>
            What do you need help with?
          </Text>
          <SearchBar data={Data} setSearchQuery={setSearchQuery} />
        </View>
      </View>
      <View style={GlobalStyles.whiteContainer}>
          <Text style={GlobalStyles.normalText}>I need help with:</Text>
          <BigButton answer='Food' onPressWithParam={pressFilter} />
          <BigButton answer='Shelter' onPressWithParam={pressFilter} />
          <BigButton answer='Education' onPressWithParam={pressFilter} />
          <BigButton answer='Agriculture' onPressWithParam={pressFilter} />
          <BigButton answer='Social Protection' onPressWithParam={pressFilter} />
        </View>
        <View style={GlobalStyles.whiteContainer}>
          <Text style={GlobalStyles.normalText}>I need help for:</Text>
          <BigButton answer='Victims of domestic violence' onPressWithParam={pressFilter} />
          <BigButton answer='Refugees' onPressWithParam={pressFilter} />
          <BigButton answer='Homeless People' onPressWithParam={pressFilter} />
          <BigButton answer='Disabled People' onPressWithParam={pressFilter} />
          <BigButton answer='LGBTQIA+' onPressWithParam={pressFilter} />
          <BigButton answer='Migrants' onPressWithParam={pressHandler} />
        </View>
        <FlatButton text='Cover Page' onPressWithParam={pressHandler} />
      </ScrollView>
    )
  }