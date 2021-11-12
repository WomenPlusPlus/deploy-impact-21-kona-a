import React from 'react';
import { Button, FlatList, Text, View } from 'react-native'; 
import Data from '../assets/dummy_orgs.json'


const Organisations = require('../assets/dummy_orgs.json')



  const Item = ({ name, mainCategory }) => (
      <View>
        <Text> {name} </Text>
        <Text> - </Text>
        <Text> {mainCategory} </Text>
        <Text>****************</Text>
    </View>
  );

export default function Cover({ route, navigation }) {

    const renderItem = ({item}) => (
        <Item name={item.Name} mainCategory ={item["Main Category"]} />
    );

    console.log(route.params);

    const searchQuery = route.params;

    const FilteredOrganisations = Organisations.filter((org) => {
        if (org['Main Category'].includes(searchQuery)) {
          return org
        }
      })

    const pressHandler = () => {
        navigation.navigate('StartQuestionnaire')
    }

    return (
        <View style={{paddingTop: 20}}>
            <FlatList
                data={FilteredOrganisations}
                renderItem={renderItem}
                keyExtractor={item => item["Name"]}
            />
            <Text>{Data.name}</Text>
            <Text>{Data.mainCategory}</Text>
          <Text>CoverScreen</Text>
          <Button title='Start Questionnaire' onPress={pressHandler} />
        </View>
    )
}