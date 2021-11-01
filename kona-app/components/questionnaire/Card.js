import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../globals/GlobalStyles';
import { questStyles } from './QuestStyles';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';


const OrgCard = () => {

const [save, setSaved] = useState(false);

const pressHandler = () => {
    setSaved(!save);
}
    
    return (
       <View style={ questStyles.cardStyle }>
            <Image source={require('../../assets/Logo-warc.png')} style={ globalStyles.card }></Image>
            <TouchableOpacity onPress={pressHandler}
                style={{position: 'absolute', right: 8, top: 8 }} >
                {save ? <FontAwesome name="heart" size={24} color="black" /> : <FontAwesome name="heart-o" size={24} color="black" /> }
            </TouchableOpacity>
            <Text style={ questStyles.bold }>Contact</Text>
            <Text>00403346643445</Text>
            <Text>Address</Text>
        </View>
    )
}

export default OrgCard;
