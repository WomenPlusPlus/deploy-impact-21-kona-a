import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from './GlobalStyles';

export default function HomeButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
    style={{padding: 36}}
    onPress={() => navigation.navigate('Home')}
    color="black">
        <Text style={GlobalStyles.questionText}>Cancel</Text>
    </TouchableOpacity>
  );
}