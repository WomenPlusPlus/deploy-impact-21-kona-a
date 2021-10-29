import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Cover({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('Questionnaire')
    }

    return (
        <View style={{paddingTop: 20}}>
           <Text>CoverScreen</Text>
           <Button title='Start Questionnaire' onPress={pressHandler} /> 
        </View>
    )
}
