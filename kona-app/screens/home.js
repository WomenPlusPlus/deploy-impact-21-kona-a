import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../components/globals/GlobalStyles';
import FlatButton from '../components/globals/Button';

export default function Home({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('Cover')
    }

    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleTextHomepage}>Welcome to DOTS!</Text>
        <FlatButton text='Cover Page' onPress={pressHandler} />
      </View>
    )
}
