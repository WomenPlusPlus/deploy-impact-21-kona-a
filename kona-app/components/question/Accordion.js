import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, SafeAreaView, Switch, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import { GlobalStyles } from '../globals/GlobalStyles';
import { QuestionStyles } from './QuestionStyles';
import BigButton from '../globals/BigButton';
import { AntDesign, Feather } from '@expo/vector-icons';

const CONTENT = [
{
  title: 'Gender',
  content:
    [ 'Woman', 'Man', 'Non-binary', 'Other' ]
},
{
  title: 'Age Group',
  content:
    [ 'Children', 'Youth', 'Adult' ]
},
{
  title: 'Location',
  content:
    [ 'Country Side', 'City' ]
},
];

const AccordionFilter = () => {

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
            { checkboxText.map((text) => (
                <TouchableOpacity style={QuestionStyles.checkboxItems}>
                  <Feather name="square" size={24} color="#212121" />
                  <Text style={QuestionStyles.checkboxText}>{text}</Text>
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
