import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { GlobalStyles } from './GlobalStyles';
import { Ionicons } from '@expo/vector-icons';

const SDGs = ({answer, onPressWithParam, checked }) => {
    return (
        <TouchableOpacity onPress={()=> onPressWithParam(answer)}>
            <View>
                {/* {checked && <Ionicons name="checkmark-sharp" size={20} color="black" style={{marginRight: 4}}/>} */}
                <Text style={GlobalStyles.normalText}>{ answer } </Text>
            </View>
        </TouchableOpacity>
    )
}

export default SDGs; 