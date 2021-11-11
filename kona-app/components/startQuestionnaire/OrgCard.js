import React from 'react';
import { Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { QuestionStyles } from '../question/QuestionStyles';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
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
       <ScrollView style={ QuestionStyles.cardStyle }>
            <View style= {QuestionStyles.imageContainer}>
                <Image source={require('../../assets/Logo-warc.png')} style={ QuestionStyles.imageContainer } resizeMode="contain"></Image>
            </View>
            <TouchableOpacity onPress={pressHandler}
                style={{position: 'absolute', right: 8, top: 8 }} >
                    <FontAwesome name={save ? "heart" : "heart-o"} size={24} color="black" />
            </TouchableOpacity>
            <Text style={ QuestionStyles.name}>{item["Name"]}</Text>
            <View style={ QuestionStyles.field }>
                <Entypo name="old-mobile" size={24} color= '#6B6B6B' />
                <Text style={ QuestionStyles.fieldText }>Phone</Text>
            </View>
            <Text style={QuestionStyles.questionText} >{item["Phone Number"]}</Text>
            <View style={ QuestionStyles.field }>  
                <FontAwesome name="building" size={20} color='#6B6B6B' />
                <Text style={ QuestionStyles.fieldText }>Address</Text>
            </View>
            <Text style={QuestionStyles.questionText} >{item["Address"]}</Text>
        </ScrollView>
    )
}

export default OrgCard;
