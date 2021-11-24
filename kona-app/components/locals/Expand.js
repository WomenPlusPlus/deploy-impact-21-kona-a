import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, SafeAreaView, } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { GlobalStyles } from '../globals/GlobalStyles';
import { QuestionStyles } from './QuestionStyles';
import MainButton from '../globals/MainButton';
import CheckButton from '../globals/CheckButton';

const ExpandSeeAll = ({categories, onCheck, onUncheck}) => {
  // Collapsed condition for the single collapsible
  const [collapsed, setCollapsed] = useState(true);

  const toggleExpanded = () => {
    //Toggling the state of single Collapsible
    setCollapsed(!collapsed);
  };

  const buttonNames = categories

  const selectedButton = (answer) => {console.log(answer)}

  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          {/*Code for Single Collapsible Start*/}
          <TouchableOpacity onPress={toggleExpanded}>
            <View>
              <Text style={GlobalStyles.normalTextDark}>+ See all</Text>
              {/*Heading of Single Collapsible*/}
            </View>
          </TouchableOpacity>
          {/*Content of Single Collapsible*/}
          <Collapsible collapsed={collapsed}>
            <View>
              { buttonNames.map((button) => (
                  <CheckButton answer={button} onCheck={onCheck} onUncheck={onUncheck}/>
                ))
              }
            </View>
          </Collapsible>
          {/*Code for Single Collapsible Ends*/}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ExpandSeeAll;

