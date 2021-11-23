import React, { useState } from 'react';
import OrgList from '../components/startQuestionnaire/OrganizatonsList';
import Filter from '../screens/Filter';
import { View, ScrollView } from 'react-native';
import Data from '../assets/kona_orgs1.js';
import NumberOrgs from '../components/question/NumberOrgs';
import Footer from "../components/globals/Footer";

export default function FilteredOrgs({ route, navigation }) {

    const [filteredOrgs, setFilteredOrgs] = useState(route.params.orgs);

    const filterKeyword = route.params.filter;

    return(
        <ScrollView>
            <Filter filterKeyword = {filterKeyword} setFilteredOrgs={setFilteredOrgs} />

            <View>
                <NumberOrgs orgs={filteredOrgs}/>
                <OrgList orgs={filteredOrgs}/>
            </View>
            <Footer/>
      </ScrollView>
    )
}
