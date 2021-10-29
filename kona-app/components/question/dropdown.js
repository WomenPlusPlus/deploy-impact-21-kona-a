import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../globals/GlobalStyles';
import { questionStyles } from './questionStyles';
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Dropdown = () => {
  const countries = ["Senegal", "Switzerland", "Ghana", "England"]
    return (
    <View style={questionStyles.dropdownContainer}>
      <Text style={globalStyles.normalText}>
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
          buttonStyle={questionStyles.dropdownBtnStyle}
          buttonTextStyle={globalStyles.normalText}
          renderDropdownIcon={() => {
            return (
              <FontAwesome name="chevron-down" color={"#212121"} size={18} />
            );
          }}
          dropdownIconPosition={"right"}
          dropdownStyle={questionStyles.dropdownDropdownStyle}
          rowStyle={questionStyles.dropdownRowStyle}
          rowTextStyle={questionStyles.dropdownRowTxtStyle}
        />
      </Text>
    </View>
    )
}

export default Dropdown;

