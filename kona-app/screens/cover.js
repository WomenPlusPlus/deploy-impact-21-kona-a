import React from 'react';
import { Button, FlatList, Text, View } from 'react-native'; 
import dummy_orgs from '../assets/dummy_orgs.json'


const Organisation = require('../assets/dummy_orgs.json')

  const Item = ({ title }) => (
      <Text> {title} </Text>
  );

export default function Cover({ navigation }) {

    const renderItem = ({item}) => (
        <Item title={item.Name} />
    );

    const pressHandler = () => {
        navigation.navigate('StartQuestionnaire')
    }

    return (
        <View style={{paddingTop: 20}}>
            <FlatList
                data={Organisation}
                renderItem={renderItem}
                keyExtractor={item => item}
            />
            <Text>{dummy_orgs.name}</Text>
          <Text>CoverScreen</Text>
          <Button title='Start Questionnaire' onPress={pressHandler} />
        </View>
    )
}
