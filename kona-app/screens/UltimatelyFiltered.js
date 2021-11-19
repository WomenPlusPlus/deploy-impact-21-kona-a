import React, { useState } from 'react';
import OrgList from '../components/startQuestionnaire/OrganizatonsList';
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native';
import SearchedFor from '../components/question/SearchedFor';
import {QuestionStyles} from '../components/question/QuestionStyles';
import CheckButton from '../components/globals/CheckButton';

export default function UltimatelyFiltered ({ route, navigation }) {


    const organizations = route.params.results;
    const selectedKeywords = route.params.selectedKeywords;

    const selectedArray = Array.from(selectedKeywords.values());

    return(
        <ScrollView>
            <SearchedFor />
            { selectedArray.map((word) => (

                <View style={QuestionStyles.subCategories}>
                  <CheckButton answer={word} initiallyChecked />
                </View>
            ))
            }
            <View>
                <OrgList orgs={organizations}/>
            </View>
      </ScrollView>
    )
}
