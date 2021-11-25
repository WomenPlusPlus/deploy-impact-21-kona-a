import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { GlobalStyles } from './GlobalStyles';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CheckButton = ({answer, iconName, onCheck, onUncheck, initiallyChecked }) => {
  const [checked, setChecked] = useState(initiallyChecked);
  const pressHandler = () => {
      if (checked)
        onUncheck(answer);
      else
        onCheck(answer);
      setChecked(!checked);
  }

  return (
      <TouchableOpacity onPress={pressHandler}>
          <View style={GlobalStyles.mainButton}>
              {checked && <Ionicons name="checkmark-sharp" size={20} color="black" style={{marginRight: 4}}/>}
              <MaterialCommunityIcons name={ iconName } size={24} color="rgba0(69, 55, 72, 1)" style={{paddingRight: 10}}/>
              <Text style={GlobalStyles.normalText}>{ answer } </Text>
          </View>
      </TouchableOpacity>
  )
}

export default CheckButton;
