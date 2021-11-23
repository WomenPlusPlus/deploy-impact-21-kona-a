import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { GlobalStyles } from '../components/globals/GlobalStyles';
import MainButton from '../components/globals/MainButton';
import CheckButton from '../components/globals/CheckButton';
import { QuestionStyles } from '../components/locals/QuestionStyles';
import FilterButton from '../components/locals/FilterButton';
import ExpandSeeAll from '../components/locals/Expand';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Data from '../assets/kona_orgs1.js';
import AccordionFilter from '../components/locals/Accordion';
import { useNavigation } from '@react-navigation/native';

export default function Filter({ filterKeyword, setFilteredOrgs }) {
  const initialKeywordSet = new Set();
  initialKeywordSet.add(filterKeyword);

  const navigation = useNavigation();

  const [selectedKeywords, setSelectedKeywords] = useState(initialKeywordSet);

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
  const remainingMainCategories = filterBy(filterKeyword, mainCategories);
  const remainingTargetGroups = filterBy('Refugees', targetGroups);

  const filterByOneOfThreeCategories = (orgs, keyword) => {
    const keywordLowercase = keyword.toLowerCase();
    const newOrgs = orgs.filter( (org) =>
      org['MainCategory'].toLowerCase().includes(keywordLowercase) ||
      org['SubCategory'].toLowerCase().includes(keywordLowercase) ||
      org['TargetGroup'].toLowerCase().includes(keywordLowercase)
    );
    return newOrgs;
  }

  const filterByKeywords = (keywords) => {
    let filteredData = Data;
    keywords.forEach((keyword) => filteredData = filterByOneOfThreeCategories(filteredData, keyword) );
    setFilteredOrgs(filteredData);
  }

  const onCheckHandler = (answer) => {
    const newSelectedKeywords = new Set(selectedKeywords);
    newSelectedKeywords.add(answer);
    filterByKeywords(newSelectedKeywords);
    setSelectedKeywords(newSelectedKeywords);


  }

  const onUncheckHandler = (answer) => {
    const newSelectedKeywords = new Set(selectedKeywords);
    newSelectedKeywords.delete(answer);
    filterByKeywords(newSelectedKeywords);
    setSelectedKeywords(newSelectedKeywords);
  }

  const navigateToAccordion = () => {
    navigation.navigate('Accordion', selectedKeywords )
  };

  console.log(selectedKeywords);

  return (
    <View>

      {/* <TouchableOpacity onPress = { () => filterByOneOfThreeCategories('Health') }><Text>Click here</Text></TouchableOpacity> */}
      <View style={GlobalStyles.greyContainer}>
        <View style={GlobalStyles.whiteContainer}>
          <View style={GlobalStyles.topFilterSection}>
            <Text style={GlobalStyles.normalText}>I need help with:</Text>
            <FilterButton answer= "Filter" onPress={navigateToAccordion} keyword={filterKeyword}/>
          </View>
          <View style={QuestionStyles.flexDirectionColumn}>
            <CheckButton answer={filterKeyword} onCheck={onCheckHandler} onUncheck={onUncheckHandler} initiallyChecked />
            <ExpandSeeAll categories={remainingMainCategories}  onCheck={onCheckHandler} onUncheck={onUncheckHandler}/>
          </View>
          <Text style={GlobalStyles.normalText}>I need help for:</Text>
          <View style={QuestionStyles.flexDirectionColumn}>
            <CheckButton answer='Refugees' onCheck={onCheckHandler} onUncheck={onUncheckHandler} />
            <ExpandSeeAll categories={remainingTargetGroups} onCheck={onCheckHandler} onUncheck={onUncheckHandler} />
          </View>
        </View>
      </View>
    </View>
  )
}
