import React from "react"; 
import { StackRouter } from "react-navigation";
import SearchBar from "../components/globals/SearchBar";
import { Text, View } from "react-native";
import { GlobalStyles } from "../components/globals/GlobalStyles";
import { filterByKeywordInAnyField } from "../components/globals/FilterUtils";
import MainButton from "../components/globals/MainButton";
import Data from "../data/kona_orgs.json";

export default function SearchPage({route, navigation}) {

    const filterByFieldsAndNavigate = (fields, screen, keyword) => {
        const filteredOrgs = filterByKeywordInAnyField(Data, fields, keyword);
    
        navigation.navigate(screen, {
          orgs: filteredOrgs,
          filter: keyword,
        });
      }

    const navigateToFilteredOrgs = (event) => {
        const searchQuery = event.nativeEvent.text;
         filterByFieldsAndNavigate(["MainCategory", "SubCategory"], "FilteredOrgs", searchQuery) 
    }

    const filterByMainOrSubCat = (category) => (filterByFieldsAndNavigate(["MainCategory", "SubCategory"], "FilteredOrgs", category));

    return (
      <View style={GlobalStyles.whiteContainer}>
        <View>
        <Text style={[GlobalStyles.normalText, GlobalStyles.ptpb]}>What do you need help with?</Text>
        </View>
            <SearchBar style={{backgroundColor: "white"}} initialSearchQuery={route.params} onSubmit={navigateToFilteredOrgs} autoFocus /*key="searchPage"*//>  
            
        <View style={{marginTop: -15}}>
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
    )
}
