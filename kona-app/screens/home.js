import React from 'react';
import { Button, Text, View } from 'react-native';
import { globalStyles } from '../components/globals/GlobalStyles';

export default function Home({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('Cover')
    }

    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleTextHomepage}>Welcome to DOTS!</Text>
        <Button title='Cover Page' onPress={pressHandler} />
      </View>
    )
}
