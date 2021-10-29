import React from 'react';
import {View, Text} from 'react-native';
import { globalStyles } from '../globals/GlobalStyles';
import Card from './Card'
import { questStyles } from './QuestStyles';

const OrgList = () => {
    return (
        <View style={globalStyles.pt}>
            <Text style={ questStyles.h2 }>These organization might be able to help:</Text>
            <View style={ globalStyles.cardsContainer }>
                <Card />
                <Card />
                <Card />
                <Card />
            </View>
            <Text style={ globalStyles.textLink }>See all</Text>
        </View>
    ) }

export default OrgList;