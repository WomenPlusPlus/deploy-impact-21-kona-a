import Home from '../screens/home';
import Cover from '../screens/cover';
import Questionnaire from '../screens/startQuestionnaire';
import React from 'react';
import MyTheme from '../components/globals/MyTheme'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
            <Stack.Screen
             name="Home"
             component={Home}
            //  options={{ title: 'Cover' }}
            />
            <Stack.Screen
             name="Cover"
             component={Cover}
            //  options={{ title: 'Cover' }}
            />
            <Stack.Screen
             name="Questionnaire"
             component={Questionnaire}
            />
        </Stack.Navigator>
    </NavigationContainer>
    );
};

    export default MyStack;
