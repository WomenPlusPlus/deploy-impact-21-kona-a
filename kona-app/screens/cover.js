import React from 'react';
import { Button, FlatList, Text, View } from 'react-native'; 
import dummy_orgs from '../assets/dummy_orgs.json'


const Organisations = require('../assets/dummy_orgs.json')

  const Item = ({ name, mainCategory }) => (
      <View>
        <Text> {name} </Text>
        <Text> - </Text>
        <Text> {mainCategory} </Text>
        <Text>****************</Text>
    </View>
  );

export default function Cover({ navigation }) {

    const renderItem = ({item}) => (
        <Item name={item.Name} mainCategory ={item["Main Category"]} />
    );

    const pressHandler = () => {
        navigation.navigate('StartQuestionnaire')
    }

    return (
        <View style={{paddingTop: 20}}>
            <FlatList
                data={Organisations}
                renderItem={renderItem}
                keyExtractor={item => item}
            />
            <Text>{dummy_orgs.name}</Text>
            <Text>{dummy_orgs.mainCategory}</Text>
          <Text>CoverScreen</Text>
          <Button title='Start Questionnaire' onPress={pressHandler} />
        </View>
    )
}
