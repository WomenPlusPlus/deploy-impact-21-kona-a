import React from 'react';
import { View } from 'react-native';
import BigButton from '../components/globals/BigButton';
import QuestionText from '../components/question/QuestionText';
import FlatButton from '../components/globals/Button';
import Subject from '../components/question/Subject';
import { GlobalStyles } from '../components/globals/GlobalStyles';

const QuestionWithButtons = () => {
    return (
        <View style={GlobalStyles.questionContainer}>
            <View style={GlobalStyles.smallerQuestionContainer}>
                <Subject />
                <QuestionText />
                <View style={GlobalStyles.cardsContainerLeft}>
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
