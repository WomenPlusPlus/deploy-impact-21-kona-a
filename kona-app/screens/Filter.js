import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { GlobalStyles } from '../components/globals/GlobalStyles';
import BigButton from '../components/globals/BigButton';
import { QuestionStyles } from '../components/question/QuestionStyles';
import FilterButton from '../components/question/Filter';
import ExpandSeeAll from '../components/question/Expand';



export default function Filter({ route, navigation, filterKeyword }) {

  /* if (searchQuery) {
        return (
          <View style={GlobalStyles.container}>
            <SearchBar data={Data} setSearchQuery = {setSearchQuery}/>
            <FlatButton text='Search' onPress={pressSearchHandler} />
          </View>
        );
    } */

  const mainCategories = {
    buttons: ['Food', 'Shelter', 'Education', 'Agriculture', 'Social Protection']
  }

  const targetGroups = {
    buttons: ['Victims of domestic Violence', 'Refugees', 'Homeless People', 'Disabled People', 'LGBTQIA+', 'Migrants']
  }

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
            <BigButton answer={filterKeyword} checked/>
            <ExpandSeeAll categories={mainCategories}/>
          </View>
          <Text style={GlobalStyles.normalText}>I need help for:</Text>
          <View style={QuestionStyles.flexDirectionColumn}>
            <BigButton answer='Refugees' />
            <ExpandSeeAll categories={targetGroups}/>
          </View>
        </View>
      </View>
    </View>
  )
}
