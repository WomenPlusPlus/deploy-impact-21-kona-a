import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { GlobalStyles } from '../components/globals/GlobalStyles';
import ResultsButton from '../components/locals/ResultsButton';
import Data from '../data/kona_orgs.json';
import AccordionFilter from '../components/locals/Accordion';
import Footer from "../components/globals/Footer";
import { filterByKeywordInAnyField } from '../components/globals/FilterUtils';

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
    const keywordUppercase = keyword.toUpperCase();
    // const newOrgs = orgs.filter( (org) =>
    //   org['MainCategory'].toLowerCase().includes(keywordLowercase) ||
    //   org['SubCategory'].toLowerCase().includes(keywordLowercase) ||
    //   org['TargetGroup'].toLowerCase().includes(keywordLowercase) ||
    //   org['Region'].toLowerCase().includes(keywordLowercase)
    // );
    const fields = ["MainCategory", "SubCategory", "TargetGroup", "SubTargetGroup", "Region"];
    const newOrgs = filterByKeywordInAnyField(orgs, fields, keywordUppercase);
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

    if (category.content.every((subCategory) => newSelectedKeywords.has(subCategory))) {
      category.content.forEach((subCategory) => newSelectedKeywords.delete(subCategory));
      newSelectedKeywords.add(category.title);
    }
    setSelectedKeywords(newSelectedKeywords);
    console.log("test");
  }

  const onCheckMainHandler = (category) => {
    const newSelectedKeywords = new Set(selectedKeywords);
    newSelectedKeywords.add(category.title);
    category.content.forEach((subCategory) => {newSelectedKeywords.delete(subCategory)});
    setSelectedKeywords(newSelectedKeywords);
  }

  const onUncheckSubHandler = (category, subCategoryTitle) => {
    const newSelectedKeywords = new Set(selectedKeywords);
    if (selectedKeywords.has(category.title)) {
      newSelectedKeywords.delete(category.title);
      category.content.forEach((subCategory) => newSelectedKeywords.add(subCategory));
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
        <ScrollView style={{backgroundColor: "white"}}>
            <View>
              <AccordionFilter onCheckMain={onCheckMainHandler} onCheckSub={onCheckSubHandler} onUncheckMain={onUncheckMainHandler} onUncheckSub={onUncheckSubHandler} onCheck={onCheckHandler} onUncheck={onUncheckHandler} selectedKeywords={selectedKeywords}/>
            </View>
            <View style={GlobalStyles.flexCenter}>
              <ResultsButton filteredOrgs={filteredBySelectedKeywords} selectedKeywords={selectedKeywords} />
            </View>
            <Footer/>
      </ScrollView>
    )
}
