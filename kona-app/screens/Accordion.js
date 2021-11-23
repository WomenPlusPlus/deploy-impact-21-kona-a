import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { GlobalStyles } from '../components/globals/GlobalStyles';
import ResultsButton from '../components/question/ResultsButton';
import { QuestionStyles } from '../components/question/QuestionStyles';
import Data from '../assets/kona_orgs1.js';
import AccordionFilter from '../components/question/Accordion';

export default function Accordion({ route, navigation }) {

  const receivedKeywords = route.params;
  console.log("We received this from the Filtered Orgs:")
  console.log(receivedKeywords);

  const [selectedKeywords, setSelectedKeywords] = useState(receivedKeywords);

  console.log("Selected keywords:")
  console.log(selectedKeywords);

  const targetGroups = ['Victims of domestic Violence', 'Refugees', 'Homeless People', 'Disabled People', 'LGBTQIA+', 'Migrants']
  const filterBy = (selectedCat, buttonNames) => {
    const filteredCats = buttonNames.filter((cat) => {
      if (cat != selectedCat) {
        return cat
      }
    });
    return filteredCats
  };
  //const remainingMainCategories = filterBy('food', mainCategories);
  // const remainingTargetGroups = filterBy('Refugees', targetGroups);

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
    return filteredData;
    //setFilteredOrgs(filteredData);
  }

  const filteredBySelectedKeywords = filterByKeywords(selectedKeywords);

  const onCheckSubHandler = (category, subCategoryTitle) => {
    const newSelectedKeywords = new Set(selectedKeywords);
    newSelectedKeywords.add(subCategoryTitle);

    if (category.content.every((subCategory) => newSelectedKeywords.has(subCategory.key))) {
      category.content.forEach((subCategory) => newSelectedKeywords.delete(subCategory.key));
      newSelectedKeywords.add(category.title);
    }
    setSelectedKeywords(newSelectedKeywords);
    console.log("test");
  }

  const onCheckMainHandler = (category) => {
    const newSelectedKeywords = new Set(selectedKeywords);
    newSelectedKeywords.add(category.title);
    category.content.forEach((subCategory) => {newSelectedKeywords.delete(subCategory.key)});
    setSelectedKeywords(newSelectedKeywords);
  }

  const onUncheckSubHandler = (category, subCategoryTitle) => {
    const newSelectedKeywords = new Set(selectedKeywords);
    if (selectedKeywords.has(category.title)) {
      newSelectedKeywords.delete(category.title);
      category.content.forEach((subCategory) => newSelectedKeywords.add(subCategory.key));
    }
    newSelectedKeywords.delete(subCategoryTitle);
    setSelectedKeywords(newSelectedKeywords);
  }

  const onUncheckMainHandler = (answer) => {
    const newSelectedKeywords = new Set(selectedKeywords);
    newSelectedKeywords.delete(answer);
    setSelectedKeywords(newSelectedKeywords);
  }

  const onCheckHandler = (answer) => {
    const newSelectedKeywords = new Set(selectedKeywords);
    newSelectedKeywords.add(answer);
    setSelectedKeywords(newSelectedKeywords);
  }

  const onUncheckHandler = (answer) => {
    const newSelectedKeywords = new Set(selectedKeywords);
    newSelectedKeywords.delete(answer);
    setSelectedKeywords(newSelectedKeywords);
  }

    return(
        <ScrollView>
            <View>
              <AccordionFilter onCheckMain={onCheckMainHandler} onCheckSub={onCheckSubHandler} onUncheckMain={onUncheckMainHandler} onUncheckSub={onUncheckSubHandler} onCheck={onCheckHandler} onUncheck={onUncheckHandler} selectedKeywords={selectedKeywords}/>
            </View>
            <View style={GlobalStyles.flexCenter}>
              <ResultsButton filteredOrgs={filteredBySelectedKeywords} selectedKeywords={selectedKeywords} />
            </View>
      </ScrollView>
    )
}
