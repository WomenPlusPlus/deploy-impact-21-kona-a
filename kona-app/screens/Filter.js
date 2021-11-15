import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { GlobalStyles } from '../components/globals/GlobalStyles';
import BigButton from '../components/globals/BigButton';
import { QuestionStyles } from '../components/question/QuestionStyles';
import FilterButton from '../components/question/Filter';
import ExpandSeeAll from '../components/question/Expand';
import AccordionFilter from '../components/question/Accordion';



export default function Filter({ route, navigation, filterKeyword }) {

  /* if (searchQuery) {
        return (
          <View style={GlobalStyles.container}>
            <SearchBar data={Data} setSearchQuery = {setSearchQuery}/>
            <FlatButton text='Search' onPress={pressSearchHandler} />
          </View>
        );
    } */

  const mainCategories = ['Food', 'Shelter', 'Education', 'Agriculture', 'Social Protection']

  const targetGroups = ['Victims of domestic Violence', 'Refugees', 'Homeless People', 'Disabled People', 'LGBTQIA+', 'Migrants']

  const filterBy = (selectedCat, buttonNames) => {

    const filteredCats = buttonNames.filter((cat) => {
      if (cat != selectedCat) {
        return cat
      }
    });
    return filteredCats
  };

  const filterByMainCategory = filterBy(filterKeyword, mainCategories);
  const filterByTargetGroup = filterBy('Refugees', targetGroups);

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
            <ExpandSeeAll categories={filterByMainCategory}/>
          </View>
          <Text style={GlobalStyles.normalText}>I need help for:</Text>
          <View style={QuestionStyles.flexDirectionColumn}>
            <BigButton answer='Refugees' />
            <ExpandSeeAll categories={filterByTargetGroup}/>
          </View>
        </View>
      </View>
      <AccordionFilter/>
    </View>
  )
}
