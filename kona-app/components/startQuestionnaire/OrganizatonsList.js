import React from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import { GlobalStyles } from '../globals/GlobalStyles';
import OrgCard from './OrgCard'

const OrgList = ({orgs}) => {
    const renderItem = ({item}) => (
        <OrgCard item={item}/>
    );

    return (
        <SafeAreaView>
            <View style={ GlobalStyles.cardsContainerLeft }>
                <FlatList
                    data={orgs}
                    renderItem={renderItem}
                    keyExtractor={item => item["ID"]} />
            </View>
            <Text style={ GlobalStyles.textLink }>See all</Text>
        </SafeAreaView>
    ) }

export default OrgList;