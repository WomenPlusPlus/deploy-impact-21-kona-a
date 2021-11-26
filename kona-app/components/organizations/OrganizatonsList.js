import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { GlobalStyles } from '../globals/GlobalStyles';
import OrgCard from './OrgCard';

const OrgList = ({orgs}) => {
    return (
        <SafeAreaView>
            <View style={ GlobalStyles.cardsContainerLeft }>
                {orgs.map((org) => 
                    <OrgCard item={org} key={org["ID"].toString()}/>
                )}
            </View>
        </SafeAreaView>
    ) }

export default OrgList;
