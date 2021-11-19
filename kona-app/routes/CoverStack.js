import React from 'react';
import Home from '../screens/Home';
import Cover from '../screens/Cover';
import Filter from '../screens/Filter';
import FilteredOrgs from '../screens/FilteredOrgs';
import Accordion from '../screens/Accordion';
import FilteredBySDG from '../screens/FilteredBySDG';
import StartQuestionnaire from '../screens/StartQuestionnaire';
import DropdownQuestion from '../screens/DropdownQuestion';
import QuestionWithButtons from '../screens/QuestionWithButtons';
import Solo from '../screens/Solo';
import MyTheme from '../components/globals/MyTheme'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UltimatelyFiltered from '../screens/UltimatelyFiltered';

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
             name="Filter"
             component={Filter}
            />
            <Stack.Screen
             name="FilteredOrgs"
             component={FilteredOrgs}
            />
            <Stack.Screen
             name="Accordion"
             component={Accordion}
            />
            <Stack.Screen
             name="UltimatelyFiltered"
             component={UltimatelyFiltered}
             />
            <Stack.Screen
             name="FilteredBySDG"
             component={FilteredBySDG}
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
            <Stack.Screen
             name="Organization"
             component={Solo}
             />

        </Stack.Navigator>
    </NavigationContainer>
    );
};

    export default CoverStack;
