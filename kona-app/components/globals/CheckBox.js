import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { LocalStyles } from '../locals/LocalStyles';
import { AntDesign, Feather } from '@expo/vector-icons';

const CheckBox = ({answer, onCheck, onUncheck, initiallyChecked }) => {
  const [checked, setChecked] = useState(initiallyChecked);
  if (checked !== initiallyChecked) setChecked(initiallyChecked);
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
          <View style={LocalStyles.checkboxItems}>
              {checked ? <AntDesign name="checksquare" size={24} color="#212121" /> : <Feather name="square" size={24} color="#212121" /> }
              <Text style={LocalStyles.checkboxText}>{ answer } </Text>
          </View>
      </TouchableOpacity>
  )
}

export default CheckBox;
