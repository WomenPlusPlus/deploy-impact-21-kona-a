import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, SafeAreaView, Switch, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import { GlobalStyles } from '../globals/GlobalStyles';
import { QuestionStyles } from './QuestionStyles';
import { AntDesign, Feather } from '@expo/vector-icons';
import Collapsible from 'react-native-collapsible';
import CheckBox from '../globals/CheckBox';

const CONTENT = [
{
  title: 'Area of Support'
},
{
  title: 'People to Support',
  content: ['Refugees', 'Homeless People', 'LGBTQIA+']
},
{
  title: 'Gender',
  content:
    [
      'Woman', 'Man', 'Non-binary', 'Other'
    ]
},
{
  title: 'Age Group',
  content:
    [ 'Children', 'Youth', 'Adult'
    ]
},
{
  title: 'Location',
  content:
    [
      'Country', 'City'
    ]
},
];

const mainCategories = [
  {
  title: 'Health',
  content:
    [
      'Disable',
      'Sex',
      'Maternal',
      'Disease',
      'Healthcare',
      'Nutrition'
    ]
  },
  {
  title: 'Education',
  content:
    [ 'Training', 'Finance', 'Facilities', 'AIDS', 'Entrepreneur'
    ]
  },
  {
  title: 'Social Services',
  content:
    [
      'Violence', 'Victim', 'Safety', 'Poverty', 'Sanitation', 'Water', 'Protection', 'LBGT'
    ]
  },
  {
  title: 'Agriculture',
  content:
    [
      'Technology',
      'Education',
      'Seed Donation',
      'Agriculture Development',
    ]
  },
  {
  title: 'Legal',
  content:
    [
      "Women's Rights", "Children's Rights", "Human Trafficking", "Security", "Child Protection", "Reintegration", "Discrimination", "Advisory", "Victim Advocacy", "Victim"
    ]
  },
  {
  title: 'Migration',
  content:
    [
      'Refugee', 'Asylum', 'Integration', 'Citizenship'
    ],
    value: true
  },
  {
  title: 'Employment',
  content:
    [
      'Entrepreneur', 'Technical', 'Partnerships', 'Finance', 'Apprenticeship'
    ]
  },
  {
  title: 'Crisis',
  content:
    [
      'Humanitarian',  'Emergencies',  'Disaster',  'Human Trafficking',  'War'
    ]
  },
];

const AccordionMainCategories = ({onCheckMain, onCheckSub, onUncheckMain, onUncheckSub, selectedKeywords}) => {

  const [activeSections, setActiveSections] = useState([]);
  // MultipleSelect is for the Multiple Expand allowed
  // True: Expand multiple at a time
  // False: One can be expand at a time
  const [multipleSelect, setMultipleSelect] = useState(false);

  const setSections = (sections) => {
    //setting up a active section state
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const initiallyCheckedMain = (category) => {
    return selectedKeywords.has(category.title) || category.content.every((subCategory) => selectedKeywords.has(subCategory))
  }

  const renderHeader = (section, _, isActive) => {
    //Accordion Header view
    return (
      <Animatable.View
        duration={400}>
        <View style={GlobalStyles.flexDirectionColumn}>
          <View style={QuestionStyles.topFilterCategories}>
            <View style={QuestionStyles.checkboxItems}>
              <CheckBox answer = {section.title} 
              onCheck={(answer) => onCheckMain(section)}
              onUncheck={onUncheckMain} initiallyChecked={initiallyCheckedMain(section)}/>
            </View>
            { isActive ? <AntDesign name="minus" size={24} color="#212121" /> : <AntDesign name="plus" size={24} color="#212121" /> }
          </View>
        </View>
      </Animatable.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    const mainCategoriesText = section.content

    return (
      <Animatable.View
        duration={100}>
        <Animatable.Text
          animation={isActive ? 'fadeInDown' : undefined}>
          <View>
            { mainCategoriesText.map((subCategory) => (
              <TouchableOpacity >
                <View style={QuestionStyles.subCategories}>
                  <CheckBox answer={subCategory} initiallyChecked={selectedKeywords.has(section.title) || selectedKeywords.has(subCategory)} onCheck={() => onCheckSub(section,subCategory)} onUncheck={() => onUncheckSub(section,subCategory)} />
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
            style={QuestionStyles.accordion}
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
const AccordionFilter = ({onCheckMain, onCheckSub, onUncheckMain, onUncheckSub, onCheck, onUncheck, selectedKeywords}) => {


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
    const checkboxText = section.content

    return (
      <Animatable.View
        duration={100}>
        <Animatable.Text
          animation={isActive ? 'fadeInDown' : undefined}>
          <View style={GlobalStyles.flexDirectionColumn}>
            {section.title == 'Area of Support'
              ? <AccordionMainCategories onCheckMain={onCheckMain} onCheckSub={onCheckSub} onUncheckMain={onUncheckMain} onUncheckSub={onUncheckSub} selectedKeywords={selectedKeywords}/> // write the new accordion in here
              : checkboxText.map((text) => (
                  <TouchableOpacity >
                    <View style={QuestionStyles.checkboxItems}>
                      <CheckBox answer={text} onCheck={onCheck} onUncheck={onUncheck} initiallyChecked={selectedKeywords.has(text)} />
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

          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            // expandMultiple={multipleSelect}
            renderHeader={renderHeader}
            renderContent={renderContent}
            duration={400}
            onChange={setSections}
          />
        </ScrollView>
      </View>
    </SafeAreaView>

  );
};

export default AccordionFilter;
