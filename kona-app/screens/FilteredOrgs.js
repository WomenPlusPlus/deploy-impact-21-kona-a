import React, { useState } from 'react';
import OrgList from '../components/organizations/OrganizatonsList';
import Filter from '../screens/Filter';
import { View, ScrollView } from 'react-native';
import NumberOrgs from '../components/locals/NumberOrgs';
import Footer from "../components/globals/Footer";
import { GlobalStyles } from '../components/globals/GlobalStyles';

export default function FilteredOrgs({ route, navigation }) {

    const [filteredOrgs, setFilteredOrgs] = useState(route.params.orgs);

    const filterKeyword = route.params.filter;

    return(
        <ScrollView>
            <Filter filterKeyword = {filterKeyword} setFilteredOrgs={setFilteredOrgs} />

            <View style={GlobalStyles.bgWhite}>
                <NumberOrgs orgs={filteredOrgs}/>
                <OrgList orgs={filteredOrgs}/>
            </View>
            <Footer/>
      </ScrollView>
    )
}
