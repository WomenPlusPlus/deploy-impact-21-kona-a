import React from 'react';
import {View, Text} from 'react-native';
import { GlobalStyles } from '../globals/GlobalStyles';
import OrgCard from './OrgCard'
import { QuestionStyles } from '../question/QuestionStyles';

const OrgList = () => {
    return (
        <View style={GlobalStyles.pt}>
            <Text style={ QuestionStyles.h2 }>These organization might be able to help:</Text>
            <View style={ GlobalStyles.cardsContainer }>
                <OrgCard id="1"/>
                <OrgCard id="2"/>
                <OrgCard id="3"/>
                <OrgCard id="4"/>
            </View>
            <Text style={ GlobalStyles.textLink }>See all</Text>
        </View>
    ) }

export default OrgList;