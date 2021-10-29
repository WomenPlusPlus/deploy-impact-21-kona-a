import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../globals/GlobalStyles';
import { questionStyles } from './questionStyles';
import SelectDropdown from 'react-native-select-dropdown'

const Dropdown = () => {
  const countries = ["Senegal", "Switzerland", "Ghana", "England"]
    return (
    <View style={questionStyles.dropdownContainer}>
      <Text style={globalStyles.normalText}>
        <SelectDropdown
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
        />
      </Text>
    </View>
    )
}

export default Dropdown;

