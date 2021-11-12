import React, { useState } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { GlobalStyles } from '../components/globals/GlobalStyles';
import FlatButton from '../components/globals/Button';
import BigButton from '../components/globals/BigButton';
import Data from '../assets/dummy_orgs.json';
import SearchBar from '../components/globals/SearchBar';

export default function Home({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');

const filteredOrgsSearch = Data.filter((org) => {
  if (org['Main Category'].toUpperCase().includes(searchQuery.toUpperCase())) {
    return org
  }
})

    const navigateToFilteredOrgs = () => {
        navigation.navigate('FilteredOrgs', filteredOrgsSearch)
    }

  const filterBy = (field, keyword) => {

      const filteredOrgs = Data.filter((org) => {
        if (org[field].includes(keyword)) {
          return org
        }

      });

        navigation.navigate('FilteredOrgs', filteredOrgs)
      };
  
  const filterByMainCategory = (category) => filterBy('Main Category', category);

  const filterByTargetGroup = (category) => filterBy('Target Group', category);

  // if (searchQuery) {
  //   return (
  //     <View style={GlobalStyles.container}>
  //       <SearchBar initialValue={searchQuery} setSearchQuery={setSearchQuery} />
  //       <FlatButton text="Search" onPress={pressSearchHandler} />
  //     </View>
  //   );
  // }
  return (
    <ScrollView>
      <View style={searchQuery ? GlobalStyles.sbWhiteContainer : GlobalStyles.container}>
        { !searchQuery && <View style={GlobalStyles.homepageContainer}>
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
          
        </View>}
        <SearchBar data={Data} setSearchQuery={setSearchQuery} onSubmit={navigateToFilteredOrgs}/>
      </View>
      <View style={GlobalStyles.whiteContainer}>
          <Text style={GlobalStyles.normalText}>I need help with:</Text>
          <BigButton answer='Food' onPressWithParam={filterByMainCategory} />
          <BigButton answer='Shelter' onPressWithParam={filterByMainCategory} />
          <BigButton answer='Education' onPressWithParam={filterByMainCategory} />
          <BigButton answer='Agriculture' onPressWithParam={filterByMainCategory} />
          <BigButton answer='Social Protection' onPressWithParam={filterByMainCategory} />
        </View>
        { !searchQuery && <View style={GlobalStyles.whiteContainer}>
          <Text style={GlobalStyles.normalText}>I need help for:</Text>
          <BigButton answer='Victims of domestic violence' onPressWithParam={filterByTargetGroup} />
          <BigButton answer='Refugees' onPressWithParam={filterByTargetGroup} />
          <BigButton answer='Homeless People' onPressWithParam={filterByTargetGroup} />
          <BigButton answer='Disabled People' onPressWithParam={filterByTargetGroup} />
          <BigButton answer='LGBTQIA+' onPressWithParam={filterByTargetGroup} />
          <BigButton answer='Migrants' onPressWithParam={filterByTargetGroup} />
        </View>}
      </ScrollView>
    )
  }