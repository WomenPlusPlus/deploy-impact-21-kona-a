import React, { useState } from 'react';
import OrgList from '../components/organizations/OrganizatonsList';
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native';
import SearchedFor from '../components/locals/SearchedFor';
import { LocalStyles} from '../components/locals/LocalStyles';
import {GlobalStyles} from '../components/globals/GlobalStyles';
import CheckButton from '../components/globals/CheckButton';
import Footer from "../components/globals/Footer";

export default function UltimatelyFiltered ({ route, navigation }) {


    const organizations = route.params.results;
    const selectedKeywords = route.params.selectedKeywords;

    const selectedArray = Array.from(selectedKeywords.values());

    return(
        <ScrollView style={GlobalStyles.bgWhite}>
            <View style={GlobalStyles.roseContainer}>
                <SearchedFor />
                { selectedArray.map((word) => (

                    <View style={ LocalStyles.subCategories}>
                        <CheckButton answer={word} initiallyChecked />
                    </View>
            ))
            }
            </View>
            <View>
                <OrgList orgs={organizations}/>
            </View>
            <Footer/>
      </ScrollView>
    )
}
