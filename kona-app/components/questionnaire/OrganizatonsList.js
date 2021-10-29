import React from 'react';
import {View, Text} from 'react-native';
import { globalStyles } from '../globals/GlobalStyles';
import Card from './Card'
import { questStyles } from './QuestStyles';

const OrgList = () => {
    return (
        <View style={{paddingTop: 10}}>
            <Text style={ questStyles.h2 }>These organization might be able to help:</Text>
            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around'
            }}>
                <Card />
                <Card />
                <Card />
                <Card />
            </View>
            <Text style={ globalStyles.textLink }>See all</Text>
        </View>
    ) }

export default OrgList;