import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { globalStyles } from './GlobalStyles';

export default function FlatButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={globalStyles.button}>
                <Text style={globalStyles.buttonText}> {text } </Text>
            </View>
        </TouchableOpacity>
    )
}
