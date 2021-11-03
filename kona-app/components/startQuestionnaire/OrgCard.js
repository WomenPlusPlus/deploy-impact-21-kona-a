import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { QuestionStyles } from '../question/QuestionStyles';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { Storage } from 'expo-storage';



const OrgCard = (props) => {

    const storageKey = props.id;
    const [save, setSaved] = useState(false);

    Storage.getItem({ key: `${storageKey}` }).then((storedValue) => {
        const newSaveValue = !!storedValue;
        if (newSaveValue != save) {
            setSaved(newSaveValue);
        }
    });

    const pressHandler = () => {
        setSaved(!save);
        if (!save) {
            Storage.setItem({
                key: `${storageKey}`,
                value: "liked"
            });
        } else {
            Storage.removeItem({
                key: `${storageKey}`
            });
        }
    }
    
    return (
       <View style={ QuestionStyles.cardStyle }>
            <Image source={require('../../assets/Logo-warc.png')} style={ QuestionStyles.card }></Image>
            <TouchableOpacity onPress={pressHandler}
                style={{position: 'absolute', right: 8, top: 8 }} >
                    <FontAwesome name={save ? "heart" : "heart-o"} size={24} color="black" />
            </TouchableOpacity>
            <Text style={ QuestionStyles.bold }>Contact</Text>
            <Text>00403346643445</Text>
            <Text>Address</Text>
        </View>
    )
}

export default OrgCard;
