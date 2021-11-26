import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { LocalStyles } from '../components/locals/LocalStyles';
import Footer from "../components/globals/Footer";
import { GlobalStyles } from '../components/globals/GlobalStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { LogoMappings } from '../data/LogoMappings';

export default function Solo ({route}) {
    const item = route.params;
    const logo = LogoMappings[item.ID];

    return (
        <ScrollView>
            <View style= {LocalStyles.soloImageContainer}>
                <Image source={logo} style={ LocalStyles.soloImageContainer } resizeMode="contain"></Image>
            </View>
                <View style={GlobalStyles.soloWhite}>
                    <Text style={ LocalStyles.name}>{item.Name}</Text>
                    <View style={ LocalStyles.field }>  
                        <FontAwesome name="building" size={20} color='#6B6B6B' style={{marginRight: 4}} />
                        <Text style={ LocalStyles.fieldText }>Address</Text>
                    </View>
                    <Text style={LocalStyles.questionText} >{item["Address"]}</Text>
                    <Text style={LocalStyles.questionText} >{item["Region"]}</Text>
                    <View style={ LocalStyles.field }>
                        <Entypo name="old-mobile" size={24} color= '#6B6B6B' style={{marginRight: 2}} />
                        <Text style={ LocalStyles.fieldText }>Phone</Text>
                    </View>
                    <Text style={LocalStyles.questionText} >{item["Phone"]}</Text>
                    <View style={ LocalStyles.field }>
                        <FontAwesome name="envelope" size={20} color='#6B6B6B' style={{marginRight: 6}} />
                        <Text style={ LocalStyles.fieldText }>Email</Text>
                    </View>
                    <Text style={LocalStyles.questionText}>{item.Email}</Text>
                    <View style={ LocalStyles.field }>
                        <SimpleLineIcons name="globe" size={20} color='#6B6B6B' style={{marginRight: 6}} />
                        <Text style={ LocalStyles.fieldText }>Website</Text>
                    </View>
                    <Text style={ LocalStyles.questionText }>{item["WebAddress"]}</Text>
                </View>
                <View style={{backgroundColor: 'rgba(255, 255, 255, 1)'}}>
                    <LinearGradient colors={['rgb(239,236,232)', 'rgb(255,255,255)']} style={{padding:20}}>
                        <View style={ LocalStyles.helpContainer}>
                            <Text style={ LocalStyles.name}>
                                Areas of support
                            </Text>
                            <Text style={ LocalStyles.questionText } >
                                {item["MainCategory"].split(', ').join('\n')}
                            </Text>
                        </View>
                        <View style={ LocalStyles.helpContainer}>    
                            <Text style={ LocalStyles.name}>
                                Target group
                            </Text>
                            <Text style={ LocalStyles.questionText } >
                                {item["TargetGroup"].split(', ').join('\n')}
                            </Text>
                        </View>
                    </LinearGradient>
                    <View style={ GlobalStyles.soloWhite}>    
                        <Text style={ LocalStyles.name}>
                            Description
                        </Text>
                        <Text style={ LocalStyles.questionText } >
                            {item["Objective"]}
                        </Text>
                    </View>
                </View>
            <Footer/>
        </ScrollView>
    )

}