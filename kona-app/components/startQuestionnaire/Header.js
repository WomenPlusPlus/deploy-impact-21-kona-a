import React from 'react'
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import FlatButton from '../globals/Button';
import { GlobalStyles} from '../globals/GlobalStyles';
import { QuestionStyles } from '../question/QuestionStyles';

const Header = () => {
    return (
        <View style={ GlobalStyles.container }>
            <Text style={ QuestionStyles.questionText }>Answer a few questions in order to find the organization that can help you.</Text>
            <View style={ QuestionStyles.smallContainer}>
            <Feather name="clock" size={16} style={ QuestionStyles.greyText } />
                <Text style={ QuestionStyles.greyText }> Duration: 2 min.</Text>
            </View>

            {/* Console log is a temporary solution, till the moment we have the right link to the questions */}
            <FlatButton text='Questions' onPress={() => console.log("OK Pressed")}/>
        </View>
    ) }

export default Header;
