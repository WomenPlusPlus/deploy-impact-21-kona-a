import React, { useState } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../components/globals/GlobalStyles";
import { LocalStyles } from "../components/locals/LocalStyles";
import MainButton from "../components/globals/MainButton";
import Data from "../data/kona_orgs.json";
import IconImages from "../assets/iconImages";
import SearchBar from "../components/globals/SearchBar";
import HomeFooter from "../components/globals/HomeFooter";
import SDGs from "../components/globals/SDGs";
import { MaterialIcons } from '@expo/vector-icons'; 
import OrgList from '../components/organizations/OrganizatonsList';
import FilteredBySDG from "./FilteredBySDG";
import { color } from "react-native-elements/dist/helpers";
import { LinearGradient } from 'expo-linear-gradient';
import { filterByKeywordInAnyField } from "../components/globals/FilterUtils";


export default function Home({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filterByFieldsAndNavigate = (fields, screen, keyword) => {
    const filteredOrgs = filterByKeywordInAnyField(Data, fields, keyword);

    navigation.navigate(screen, {
      orgs: filteredOrgs,
      filter: keyword,
    });
  }

  const navigateToSearchPage = () => {
    navigation.navigate("SearchPage")
  }
  const filterByMainOrSubCat = (category) => (filterByFieldsAndNavigate(["MainCategory", "SubCategory"], "FilteredOrgs", category));

  const navigateToFilteredOrgs = () => filterByFieldsAndNavigate(["MainCategory", "SubCategory"], "FilteredOrgs", searchQuery) 

  const filterByTargetGroup = (category) => filterByFieldsAndNavigate(["TargetGroup", "SubTargetGroup"], "FilteredOrgs", category) 

  const filterBySDGs = (category) =>  filterByFieldsAndNavigate(["SDG"], "FilteredBySDG", category);

  const ThreeOrgs = Data.slice(0,3);

  const Arrow = '\u2192';
 
  const NoFilter = new Set();
  
  const navigateToAccordion = () => {
    navigation.navigate('Accordion', NoFilter )
  };

  const navigateToAll = () => {
    navigation.navigate('FilteredOrgs',  )
  }

  return (
    <ScrollView>
      <View
        style={
          searchQuery ? GlobalStyles.sbWhiteContainer : GlobalStyles.container
        }
      > 
  
        
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
    
        <SearchBar
          data={Data}
          // key="homePage"
          // setSearchQuery={setSearchQuery}
          onSubmit={navigateToFilteredOrgs}
          navigateOnChange
          // onPress={navigateToSearchPage}
        />
      </View>
      <View>
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
          <MainButton answer="LGBTI" onPressWithParam={filterByTargetGroup} />
          <MainButton answer="Migrants" onPressWithParam={filterByTargetGroup} />
          </View>
     
      </View>
      </View>
    
      <View style={{backgroundColor: 'white'}}>
        <View style={LocalStyles.allOrgsContainer}>
          <Text style={LocalStyles.allOrgsText}>All organizations</Text>
          <TouchableOpacity style={LocalStyles.allFiltersButton} onPress = {navigateToAccordion}>
            <Text style={ LocalStyles.allFiltersText }>See all filters {Arrow}</Text>
          </TouchableOpacity>
        </View> 
        <OrgList orgs={ThreeOrgs}/>
        <TouchableOpacity onPress={navigateToFilteredOrgs}>
          <Text style={ GlobalStyles.textLink }>See all</Text>
        </TouchableOpacity>
      </View>
     
      
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
       
      <View style={GlobalStyles.homeFooter}>
        <HomeFooter />
      </View>
    </ScrollView>
  );
}
