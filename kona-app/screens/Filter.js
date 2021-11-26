import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { GlobalStyles } from '../components/globals/GlobalStyles';
import CheckButton from '../components/globals/CheckButton';
import { LocalStyles } from '../components/locals/LocalStyles';
import FilterButton from '../components/locals/FilterButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Data from '../data/kona_orgs.json';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { filterByKeywordInAnyField } from '../components/globals/FilterUtils';

export default function Filter({ filterKeyword, setFilteredOrgs }) {
  const initialKeywordSet = new Set();

  initialKeywordSet.add(filterKeyword);

  const navigation = useNavigation();

  const [selectedKeywords, setSelectedKeywords] = useState(initialKeywordSet);

  const filterByKeywords = (keywords) => {
    let filteredData = Data;
    keywords.forEach((keyword) => filteredData = filterByKeywordInAnyField(filteredData,['MainCategory', 'SubCategory', 'TargetGroup','SubTargetGroup'], keyword) );
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

  const onSearchButtonCheck = (filterKeyword) => {
    switch(filterKeyword) {
     case "Food":
      return "food-variant";
     case "Shelter":
      return "home-heart";
     case "Education":
       return "book-open-page-variant";
     case "Health":
       return "medical-bag";
     case "Employment":
       return "account-hard-hat"
     default:
      return ""
    }
   }

  return (
    <View>
      <View style={GlobalStyles.roseContainer}>
        <View style={GlobalStyles.whiteContainer}>
          <View style={GlobalStyles.topFilterSection}>
            <Text style={GlobalStyles.searchResText}>You searched for:</Text>            
          </View>
          <View style={LocalStyles.flexDirectionColumn}>
            <CheckButton             
            answer={filterKeyword} 
            iconName={onSearchButtonCheck(filterKeyword)}onCheck={onCheckHandler} onUncheck={onUncheckHandler} initiallyChecked />
          </View>
          <Text style={GlobalStyles.searchResText}>Add more filters to narrow down the results:</Text>
          <View style={LocalStyles.flexDirectionColumn}>
            <CheckButton answer='Refugees' onCheck={onCheckHandler} onUncheck={onUncheckHandler} />
            <CheckButton answer='Homeless People' onCheck={onCheckHandler} onUncheck={onUncheckHandler} />
            <TouchableOpacity style={GlobalStyles.seeAllSection} onPress={navigateToAccordion} >
              <FilterButton answer= "See all filters"  keyword={filterKeyword}/>
              <MaterialIcons name="arrow-right-alt" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
