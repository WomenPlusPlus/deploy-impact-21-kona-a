import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { QuestionStyles } from '../components/question/QuestionStyles';

export default function Solo ({route}) {
    console.log(route.params)
    const item = route.params

    return (
        <ScrollView>
            <View style= {QuestionStyles.soloImageContainer}>
                <Image source={require('../assets/unhcr.png')} style={ QuestionStyles.soloImageContainer } resizeMode="contain"></Image>
            </View>
            <View style={{margin: 20}}>
                <Text style={ QuestionStyles.name}>{item.Name}</Text>
                <View style={ QuestionStyles.field }>  
                    <FontAwesome name="building" size={20} color='#6B6B6B' style={{marginRight: 4}} />
                    <Text style={ QuestionStyles.fieldText }>Address</Text>
                </View>
                <Text style={QuestionStyles.questionText} >{item["Address"]}</Text>
                <Text style={QuestionStyles.questionText} >{item["Region"]}</Text>
                <View style={ QuestionStyles.field }>
                    <Entypo name="old-mobile" size={24} color= '#6B6B6B' style={{marginRight: 4}} />
                    <Text style={ QuestionStyles.fieldText }>Phone</Text>
                </View>
                <Text style={QuestionStyles.questionText} >{item["Phone Number"]}</Text>
                <View style={ QuestionStyles.field }>
                    <FontAwesome name="envelope" size={20} color='#6B6B6B' style={{marginRight: 4}} />
                    <Text style={ QuestionStyles.fieldText }>Email</Text>
                </View>
                <Text style={QuestionStyles.questionText}>{item.Email}</Text>
                <View style={ QuestionStyles.field }>
                    <SimpleLineIcons name="globe" size={20} color='#6B6B6B' style={{marginRight: 4}} />
                    <Text style={ QuestionStyles.fieldText }>Website</Text>
                </View>
                <Text style={ QuestionStyles.questionText }>{item["Web Address"]}</Text>
                <View style={ QuestionStyles.helpContainer}>
                    <Text style={ QuestionStyles.name}>
                        Help with:
                    </Text>
                    <Text style={ QuestionStyles.questionText } >
                        {item.Services}
                    </Text>
                </View>
                <View style={ QuestionStyles.helpContainer}>    
                    <Text style={ QuestionStyles.name}>
                        Help for:
                    </Text>
                    <Text style={ QuestionStyles.questionText } >
                        {item["Target Group"]}
                    </Text>
                </View>
                <View style={ QuestionStyles.helpContainer}>    
                    <Text style={ QuestionStyles.name}>
                        Description:
                    </Text>
                    <Text style={ QuestionStyles.questionText } >
                        {item["Objective"]}
                    </Text>
                </View>
            </View>
        </ScrollView>
    )

}