import React from 'react';
import OrgList from '../components/startQuestionnaire/OrganizatonsList';
import Filter from '../screens/Filter';
import { View, ScrollView } from 'react-native';

export default function FilteredOrgs({ route, navigation }) {

    const filteredOrgs = route.params.orgs;
    const filter = route.params.filter;

    return(
        <ScrollView>
            <Filter filterKeyword = {filter}/>

            <View>
                <OrgList orgs={filteredOrgs}/>
            </View>
      </ScrollView>
    )
}