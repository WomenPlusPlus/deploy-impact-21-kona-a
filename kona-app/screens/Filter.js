import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { GlobalStyles } from '../components/globals/GlobalStyles';
import BigButton from '../components/globals/BigButton';
import { QuestionStyles } from '../components/question/QuestionStyles';
import FilterButton from '../components/question/Filter';

export default function Filter({ route, navigation }) {

  // const object = route.params;

    /* if (searchQuery) {
        return (
          <View style={GlobalStyles.container}>
            <SearchBar data={Data} setSearchQuery = {setSearchQuery}/>
            <FlatButton text='Search' onPress={pressSearchHandler} />
          </View>
        );
    } */

  return (
    <View>
      {/* { console.log(object) } */}
      {/* { object.forEach(org => console.log(org["Name"])) } */}
      <View style={GlobalStyles.greyContainer}>
        <View style={GlobalStyles.whiteContainer}>
          <View style={GlobalStyles.topFilterSection}>
            <Text style={GlobalStyles.normalText}>I need help with:</Text>
            <FilterButton answer= "Filter"/>
          </View>
          <View style={QuestionStyles.flexDirectionColumn}>
            <BigButton answer='Food' />
          </View>
          <Text style={GlobalStyles.normalText}>I need help for:</Text>
          <View style={QuestionStyles.flexDirectionColumn}>
            <BigButton answer='Refugees' />
          </View>
        </View>
      </View>
    </View>
  )
}
