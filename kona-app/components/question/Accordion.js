import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, SafeAreaView, Switch, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import { GlobalStyles } from '../globals/GlobalStyles';
import { QuestionStyles } from './QuestionStyles';
import { AntDesign, Feather } from '@expo/vector-icons';
import Collapsible from 'react-native-collapsible';

const CONTENT = [
{
  title: 'Area of Support'
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

const mainCategories = [
  {
  title: 'Health',
  content:
    [
      {key: 'Disable'},
      {key: 'Sex'},
      {key: 'Maternal'},
      {key: 'Disease'},
      {key: 'Healthcare'},
      {key: 'Nutrition'},
      {key: 'Hygiene'},
    ]
  },
  {
  title: 'Education',
  content:
    [
      {key: 'Training'},
      {key: 'Finance'},
      {key: 'Facilities'},
      {key: 'AIDS'},
      {key: 'Entrepreneur'},
    ]
  },
  {
  title: 'Social Services',
  content:
    [
      {key: 'Violence'},
      {key: 'Victim'},
      {key: 'Safety'},
      {key: 'Poverty'},
      {key: 'Sanitation'},
      {key: 'Water'},
      {key: 'Prison'},
      {key: 'Protection'},
      {key: 'LBGT'},
    ]
  },
  {
  title: 'Agriculture',
  content:
    [
      {key: 'Technology'},
      {key: 'Education'},
      {key: 'Seed Donation'},
      {key: 'Financial'},
      {key: 'Agriculture Development'},
    ]
  },
  {
  title: 'Legal',
  content:
    [
      {key: "Women's Rights"},
      {key: "Children's Rights"},
      {key: "Human Trafficking"},
      {key: "Security"},
      {key: "Child Protection"},
      {key: "Reintegration"},
      {key: "Political Justice"},
      {key: "Discrimination"},
      {key: "Advisory"},
      {key: "Victim Advocacy"},
      {key: "Victim"},
    ]
  },
  {
  title: 'Migration',
  content:
    [
      {key: 'Refugee'},
      {key: 'Repatriation'},
      {key: 'Asylum'},
      {key: 'Integration'},
      {key: 'Citizenship'},
    ]
  },
  {
  title: 'Employment',
  content:
    [
      {key: 'Training'},
      {key: 'Entrepreneur'},
      {key: 'Technical'},
      {key: 'Partnerships'},
      {key: 'Financ'},
      {key: 'Apprenticeship'},
    ]
  },
  {
  title: 'Crisis',
  content:
    [
      {key: 'Humanitarian' },
      {key: 'Emergencies'},
      {key: 'Disaster'},
      {key: 'Human Trafficking'},
      {key: 'War'},
    ]
  },
];

const AccordionMainCategories = (onCheck, onUncheck) => {

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

  CONTENT[1].content[2].value = true;

  console.log(CONTENT[1].content[2].value)

  const renderHeader = (section, _, isActive) => {
    //Accordion Header view
    return (
      <Animatable.View
        duration={400}>
        <View style={GlobalStyles.flexDirectionColumn}>
          <View style={QuestionStyles.topFilterCategories}>
            <View style={QuestionStyles.checkboxItems}>
              { section.title ? <AntDesign name="checksquare" size={24} color="#212121" /> : <Feather name="square" size={24} color="#212121" /> }
              <Text style={QuestionStyles.checkboxText}>{section.title}</Text>
            </View>
            { isActive ? <AntDesign name="minus" size={24} color="#212121" /> : <AntDesign name="plus" size={24} color="#212121" /> }
          </View>
        </View>
      </Animatable.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    //Accordion Content view
    const mainCategoriesText = section.content
    console.log(mainCategoriesText)

    return (
      <Animatable.View
        duration={100}>
        <Animatable.Text
          animation={isActive ? 'fadeInDown' : undefined}>
          <View style={GlobalStyles.flexDirectionColumn}>
            { mainCategoriesText.map((text) => (
              <TouchableOpacity /* onPress={pressCheckbox}*/ >
                <View style={QuestionStyles.subCategories}>
                  { text.key ? <AntDesign name="checksquare" size={24} color="#212121" /> : <Feather name="square" size={24} color="#212121" /> }
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
            sections={mainCategories}
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

//MAIN ACCORDION
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
            {section.title == 'Area of Support'
              ? <AccordionMainCategories/> // write the new accordion in here
              : checkboxText.map((text) => (
                  <TouchableOpacity/* onPress={pressCheckbox}*/ >
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
