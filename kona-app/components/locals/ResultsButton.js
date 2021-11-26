import React, { useState } from 'react';
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { GlobalStyles } from '../globals/GlobalStyles';
import { LocalStyles } from "./LocalStyles";
import Collapsible from 'react-native-collapsible';
import OrgList from "../organizations/OrganizatonsList";
import { useNavigation } from '@react-navigation/native';

const ResultsButton = ({filteredOrgs, selectedKeywords}) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  const results = filteredOrgs;

  const navigation = useNavigation();

  const navigateToUltimate = () => {
    navigation.navigate("UltimatelyFiltered", {results:results, selectedKeywords:selectedKeywords});
  };

  return (
    <ScrollView>
      <View style={GlobalStyles.flexCenter}>
        <TouchableOpacity style={LocalStyles.resultsButton} onPress={navigateToUltimate}>
          <View>
            <Text style={LocalStyles.resultsButtonText}>See {results.length} results</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Collapsible collapsed={collapsed}>
        <View>
          <OrgList orgs={results}/>
        </View>
      </Collapsible>
    </ScrollView>
  )
}

export default ResultsButton;
