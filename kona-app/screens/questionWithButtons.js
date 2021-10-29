import React from 'react';
import { Text, View } from 'react-native';
import BigButton from '../components/globals/BigButton';
import { questionStyles } from '../components/question/questionStyles';
import QuestionText from '../components/question/QuestionText';
import FlatButton from '../components/globals/Button';
import Subject from '../components/question/Subject';
import { globalStyles } from '../components/globals/GlobalStyles';

const QuestionWithButtons = () => {
    return (
        <View style={globalStyles.questionContainer}>
            <View>
                <Subject />
                <QuestionText />
                <View style={globalStyles.cardsContainer}>
                    <BigButton answer='Access to education' />
                    <BigButton answer='Legal rights' />
                    <BigButton answer='Improve education' />
                </View>
            </View>
            <View style={{width: '100%', flexDirection: "row",
        justifyContent: "flex-end"}}>
                <FlatButton style={{marginLeft: 'auto'}} text='Next' onPress={() => console.log("OK Pressed")}/>
            </View>
        </View>
    );
}

export default QuestionWithButtons;
