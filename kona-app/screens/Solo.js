import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { QuestionStyles } from '../components/locals/QuestionStyles';
import Footer from "../components/globals/Footer";
import { GlobalStyles } from '../components/globals/GlobalStyles';
import { LinearGradient } from 'expo-linear-gradient';

export default function Solo ({route}) {
    console.log(route.params)
    const item = route.params

    return (
        <ScrollView>
            <View style= {QuestionStyles.soloImageContainer}>
                <Image source={item.Logo} style={ QuestionStyles.soloImageContainer } resizeMode="contain"></Image>
            </View>
                <View style={GlobalStyles.soloWhite}>
                    <Text style={ QuestionStyles.name}>{item.Name}</Text>
                    <View style={ QuestionStyles.field }>  
                        <FontAwesome name="building" size={20} color='#6B6B6B' style={{marginRight: 4}} />
                        <Text style={ QuestionStyles.fieldText }>Address</Text>
                    </View>
                    <Text style={QuestionStyles.questionText} >{item["Address"]}</Text>
                    <Text style={QuestionStyles.questionText} >{item["Region"]}</Text>
                    <View style={ QuestionStyles.field }>
                        <Entypo name="old-mobile" size={24} color= '#6B6B6B' style={{marginRight: 2}} />
                        <Text style={ QuestionStyles.fieldText }>Phone</Text>
                    </View>
                    <Text style={QuestionStyles.questionText} >{item["Phone"]}</Text>
                    <View style={ QuestionStyles.field }>
                        <FontAwesome name="envelope" size={20} color='#6B6B6B' style={{marginRight: 6}} />
                        <Text style={ QuestionStyles.fieldText }>Email</Text>
                    </View>
                    <Text style={QuestionStyles.questionText}>{item.Email}</Text>
                    <View style={ QuestionStyles.field }>
                        <SimpleLineIcons name="globe" size={20} color='#6B6B6B' style={{marginRight: 6}} />
                        <Text style={ QuestionStyles.fieldText }>Website</Text>
                    </View>
                    <Text style={ QuestionStyles.questionText }>{item["WebAddress"]}</Text>
                </View>
                <LinearGradient colors={['rgb(239,236,232)', 'rgb(255,255,255)']} style={{padding:20}}>
                    <View style={ QuestionStyles.helpContainer}>
                        <Text style={ QuestionStyles.name}>
                            Areas of support
                        </Text>
                        <Text style={ QuestionStyles.questionText } >
                            {item["MainCategory"].split(', ').join('\n')}
                        </Text>
                    </View>
                    <View style={ QuestionStyles.helpContainer}>    
                        <Text style={ QuestionStyles.name}>
                            Target group
                        </Text>
                        <Text style={ QuestionStyles.questionText } >
                            {item["TargetGroup"].split(', ').join('\n')}
                        </Text>
                    </View>
                    <View style={ QuestionStyles.helpContainer}>    
                        <Text style={ QuestionStyles.name}>
                            Description
                        </Text>
                        <Text style={ QuestionStyles.questionText } >
                            {item["Objective"]}
                        </Text>
                    </View>
                </LinearGradient>
            <Footer/>
        </ScrollView>
    )

}