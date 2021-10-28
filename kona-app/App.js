import React from 'react';
import { Text, View } from 'react-native';
import Questionnaire from './components/questionnaire/Questionnaire';
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './routes/coverStack';

export default function App() {
  return (
    <Navigator /> 
  );
}
