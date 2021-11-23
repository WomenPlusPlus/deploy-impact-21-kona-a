import React from 'react';
import Home from '../screens/Home';
import Cover from '../screens/Cover';
import Filter from '../screens/Filter';
import FilteredOrgs from '../screens/FilteredOrgs';
import Accordion from '../screens/Accordion';
import FilteredBySDG from '../screens/FilteredBySDG';
import HomeButton from '../components/globals/HomeButton';

import StartQuestionnaire from '../screens/StartQuestionnaire';
import DropdownQuestion from '../screens/DropdownQuestion';
import QuestionWithButtons from '../screens/QuestionWithButtons';
import Solo from '../screens/Solo';
import Logo from '../components/globals/Logo';
import MyTheme from '../components/globals/MyTheme'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UltimatelyFiltered from '../screens/UltimatelyFiltered';

const Stack = createNativeStackNavigator();

const CoverStack = () => {

  return (
    <NavigationContainer >
        <Stack.Navigator>
            <Stack.Screen
             name="Home"
             component={Home}
             options={{ 
                 headerTitleAlign: 'center',
                 headerTitle: (props) => <Logo {...props} /> }}
            />
            <Stack.Screen
             name="Filter"
             component={Filter}
             options={{
                title: '',
                headerRight: () => (
                    <HomeButton
                    />
                ),
            }}
            />
            <Stack.Screen
             name="FilteredOrgs"
             component={FilteredOrgs}
             options={{
                title: '',
                headerRight: () => (
                    <HomeButton
                    />
                ),
            }}
            />
            <Stack.Screen
             name="Accordion"
             component={Accordion}
             options={{
                title: '',
                headerRight: () => (
                    <HomeButton
                    />
                ),
            }}
            />
            <Stack.Screen
             name="UltimatelyFiltered"
             component={UltimatelyFiltered}
             options={{
                title: '',
                headerRight: () => (
                    <HomeButton
                    />
                ),
            }}
             />
            <Stack.Screen
             name="FilteredBySDG"
             component={FilteredBySDG}
             options={{
                title: '',
                headerRight: () => (
                    <HomeButton
                    />
                ),
            }}
             />
            {/* <Stack.Screen
             name="Cover"
             component={Cover}
             options={{
                title: '',
                headerRight: () => (
                    <HomeButton
                    />
                ),
            }}
            /> */}
            {/* <Stack.Screen
             name="StartQuestionnaire"
             component={StartQuestionnaire}
             options={{
                title: '',
                headerRight: () => (
                    <HomeButton
                    />
                ),
            }}
            /> */}
            {/* <Stack.Screen
             name="DropdownQuestion"
             component={DropdownQuestion}
             options={{
                title: '',
                headerRight: () => (
                    <HomeButton
                    />
                ),
            }}
            /> */}
            {/* <Stack.Screen
             name="QuestionWithButtons"
             component={QuestionWithButtons}
             options={{
                title: '',
                headerRight: () => (
                    <HomeButton
                    />
                ),
            }}
             /> */}
            <Stack.Screen
             name="Organization"
             component={Solo}
             options={{
                title: '',
                headerRight: () => (
                    <HomeButton
                    />
                ),
            }}
             />

        </Stack.Navigator>
    </NavigationContainer>
    );
};

    export default CoverStack;
