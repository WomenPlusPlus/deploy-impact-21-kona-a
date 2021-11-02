import React from 'react';
import Header from './Header';
import { View } from 'react-native';
import OrgList from './OrganizatonsList';

export default function Questionnaire() {
    return (
        <View>
            <Header />
            <OrgList />
        </View>
    )
}