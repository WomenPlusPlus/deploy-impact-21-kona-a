import React from 'react';
import { Text, View } from 'react-native';
import { GlobalStyles } from '../globals/GlobalStyles';
import { QuestionStyles } from './QuestionStyles';
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Dropdown = () => {
  const countries = ["Senegal", "Switzerland", "Ghana", "England"]
    return (
    <View style={QuestionStyles.dropdownContainer}>
      <Text style={GlobalStyles.normalText}>
        <SelectDropdown
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          defaultButtonText={"Choose country"}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={QuestionStyles.dropdownBtnStyle}
          buttonTextStyle={GlobalStyles.normalText}
          renderDropdownIcon={() => {
            return (
              <FontAwesome name="chevron-down" color={"#212121"} size={18} />
            );
          }}
          dropdownIconPosition={"right"}
          dropdownStyle={QuestionStyles.dropdownDropdownStyle}
          rowStyle={QuestionStyles.dropdownRowStyle}
          rowTextStyle={QuestionStyles.dropdownRowTxtStyle}
        />
      </Text>
    </View>
    )
}

export default Dropdown;

