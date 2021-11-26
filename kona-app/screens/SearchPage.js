import React from "react"; 
import { StackRouter } from "react-navigation";
import SearchBar from "../components/globals/SearchBar";
import { filterByKeywordInAnyField } from "../components/globals/FilterUtils";
import Data from "../assets/kona_orgs.json";

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

    return (
        <div>
            <SearchBar initialSearchQuery={route.params} onSubmit={navigateToFilteredOrgs} autoFocus /*key="searchPage"*//>     
        </div>
    )
}
