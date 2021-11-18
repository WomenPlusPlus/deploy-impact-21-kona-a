import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { QuestionStyles } from '../question/QuestionStyles';
import { AntDesign, Feather } from '@expo/vector-icons';

const CheckBox = ({answer, onCheck, onUncheck, initiallyChecked }) => {
  const [checked, setChecked] = useState(initiallyChecked);
  const pressHandler = (e) => {
      if (checked && onUncheck)
        onUncheck(answer);
      else if (onCheck)
        onCheck(answer);
      setChecked(!checked);
      e.stopPropagation();
  }

  return (
      <TouchableOpacity onPress={pressHandler}>
          <View style={QuestionStyles.checkboxItems}>
              {checked ? <AntDesign name="checksquare" size={24} color="#212121" /> : <Feather name="square" size={24} color="#212121" /> }
              <Text style={QuestionStyles.checkboxText}>{ answer } </Text>
          </View>
      </TouchableOpacity>
  )
}

export default CheckBox;
