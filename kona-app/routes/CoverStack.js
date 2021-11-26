import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Filter from '../screens/Filter';
import SearchPage from '../screens/SearchPage'
import FilteredOrgs from '../screens/FilteredOrgs';
import Accordion from '../screens/Accordion';
import FilteredBySDG from '../screens/FilteredBySDG';
import HomeButton from '../components/globals/HomeButton';
import Solo from '../screens/Solo';
import Logo from '../components/globals/Logo';
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
                 headerStyle: {
                    backgroundColor: '#F5DEDE',
                 },
                 headerShadowVisible: false, // applied here
                 headerBackTitleVisible: false,
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
             name="SearchPage"
             component={SearchPage}
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
