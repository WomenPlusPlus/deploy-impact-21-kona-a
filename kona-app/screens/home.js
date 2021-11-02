import React from 'react';
import { Text, View } from 'react-native';
import { GlobalStyles } from '../components/globals/GlobalStyles';
import FlatButton from '../components/globals/Button';

export default function Home({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('Cover')
    }

    return (
      <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.titleTextHomepage}>Welcome to DOTS!</Text>
        <FlatButton text='Cover Page' onPress={pressHandler} />
      </View>
    )
}
