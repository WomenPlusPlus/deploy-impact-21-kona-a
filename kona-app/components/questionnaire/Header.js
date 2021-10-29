import React from 'react'
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import FlatButton from '../globals/Button';
import {globalStyles} from '../globals/GlobalStyles';
import { questStyles } from './QuestStyles';

const Header = () => {
    return (
        <View style={ globalStyles.container }>
            <Text style={ globalStyles.titleTextQuestion }>Answer a few questions in order to find the organization that can help you.</Text>
            <View style={ questStyles.smallContainer}>
            <Feather name="clock" size={16} style={ questStyles.greyText } />
                <Text style={ questStyles.greyText }> Duration: 2 min.</Text>
            </View>

            {/* Console log is a temporary solution, till the moment we have the right link to the questions */}
            <FlatButton text='Questions' onPress={() => console.log("OK Pressed")}/>
        </View>
    ) }

export default Header;
