import React from 'react';
import { Image, Text, View } from 'react-native';
import { globalStyles } from '../globals/GlobalStyles';
import { questStyles } from './QuestStyles';

const OrgCard = () => {
    return (
    <View style={ questStyles.cardStyle }>
        <Image source={require('../../assets/Logo-warc.png')} style={ globalStyles.card }></Image>
        <Text style={ questStyles.bold }>Contact</Text>
        <Text>00403346643445</Text>
        <Text>Address</Text>
    </View>
    )
}

export default OrgCard;
