import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, SafeAreaView, Switch, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import { GlobalStyles } from '../globals/GlobalStyles';
import { QuestionStyles } from './QuestionStyles';
import CheckButton from '../globals/CheckButton';
import { AntDesign, Feather } from '@expo/vector-icons';

const CONTENT = [
{
  title: 'Area of Support',
  content:
    [
      {key: 'Health', value: ['Disable', 'Sex', 'Maternal', 'Disease', 'AIDS', 'Healthcare', 'Nutrition', 'Hygiene']},
      {key: 'Education', value: ['Training',	'Financ',	'Facilities',	'AIDS',	'Entrepreneur']},
      {key: 'Agriculture', value: ['Technology',	'Education',	'Seed', 'Donation',	'Financial',	'Agriculture', 'Development']},
      {key: 'Social Services', value: ['Violence',	'Victim',	'Safety',	'Poverty',	'Sanitation',	'Water	Prison',	'Protection',	'LBGT']},
      {key: 'Legal', value: ["Women's Rights",	"Children's Rights",	"Human Trafficking",	"Security",	"Child Protection",	"Reintegration",	"Political Justice",	"Discrimination",	"Advisory",	"Victim Advocacy",	"Victim"]},
      {key: 'Migration', value: ['Refugee',	'Repatriation',	'Asylum',	'Integration',	'Citizenship']},
      {key: 'Employment', value: ['Training',	'Entrepreneur',	'Technical',	'Partnerships',	'Financ',	'Apprenticeship']},
      {key: 'Crisis', value: ['Humanitarian', 	'Emergencies',	'Disaster',	'Human Trafficking',	'War']},
    ]
},
{
  title: 'People to Support',
  content:
    [
      {key: 'Refugees', value: true},
      {key: 'Homeless People', value: false},
      {key: 'LGBTQIA+', value: false},
    ]
},
{
  title: 'Gender',
  content:
    [
      {key: 'Woman', value: true},
      {key: 'Man', value: false},
      {key: 'Non-binary', value: false},
      {key: 'Other', value: false},
    ]
},
{
  title: 'Age Group',
  content:
    [
      {key: 'Children', value: false},
      {key: 'Youth', value: false},
      {key: 'Adult', value: false},
    ]
},
{
  title: 'Location',
  content:
    [
      {key: 'Country', value: false},
      {key: 'City', value: false},
    ]
},
];

const AccordionFilter = (onCheck, onUncheck) => {

  // Ddefault active selector
  const [activeSections, setActiveSections] = useState([]);
  // MultipleSelect is for the Multiple Expand allowed
  // True: Expand multiple at a time
  // False: One can be expand at a time
  const [multipleSelect, setMultipleSelect] = useState(false);

  const setSections = (sections) => {
    //setting up a active section state
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section, _, isActive) => {
    //Accordion Header view
    return (
      <Animatable.View
        duration={400}>
        <View style={QuestionStyles.topFilterSection}>
          <Text style={QuestionStyles.accordionTextTitle}>{section.title}</Text>
          { isActive ? <AntDesign name="minus" size={24} color="#212121" /> : <AntDesign name="plus" size={24} color="#212121" /> }
        </View>
      </Animatable.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    //Accordion Content view
    const checkboxText = section.content

    return (
      <Animatable.View
        duration={100}>
        <Animatable.Text
          animation={isActive ? 'fadeInDown' : undefined}>
          <View style={GlobalStyles.flexDirectionColumn}>
            {section.title == 'I need help with' || section.title == 'I need help for'
              ? checkboxText.map((text) => (
                  <CheckButton answer={text.key} onCheck={onCheck} onUncheck={onUncheck}/>
                ))
              : checkboxText.map((text) => (
                  <TouchableOpacity /* onPress={pressCheckbox}*/ >
                    <View style={QuestionStyles.checkboxItems}>
                      { text.value ? <AntDesign name="checksquare" size={24} color="#212121" /> : <Feather name="square" size={24} color="#212121" /> }
                      <Text style={QuestionStyles.checkboxText}>{text.key}</Text>
                    </View>
                  </TouchableOpacity>
                ))
            }
          </View>
        </Animatable.Text>
      </Animatable.View>
    );
  };

  return (
    <SafeAreaView>
      <View style={GlobalStyles.whiteContainer}>
        <ScrollView>
          <View>
            <Text style={GlobalStyles.normalText}>
              Multiple Expand Allowed?
            </Text>
            <Switch
              value={multipleSelect}
              onValueChange={(multipleSelect) =>
                setMultipleSelect(multipleSelect)
              }
            />
          </View>
          {/*Code for Accordion/Expandable List starts here*/}
          <Accordion
            activeSections={activeSections}
            //for any default active section
            sections={CONTENT}
            //title and content of accordion
            touchableComponent={TouchableOpacity}
            //which type of touchable component you want
            //It can be the following Touchables
            //TouchableHighlight, TouchableNativeFeedback
            //TouchableOpacity , TouchableWithoutFeedback
            expandMultiple={multipleSelect}
            //Do you want to expand mutiple at a time or single at a time
            renderHeader={renderHeader}
            //Header Component(View) to render
            renderContent={renderContent}
            //Content Component(View) to render
            duration={400}
            //Duration for Collapse and expand
            onChange={setSections}
            //setting the state of active sections
          />
          {/*Code for Accordion/Expandable List ends here*/}
        </ScrollView>
      </View>
    </SafeAreaView>

  );
};

export default AccordionFilter;

  // array with main categories
  const mainCategories = ['Health', 'Education', 'Social Services', 'Agriculture', 'Legal', 'Migration', 'Employment', 'Crisis']
  // arrays of sub categories
  const healthSub = ['Disable', 'Sex', 'Maternal', 'Disease', 'AIDS', 'Healthcare', 'Nutrition', 'Hygiene']
  const educationSub = ['Training',	'Financ',	'Facilities',	'AIDS',	'Entrepreneur']
  const socialServicesSub = ['Violence',	'Victim',	'Safety',	'Poverty',	'Sanitation',	'Water	Prison',	'Protection',	'LBGT']
  const agricultureSub = ['Technology',	'Education',	'Seed', 'Donation',	'Financial',	'Agriculture', 'Development']
  const legalSub = ["Women's Rights",	"Children's Rights",	"Human Trafficking",	"Security",	"Child Protection",	"Reintegration",	"Political Justice",	"Discrimination",	"Advisory",	"Victim Advocacy",	"Victim"]
  const migrationSub = ['Refugee',	'Repatriation',	'Asylum',	'Integration',	'Citizenship']
  const employmentSub = ['Training',	'Entrepreneur',	'Technical',	'Partnerships',	'Financ',	'Apprenticeship']
  const crisisSub = ['Humanitarian', 	'Emergencies',	'Disaster',	'Human Trafficking',	'War']
  //
