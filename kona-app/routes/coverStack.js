import React from 'react';
import Home from '../screens/Home';
import Cover from '../screens/Cover';
import StartQuestionnaire from '../screens/StartQuestionnaire';
import DropdownQuestion from '../screens/DropdownQuestion';
import QuestionWithButtons from '../screens/QuestionWithButtons';
import MyTheme from '../components/globals/MyTheme'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const CoverStack = () => {
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
             name="StartQuestionnaire"
             component={StartQuestionnaire}
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

    export default CoverStack;
