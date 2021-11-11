import React from 'react';
import OrgList from '../components/startQuestionnaire/OrganizatonsList';
import Filter from '../screens/Filter';
import { View, ScrollView } from 'react-native';

export default function FilteredOrgs({ route, navigation }) {

    return(
        <ScrollView>
            <Filter />

            <View>
                <OrgList orgs={route.params} />
            </View>
      </ScrollView>
    )
}