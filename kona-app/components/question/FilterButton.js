import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { QuestionStyles } from './QuestionStyles';
import { GlobalStyles } from '../globals/GlobalStyles';

const FilterButton = ({answer, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={QuestionStyles.filterButton}>
                <Text style={GlobalStyles.normalText}>{ answer } </Text>
            </View>
        </TouchableOpacity>
    )
}

export default FilterButton;