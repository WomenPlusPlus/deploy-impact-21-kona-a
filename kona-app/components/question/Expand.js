import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, SafeAreaView, } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { GlobalStyles } from '../globals/GlobalStyles';
import { QuestionStyles } from './QuestionStyles';
import BigButton from '../globals/BigButton';


const ExpandSeeAll = (props) => {
  // Collapsed condition for the single collapsible
  const [collapsed, setCollapsed] = useState(true);
  // MultipleSelect is for the Multiple Expand allowed
  // True: Expand multiple at a time
  // False: One can be expand at a time
  const [multipleSelect, setMultipleSelect] = useState(false);

  const toggleExpanded = () => {
    //Toggling the state of single Collapsible
    setCollapsed(!collapsed);
  };

  const buttonNames = props.categories

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
                  <BigButton answer={button} />
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

