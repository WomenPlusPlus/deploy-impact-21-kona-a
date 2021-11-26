import React from 'react';
import { Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import {  LocalStyles } from '../locals/LocalStyles';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import { Storage } from 'expo-storage';
import { useNavigation } from '@react-navigation/native';
import { LogoMappings } from '../../data/LogoMappings.js';

const OrgCard = ({item}) => {

    const storageKey = item.Name;
    const [save, setSaved] = useState(false);
    const navigation = useNavigation();
    const logo = LogoMappings[item.ID];

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

    const navigateToSolo =() => {
        navigation.navigate('Organization', item)
    }
    
    return (
       <ScrollView style={  LocalStyles.orgContainer }>
           <View style={ LocalStyles.cardStyle}>
                <TouchableOpacity style= { LocalStyles.imageContainer} onPress={navigateToSolo} >
                    <View style={  LocalStyles.imageContainer}>
                        <Image source={logo} style={ LocalStyles.orgImage} resizeMode="contain"></Image>
                    </View>
                </TouchableOpacity>
                <View style={ LocalStyles.orgTextContainer}>
                    <TouchableOpacity onPress={pressHandler}
                        style={{position: 'absolute', right: 8, top: 8 }} >
                        <FontAwesome name={save ? "heart" : "heart-o"} size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={  LocalStyles.name} onPress={navigateToSolo}>{item["Name"]}</Text>
                    <View style={  LocalStyles.field }>
                        <Entypo style={{marginLeft: -5}}name="old-mobile" size={24} color= '#6B6B6B' />
                        <Text style={  LocalStyles.fieldText }>Phone</Text>
                    </View>
                    <Text style={ LocalStyles.questionText} >{item["Phone"]}</Text>
                    <View style={  LocalStyles.field }>  
                        <FontAwesome 
                        style={{paddingRight: 5}}name="building" size={20} color='#6B6B6B' />
                        <Text style={  LocalStyles.fieldText }>Address</Text>
                    </View>
                    <Text style={ LocalStyles.questionText} >{item["Address"]}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default OrgCard;
