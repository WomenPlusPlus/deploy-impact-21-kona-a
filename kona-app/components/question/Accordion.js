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
  content:
    [
      {key: 'Refugees', value: false},
      {key: 'Homeless People', value: false},
      {key: 'LGBTQIA+', value: false},
    ],
    value: false
},
{
  title: 'Gender',
  content:
    [
      {key: 'Woman', value: false},
      {key: 'Man', value: false},
      {key: 'Non-binary', value: false},
      {key: 'Other', value: false},
    ],
    value: false
},
{
  title: 'Age Group',
  content:
    [
      {key: 'Children', value: false},
      {key: 'Youth', value: false},
      {key: 'Adult', value: false},
    ],
    value: false
},
{
  title: 'Location',
  content:
    [
      {key: 'Country', value: false},
      {key: 'City', value: false},
    ],
    value: false
},
];

const mainCategories = [
  {
  title: 'Health',
  content:
    [
      {key: 'Disable', value: false},
      {key: 'Sex', value: false},
      {key: 'Maternal', value: false},
      {key: 'Disease', value: false},
      {key: 'Healthcare', value: false},
      {key: 'Nutrition', value: false},
      {key: 'Hygiene', value: false},
    ],
    value: false
  },
  {
  title: 'Education',
  content:
    [
      {key: 'Training', value: false},
      {key: 'Finance', value: false},
      {key: 'Facilities', value: false},
      {key: 'AIDS', value: false},
      {key: 'Entrepreneur', value: false},
    ],
    value: false
  },
  {
  title: 'Social Services',
  content:
    [
      {key: 'Violence', value: false},
      {key: 'Victim', value: false},
      {key: 'Safety', value: false},
      {key: 'Poverty', value: false},
      {key: 'Sanitation', value: false},
      {key: 'Water', value: false},
      {key: 'Prison', value: false},
      {key: 'Protection', value: false},
      {key: 'LBGT', value: false},
    ],
    value: false
  },
  {
  title: 'Agriculture',
  content:
    [
      {key: 'Technology', value: false},
      {key: 'Education', value: false},
      {key: 'Seed Donation', value: false},
      {key: 'Financial', value: false},
      {key: 'Agriculture Development', value: false},
    ],
    value: false
  },
  {
  title: 'Legal',
  content:
    [
      {key: "Women's Rights", value: false},
      {key: "Children's Rights", value: false},
      {key: "Human Trafficking", value: false},
      {key: "Security", value: false},
      {key: "Child Protection", value: false},
      {key: "Reintegration", value: false},
      {key: "Political Justice", value: false},
      {key: "Discrimination", value: false},
      {key: "Advisory", value: false},
      {key: "Victim Advocacy", value: false},
      {key: "Victim", value: false},
    ],
    value: false
  },
  {
  title: 'Migration',
  content:
    [
      {key: 'Refugee', value: false},
      {key: 'Repatriation', value: true},
      {key: 'Asylum', value: false},
      {key: 'Integration', value: false},
      {key: 'Citizenship', value: false},
    ],
    value: true
  },
  {
  title: 'Employment',
  content:
    [
      {key: 'Training', value: false},
      {key: 'Entrepreneur', value: false},
      {key: 'Technical', value: false},
      {key: 'Partnerships', value: false},
      {key: 'Finance', value: false},
      {key: 'Apprenticeship', value: false},
    ],
    value: false
  },
  {
  title: 'Crisis',
  content:
    [
      {key: 'Humanitarian', value: false },
      {key: 'Emergencies', value: false},
      {key: 'Disaster', value: false},
      {key: 'Human Trafficking', value: false},
      {key: 'War', value: false},
    ],
    value: false
  },
];

const AccordionMainCategories = ({onCheck, onUncheck, selectedKeywords}) => {
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
              <CheckBox answer = {section.title} initiallyChecked={selectedKeywords.has(section.title)} onCheck={onCheck} onUncheck={onUncheck} />
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
    // console.log(mainCategoriesText)

    return (
      <Animatable.View
        duration={100}>
        <Animatable.Text
          animation={isActive ? 'fadeInDown' : undefined}>
          <View>
            { mainCategoriesText.map((text) => (
              <TouchableOpacity /* onPress={pressCheckbox}*/ >
                <View style={QuestionStyles.subCategories}>
                  <CheckBox answer={text.key} initiallyChecked={selectedKeywords.has(text.key)} onCheck={onCheck} onUncheck={onUncheck} />
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
const AccordionFilter = ({onCheck, onUncheck, selectedKeywords}) => {

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
              ? <AccordionMainCategories onCheck={onCheck} onUncheck={onUncheck} selectedKeywords={selectedKeywords}/> // write the new accordion in here
              : checkboxText.map((text) => (
                  <TouchableOpacity /* onPress={pressCheckbox}*/ >
                    <View style={QuestionStyles.checkboxItems}>
                      <CheckBox answer={text.key} onCheck={onCheck} onUncheck={onUncheck} />
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
