import React from 'react'
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import FlatButton from '../globals/Button';
import { GlobalStyles} from '../globals/GlobalStyles';
import { QuestStyles } from './QuestStyles';

const Header = () => {
    return (
        <View style={ GlobalStyles.container }>
            <Text style={ GlobalStyles.questionText }>Answer a few questions in order to find the organization that can help you.</Text>
            <View style={ QuestStyles.smallContainer}>
            <Feather name="clock" size={16} style={ QuestStyles.greyText } />
                <Text style={ QuestStyles.greyText }> Duration: 2 min.</Text>
            </View>

            {/* Console log is a temporary solution, till the moment we have the right link to the questions */}
            <FlatButton text='Questions' onPress={() => console.log("OK Pressed")}/>
        </View>
    ) }

export default Header;
