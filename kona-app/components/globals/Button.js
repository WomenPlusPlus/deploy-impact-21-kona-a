import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { GlobalStyles } from './GlobalStyles';

export default function FlatButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={GlobalStyles.button}>
                <Text style={GlobalStyles.buttonText}> {text } </Text>
            </View>
        </TouchableOpacity>
    )
}
