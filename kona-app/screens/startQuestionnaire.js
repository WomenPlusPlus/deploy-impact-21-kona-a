import React from 'react';
import { Button, View } from 'react-native';
import Header from '../components/questionnaire/Header';
import OrgList from '../components/questionnaire/OrganizatonsList'

export default function Questionnaire({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('DropdownQuestion')
    }

    return(
        <View>
            <Header />
            <OrgList />
            <Button title='Dropdown Question' onPress={pressHandler} />
        </View>
    )
}
