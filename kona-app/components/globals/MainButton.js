import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { GlobalStyles } from './GlobalStyles';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MainButton = ({answer, iconName, onPressWithParam, checked }) => {
    return (
        <TouchableOpacity onPress={()=> onPressWithParam(answer)}>
            <View style={GlobalStyles.mainButton }>
                {checked && <Ionicons name="checkmark-sharp" size={20} color="black" style={{marginRight: 4}}/>}
                <MaterialCommunityIcons name={ iconName } size={24} color="#6B6B6B" style={{paddingRight: 10}}/>
                <Text style={GlobalStyles.normalText}>{ answer } </Text>
            </View>
        </TouchableOpacity>
    )
}

export default MainButton; 
