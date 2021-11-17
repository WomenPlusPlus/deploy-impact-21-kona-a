import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { GlobalStyles } from '../components/globals/GlobalStyles';
import BigButton from '../components/globals/BigButton';
import CheckButton from '../components/globals/CheckButton';
import { QuestionStyles } from '../components/question/QuestionStyles';
import Data from '../assets/kona_orgs.json';
import AccordionFilter from '../components/question/Accordion';

export default function Accordion({ route, navigation }) {
  
  const receivedKeywords = route.params;
  console.log("We received this from the Filtered Orgs:")
  console.log(receivedKeywords);
  
  const initialKeywordSet = new Set();
  initialKeywordSet.add('food');

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
  const remainingMainCategories = filterBy('food', mainCategories);
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

    return(
        <ScrollView>
            <View>
              <AccordionFilter onCheck={onCheckHandler} onUncheck={onUncheckHandler}/>
            </View>
      </ScrollView>
    )
}
