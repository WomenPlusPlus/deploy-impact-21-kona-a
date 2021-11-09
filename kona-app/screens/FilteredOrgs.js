import React from 'react';
import { Button, View } from 'react-native';
import Header from '../components/startQuestionnaire/Header';
import OrgList from '../components/startQuestionnaire/OrganizatonsList'

export default function FilteredOrgs({ route, navigation }) {

    return(
        <View>
            <OrgList orgs={route.params} />
             </View>
    )
}