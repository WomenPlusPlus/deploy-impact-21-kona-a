import React, { useState } from 'react';
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { GlobalStyles } from '../globals/GlobalStyles';
import { QuestionStyles } from "./QuestionStyles";
import { Ionicons } from '@expo/vector-icons';
import Collapsible from 'react-native-collapsible';
import OrgList from "../startQuestionnaire/OrganizatonsList";

const ResultsButton = ({filteredOrgs}) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleExpanded = () => {
    //Toggling the state of single Collapsible
    setCollapsed(!collapsed);
  };

  const results = filteredOrgs

  return (
    <ScrollView>
      {/*Code for Single Collapsible Start*/}
      <View style={GlobalStyles.flexCenter}>
        <TouchableOpacity style={QuestionStyles.resultsButton} onPress={toggleExpanded}>
          <View>
            <Text style={QuestionStyles.resultsButtonText}>See {results.length} results</Text>
            {/*Heading of Single Collapsible*/}
          </View>
        </TouchableOpacity>
      </View>
      {/*Content of Single Collapsible*/}
      <Collapsible collapsed={collapsed}>
        <View>
          <OrgList orgs={results}/>
        </View>
      </Collapsible>
      {/*Code for Single Collapsible Ends*/}
    </ScrollView>

  )
}

export default ResultsButton;
