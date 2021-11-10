import React from 'react';
import {View, Text, FlatList} from 'react-native';
import { GlobalStyles } from '../globals/GlobalStyles';
import OrgCard from './OrgCard'
import { QuestionStyles } from '../question/QuestionStyles';

const OrgList = ({orgs}) => {
    const renderItem = ({item}) => (
        <OrgCard item={item}/>
    );

    return (
        <View style={GlobalStyles.pt}>
            <Text style={ QuestionStyles.h2 }>These organizations might be able to help:</Text>
            <View style={ QuestionStyles.cardsContainerLeft }>
                <FlatList
                    data={orgs}
                    renderItem={renderItem}
                    keyExtractor={item => item["Name"]}
                />
                {/* <OrgCard item={{}}/>
                <OrgCard item={{}}/>
                <OrgCard item={{}}/>
                <OrgCard item={{}}/> */}
            </View>
            <Text style={ GlobalStyles.textLink }>See all</Text>
        </View>
    ) }

export default OrgList;