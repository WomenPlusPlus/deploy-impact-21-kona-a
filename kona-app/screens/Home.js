import React, { useState } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../components/globals/GlobalStyles";
import { QuestionStyles } from "../components/question/QuestionStyles";
import BigButton from "../components/globals/BigButton";
import Data from "../assets/kona_orgs1.js";
import IconImages from "../assets/iconImages";
import SearchBar from "../components/globals/SearchBar";
import HomeFooter from "../components/globals/HomeFooter";
import SDGs from "../components/globals/SDGs";
import { MaterialIcons } from '@expo/vector-icons'; 
import OrgList from '../components/startQuestionnaire/OrganizatonsList';
import FilteredBySDG from "./FilteredBySDG";
import { color } from "react-native-elements/dist/helpers";


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
      <View style={GlobalStyles.whiteContainer}>
        <View style={GlobalStyles.homeButtonsGrid}>
        <BigButton 
          answer="Food"
          iconName="food-variant"
          onPressWithParam={filterByMainOrSubCat} />
        <BigButton 
          answer="Shelter"
          iconName="home-heart" 
          onPressWithParam={filterByMainOrSubCat} />
        <BigButton 
          answer="Education" 
          iconName="book-open-page-variant"
          onPressWithParam={filterByMainOrSubCat} />
        <BigButton
          answer="Health"
          iconName="medical-bag"
          onPressWithParam={filterByMainOrSubCat}
        />
        <BigButton
          answer="Employment"
          iconName="account-hard-hat"
          onPressWithParam={filterByMainOrSubCat}
        />
        </View>
      </View>
      {!searchQuery && (
        <View style={GlobalStyles.greyContainer}>
          <View style={GlobalStyles.sbWhiteContainer}>
          <MaterialIcons name="groups" size={44} color="#C4C4C4" />
          <Text style={GlobalStyles.sdgTitle}>WHO NEEDS HELP:</Text>
          <Text style={GlobalStyles.helpText}>The help needed is meant to help a person that is a ...</Text>

          <BigButton
            answer="Victims of domestic violence"
            onPressWithParam={filterByTargetGroup}
          />
          <BigButton answer="Refugees" onPressWithParam={filterByTargetGroup} />
          <BigButton
            answer="Homeless People"
            onPressWithParam={filterByTargetGroup}
          />
          <BigButton
            answer="Disabled People"
            onPressWithParam={filterByTargetGroup}
          />
          <BigButton answer="LGBTQIA+" onPressWithParam={filterByTargetGroup} />
          <BigButton answer="Migrants" onPressWithParam={filterByTargetGroup} />
          </View>
        </View>
      )}
      <View style={{backgroundColor: 'white'}}>
        <View style={QuestionStyles.allOrgsContainer}>
          <Text style={QuestionStyles.allOrgsText}>All organizations</Text>
          <TouchableOpacity style={QuestionStyles.allFiltersButton} onPress = {navigateToAccordion}>
            <Text style={ QuestionStyles.allFiltersText }>See all filters {Arrow}</Text>
          </TouchableOpacity>
        </View> 
        <OrgList orgs={ThreeOrgs}/>
      </View>  
       {!searchQuery && (
      <View style={GlobalStyles.container}>
        <Text style={GlobalStyles.sdgTitle}>THE 17 GOALS</Text>
        <Text style={QuestionStyles.questionText}>
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
