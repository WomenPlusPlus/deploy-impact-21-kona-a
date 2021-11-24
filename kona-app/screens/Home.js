import React, { useState } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../components/globals/GlobalStyles";
import { QuestionStyles } from "../components/locals/QuestionStyles";
import MainButton from "../components/globals/MainButton";
import Data from "../assets/kona_orgs1.js";
import IconImages from "../assets/iconImages";
import SearchBar from "../components/globals/SearchBar";
import HomeFooter from "../components/globals/HomeFooter";
import SDGs from "../components/globals/SDGs";
import { MaterialIcons } from '@expo/vector-icons'; 
import OrgList from '../components/organizations/OrganizatonsList';
import FilteredBySDG from "./FilteredBySDG";
import { color } from "react-native-elements/dist/helpers";
import { LinearGradient } from 'expo-linear-gradient';


export default function Home({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOrgsSearch = Data.filter((org) => {
    if (org["MainCategory"].toUpperCase().includes(searchQuery.toUpperCase()) ||
        org["SubCategory"].toUpperCase().includes(searchQuery.toUpperCase())) {
      return org;
    }
  });

  const navigateToFilteredOrgs = () => {
    navigation.navigate("FilteredOrgs", {
      orgs: filteredOrgsSearch,
      filter: searchQuery,
    });
  };

  const filterBy = (field, keyword) => {
    const filteredOrgs = Data.filter((org) => {
      if (org[field].includes(keyword)) {
        return org;
      }
    });

    navigation.navigate("FilteredOrgs", {
      orgs: filteredOrgs,
      filter: keyword,
    });
  };

  const filterBySDG = (field, keyword) => {
    const FilteredBySDG = Data.filter((org) => {
      if (org[field].includes(keyword)) {
        return org;
      }
    });

    navigation.navigate("FilteredBySDG", {
      orgs: FilteredBySDG,
    });
  };

  const filterByCategory = (field, field2, keyword) => {
    const filteredOrgs = Data.filter((org) => {
      if ((org[field].toUpperCase().includes((keyword).toUpperCase())) || (org[field2].toUpperCase().includes((keyword).toUpperCase()))) {
        return org;
      }
    });

    navigation.navigate("FilteredOrgs", {
      orgs: filteredOrgs,
      filter: keyword,
    });
  }

  const filterByMainOrSubCat = (category) => (filterByCategory("MainCategory", "SubCategory", category))

  const filterByTargetGroup = (category) => filterBy("TargetGroup", category) 

  const filterBySDGs = (category) => filterBySDG("SDG", category);

  const ThreeOrgs = Data.slice(0,3);

  const Arrow = '\u2192';
 
  const NoFilter = new Set();
  const navigateToAccordion = () => {
    navigation.navigate('Accordion', NoFilter )
  };

  return (
    <ScrollView>
      <View
        style={
          searchQuery ? GlobalStyles.sbWhiteContainer : GlobalStyles.container
        }
      >
        {!searchQuery && (
          <View style={GlobalStyles.homepageContainer}>
            <Image
              style={GlobalStyles.handImage}
              source={require("../assets/Vector.png")}
              style={GlobalStyles.handImage}
            />
            <Text style={GlobalStyles.bannerText}>
              We're here to help you find the support you need.
            </Text>
            <Text style={[GlobalStyles.normalText, GlobalStyles.ptpb]}>
              What do you need help with?
            </Text>
          </View>
        )}
        <SearchBar
          data={Data}
          setSearchQuery={setSearchQuery}
          onSubmit={navigateToFilteredOrgs}
        />
      </View>
      <View >
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(255, 255, 255, 1)',
          'rgba(255, 249, 243, 0.63)',
          'rgba(248, 208, 171, 0.5)' ]}
        style={GlobalStyles.background}
      />
      <View style={GlobalStyles.whiteContainer}>
        <View style={GlobalStyles.homeButtonsGrid}>
        <MainButton 
          answer="Food"
          iconName="food-variant"
          onPressWithParam={filterByMainOrSubCat} />
        <MainButton 
          answer="Shelter"
          iconName="home-heart" 
          onPressWithParam={filterByMainOrSubCat} />
        <MainButton 
          answer="Education" 
          iconName="book-open-page-variant"
          onPressWithParam={filterByMainOrSubCat} />
        <MainButton
          answer="Health"
          iconName="medical-bag"
          onPressWithParam={filterByMainOrSubCat}
        />
        <MainButton
          answer="Employment"
          iconName="account-hard-hat"
          onPressWithParam={filterByMainOrSubCat}
        />
        </View>
      </View>
      <View>
      {!searchQuery && (
          <View style={GlobalStyles.sbWhiteContainer}>
          <MaterialIcons name="groups" size={44} color="
          rgba(69, 55, 72, 1)" />
          <Text style={GlobalStyles.sdgTitle}>WHO NEEDS HELP:</Text>
          <Text style={GlobalStyles.helpText}>The help needed is meant to help a person that is a ...</Text>

          <MainButton
            answer="Victims of domestic violence"
            onPressWithParam={filterByTargetGroup}
          />
          <MainButton answer="Refugees" onPressWithParam={filterByTargetGroup} />
          <MainButton
            answer="Homeless People"
            onPressWithParam={filterByTargetGroup}
          />
          <MainButton
            answer="Disabled People"
            onPressWithParam={filterByTargetGroup}
          />
          <MainButton answer="LGBTQIA+" onPressWithParam={filterByTargetGroup} />
          <MainButton answer="Migrants" onPressWithParam={filterByTargetGroup} />
          </View>
          
          
       
      )}
      </View>
      </View>
      {!searchQuery && (
      <View style={{backgroundColor: 'white'}}>
        <View style={QuestionStyles.allOrgsContainer}>
          <Text style={QuestionStyles.allOrgsText}>All organizations</Text>
          <TouchableOpacity style={QuestionStyles.allFiltersButton} onPress = {navigateToAccordion}>
            <Text style={ QuestionStyles.allFiltersText }>See all filters {Arrow}</Text>
          </TouchableOpacity>
        </View> 
        <OrgList orgs={ThreeOrgs}/>
      </View>
      )}  
       {!searchQuery && (
      <View style={GlobalStyles.sdgContainer}>
        
        <Text style={GlobalStyles.sdgTitle}>THE 17 GOALS</Text>
        <Text style={GlobalStyles.sdgText}>
          The NGOs we're partnering with contribute to the Sustainable
          Development Goals
        </Text>
        <View>
          <View style={GlobalStyles.sdgGrid}>
            {IconImages.map((icon, i) => (
              <SDGs
                source={icon.image}
                answer={icon.name}
                key={i}
                onPressWithParam={filterBySDGs}
              />
            ))}
          </View>
        </View>
      </View>
       )}
      <View style={GlobalStyles.homeFooter}>
        <HomeFooter />
      </View>
    </ScrollView>
  );
}
