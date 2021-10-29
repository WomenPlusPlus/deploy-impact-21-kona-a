import React from 'react';
import { Text, View } from 'react-native';
import BigButton from '../components/globals/BigButton';

const QuestionWithButtons = () => {
    return (
        <View>
            <Text>Education</Text>
            <Text>Are you citizen of the country you currently reside in?</Text>
            <BigButton answer='No' />
            <BigButton answer='Yes' />
        </View>
    );
}

export default QuestionWithButtons;
