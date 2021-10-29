import React from 'react';
import { View } from 'react-native';
import Header from '../components/questionnaire/Header';
import OrgList from '../components/questionnaire/OrganizatonsList'

export default function Questionnaire() {
    return(
        <View>
            <Header />
            <OrgList />
        </View>
    )
}
