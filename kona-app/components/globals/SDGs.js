import React from 'react';
import { Text, TouchableOpacity, View, Image} from "react-native";
import { GlobalStyles } from './GlobalStyles';
import { Ionicons } from '@expo/vector-icons';

const SDGs = ({answer, source, onPressWithParam, checked }) => {
    return (
        <TouchableOpacity onPress={()=> onPressWithParam(answer)}>
            <View>
                {/* {checked && <Ionicons name="checkmark-sharp" size={20} color="black" style={{marginRight: 4}}/>} */}
                {/* <Text style={GlobalStyles.normalText}>{ answer } </Text> */}
        <Image
            key = {answer}
            source={source}
            style={{width: 50, height: 50,resizeMode : 'stretch' }}
          /> 
            </View>
        </TouchableOpacity>
    )
}

export default SDGs; 