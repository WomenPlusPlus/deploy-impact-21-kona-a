import React from 'react';
import OrgList from '../components/organizations/OrganizatonsList';
import { View, ScrollView } from 'react-native';
import Footer from "../components/globals/Footer";

export default function FilteredBySDG({ route }) {

    const filteredOrgs = route.params.orgs;

    return(
        <ScrollView>
            <View style={{backgroundColor: 'white'}}>
                <OrgList orgs={filteredOrgs}/>
            </View>
            <Footer/>
      </ScrollView>
    )
}
