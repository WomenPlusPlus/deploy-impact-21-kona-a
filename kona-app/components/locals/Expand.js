import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity, SafeAreaView, } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { GlobalStyles } from '../globals/GlobalStyles';
import CheckButton from '../globals/CheckButton';

const ExpandSeeAll = ({categories, onCheck, onUncheck}) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  const buttonNames = categories

  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          <TouchableOpacity onPress={toggleExpanded}>
            <View>
              <Text style={GlobalStyles.normalTextDark}>+ See all</Text>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed}>
            <View>
              { buttonNames.map((button) => (
                  <CheckButton answer={button} onCheck={onCheck} onUncheck={onUncheck}/>
                ))
              }
            </View>
          </Collapsible>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ExpandSeeAll;
