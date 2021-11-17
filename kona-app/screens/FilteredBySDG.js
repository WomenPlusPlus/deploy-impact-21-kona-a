import React, { useState } from 'react';
import OrgList from '../components/startQuestionnaire/OrganizatonsList';
import { View, ScrollView } from 'react-native';


export default function FilteredBySDG({ route }) {

    const [filteredOrgs, setFilteredOrgs] = useState(route.params.orgs);


    return(
        <ScrollView>
            <View>
                <OrgList orgs={filteredOrgs}/>
            </View>
      </ScrollView>
    )
}