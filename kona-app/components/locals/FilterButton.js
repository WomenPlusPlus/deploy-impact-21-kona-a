import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { LocalStyles } from './LocalStyles';
import { GlobalStyles } from '../globals/GlobalStyles';

const FilterButton = ({answer, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={LocalStyles.filterButton}>
                <Text style={GlobalStyles.normalText}>{ answer } </Text>
            </View>
        </TouchableOpacity>
    )
}

export default FilterButton;
