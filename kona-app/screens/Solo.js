import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { QuestionStyles } from '../components/question/QuestionStyles';

export default function Solo ({route}) {
    console.log(route.params)
    const item = route.params

    return (
        <SafeAreaView>
            <View style= {QuestionStyles.imageContainer}>
                <Image source={require('../assets/Logo-warc.png')} style={ QuestionStyles.imageContainer } resizeMode="contain"></Image>
            </View>
            <View style={{margin: 10}}>
                <Text style={ QuestionStyles.name}>{item.Name}</Text>
                <View style={ QuestionStyles.field }>  
                    <FontAwesome name="building" size={20} color='#6B6B6B' />
                    <Text style={ QuestionStyles.fieldText }>Address</Text>
                </View>
                <Text style={QuestionStyles.questionText} >{item["Address"]}</Text>
                <View style={ QuestionStyles.field }>
                    <Entypo name="old-mobile" size={24} color= '#6B6B6B' />
                    <Text style={ QuestionStyles.fieldText }>Phone</Text>
                </View>
                <Text style={QuestionStyles.questionText} >{item["Phone Number"]}</Text>
                <View style={ QuestionStyles.field }>
                    <FontAwesome name="envelope" size={20} color='#6B6B6B' />
                    <Text style={ QuestionStyles.fieldText }>Email</Text>
                </View>
                <Text style={QuestionStyles.questionText}>{item.Email}</Text>
                <View style={ QuestionStyles.field }>
                    <SimpleLineIcons name="globe" size={20} color='#6B6B6B' />
                    <Text style={ QuestionStyles.fieldText }>Website</Text>
                </View>
                <Text style={ QuestionStyles.questionText }>{item["Web Address"]}</Text>
                <Text>
                    Help with:
                </Text>
                <Text>
                    {item.Services}
                </Text>
                <Text>
                    Help for:
                </Text>
                <Text>
                    {item["Target Group"]}
                </Text>
            </View>
        </SafeAreaView>
    )

}