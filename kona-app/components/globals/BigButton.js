import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from './GlobalStyles';

const BigButton = ({answer, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={globalStyles.bigButton}>
                <Text style={globalStyles.normalText}>{ answer } </Text>
            </View>
        </TouchableOpacity>
    )
}

export default BigButton; 
