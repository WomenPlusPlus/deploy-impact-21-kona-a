import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { GlobalStyles } from './GlobalStyles';

const BigButton = ({answer, onPressWithParam }) => {
    return (
        <TouchableOpacity onPress={()=> onPressWithParam(answer)}>
            <View style={GlobalStyles.bigButton}>
                <Text style={GlobalStyles.normalText}>{ answer } </Text>
            </View>
        </TouchableOpacity>
    )
}

export default BigButton; 
