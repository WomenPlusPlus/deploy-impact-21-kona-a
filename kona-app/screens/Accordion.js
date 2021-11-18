import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { GlobalStyles } from '../components/globals/GlobalStyles';
import ResultsButton from '../components/question/ResultsButton';
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

  // array with main categories
  const mainCategories = ['Health', 'Education', 'Social Services', 'Agriculture', 'Legal', 'Migration', 'Employment', 'Crisis']
  // arrays of sub categories
  const healthSub = ['Disable', 'Sex', 'Maternal', 'Disease', '%AIDS%', 'Healthcare', 'Nutrition', 'Hygiene']
  const educationSub = ['Training',	'Financ%',	'Facilities',	'%AIDS%',	'Entrepreneur']
  const socialServicesSub = ['%Violence%',	'%Victim%',	'Safety',	'Poverty',	'Sanitation',	'Water	Prison',	'Protection',	'LBGT']
  const agricultureSub = ['Technology',	'Education',	'Seed', 'Donation',	'Financial',	'Agriculture', 'Development']
  const legalSub = ["Women's Rights",	"Children's Rights",	"Human Trafficking",	"Security",	"Child Protection",	"Reintegration",	"Political Justice",	"Discrimination",	"Advisory",	"Victim Advocacy",	"Victim"]
  const migrationSub = ['Refugee',	'Repatriation',	'Asylum',	'%Integration%',	'Citizenship']
  const employmentSub = ['Training%',	'Entrepreneur%',	'Technical%',	'Partnerships',	'Financ%',	'Apprenticeship']
  const crisisSub = ['Humanitarian', 	'Emergencies',	'Disaster',	'Human Trafficking',	'War']
  //

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
            <ResultsButton filteredOrgs={}/>
      </ScrollView>
    )
}
