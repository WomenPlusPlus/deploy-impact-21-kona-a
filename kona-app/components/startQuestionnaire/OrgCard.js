import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { QuestionStyles } from '../question/QuestionStyles';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { Storage } from 'expo-storage';



const OrgCard = ({item}) => {

    const storageKey = item.Name;
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
            <View style= {QuestionStyles.imageContainer}>
                <Image source={require('../../assets/Logo-warc.png')} style={ QuestionStyles.imageContainer } resizeMode="contain"></Image>
            </View>
            <TouchableOpacity onPress={pressHandler}
                style={{position: 'absolute', right: 8, top: 8 }} >
                    <FontAwesome name={save ? "heart" : "heart-o"} size={24} color="black" />
            </TouchableOpacity>
            <Text>{item["Name"]}</Text>
            <Text style={ QuestionStyles.bold }>Contact</Text>
            <Text>{item["Phone Number"]}</Text>
            <Text>{item["Address"]}</Text>
        </View>
    )
}

export default OrgCard;
