import React from 'react';
import Home from '../screens/home';
import Cover from '../screens/cover';
import Questionnaire from '../screens/startQuestionnaire';
import DropdownQuestion from '../screens/dropdownQuestion';
import QuestionWithButtons from '../screens/questionWithButtons';
import MyTheme from '../components/globals/MyTheme'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
            <Stack.Screen
             name="Home"
             component={Home}
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
            <Stack.Screen
             name="DropdownQuestion"
             component={DropdownQuestion}
            />
            <Stack.Screen
             name="QuestionWithButtons"
             component={QuestionWithButtons}
             />
        </Stack.Navigator>
    </NavigationContainer>
    );
};

    export default MyStack;
