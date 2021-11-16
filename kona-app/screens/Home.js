import React, { useState } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { GlobalStyles } from "../components/globals/GlobalStyles";
import { QuestionStyles } from "../components/question/QuestionStyles";
import BigButton from "../components/globals/BigButton";
import Data from "../assets/kona_orgs.json";
import IconImages from "../assets/iconImages";
import SearchBar from "../components/globals/SearchBar";
import SDGs from "../components/globals/SDGs";

export default function Home({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOrgsSearch = Data.filter((org) => {
    if (org["MainCategory"].toUpperCase().includes(searchQuery.toUpperCase())) {
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

  const filterByMainCategory = (category) => filterBy("SubCategory", category);

  const filterByTargetGroup = (category) => filterBy("TargetGroup", category);

  const filterBySDGs = (category) => filterBy("SDG", category);

  // if (searchQuery) {
  //   return (
  //     <View style={GlobalStyles.container}>
  //       <SearchBar initialValue={searchQuery} setSearchQuery={setSearchQuery} />
  //       <FlatButton text="Search" onPress={pressSearchHandler} />
  //     </View>
  //   );
  // }
  console.log(filterBySDGs("No Poverty"));
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
        <Text style={GlobalStyles.normalText}>I need help with:</Text>
        <BigButton answer="Food" onPressWithParam={filterByMainCategory} />
        <BigButton answer="Shelter" onPressWithParam={filterByMainCategory} />
        <BigButton answer="Education" onPressWithParam={filterByMainCategory} />
        <BigButton
          answer="Agriculture"
          onPressWithParam={filterByMainCategory}
        />
        <BigButton
          answer="Social Protection"
          onPressWithParam={filterByMainCategory}
        />
      </View>
      {!searchQuery && (
        <View style={GlobalStyles.whiteContainer}>
          <Text style={GlobalStyles.normalText}>I need help for:</Text>
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
      )}
      <View style={GlobalStyles.container}>
      <Text style={ GlobalStyles.sdgTitle }>THE 17 GOALS</Text>
      <Text style={QuestionStyles.questionText}>The NGOs we're partnering with contribute to the Sustainable Development Goals</Text>
      <View >
        <View style={GlobalStyles.sdgGrid}>
        <SDGs
          source={IconImages.noPovertyIcon}
          answer="No Poverty"
          onPressWithParam={filterBySDGs}
        />
        <SDGs
          answer="No Hunger"
          source={IconImages.noHungerIcon}
          onPressWithParam={filterBySDGs}
        />
        <SDGs
          source={IconImages.healthIcon}
          answer="Health"
          onPressWithParam={filterBySDGs}
        />
        <SDGs
          answer="Education"
          source={IconImages.educationIcon}
          onPressWithParam={filterBySDGs}
        />
        <SDGs
          answer="Gender Equality"
          source={IconImages.genderEqualityIcon}
          onPressWithParam={filterBySDGs}
        />
        <SDGs
          answer="Water/Sanitation"
          source={IconImages.waterIcon}
          onPressWithParam={filterBySDGs}
        />
        <SDGs
          answer="Clean Energy"
          source={IconImages.cleanEnergyIcon}
          onPressWithParam={filterBySDGs}
        />
        <SDGs
          answer="Work / Economic Growth"
          source={IconImages.workIcon}
          onPressWithParam={filterBySDGs}
        />
        <SDGs
          answer="Industry / Innovation / Infrastructure"
          source={IconImages.industryIcon}
          onPressWithParam={filterBySDGs}
        />
        <SDGs
          answer="Inequalities"
          source={IconImages.inequalitiesIcon}
          onPressWithParam={filterBySDGs}
        />
        <SDGs
          answer="Sustainable Communities"
          source={IconImages.sustainableComIcon}
          onPressWithParam={filterBySDGs}
        />
        <SDGs
          answer="Responsible Consumption"
          source={IconImages.consumptionIcon}
          onPressWithParam={filterBySDGs}
        />
        <SDGs
          answer="Climate"
          source={IconImages.climateIcon}
          onPressWithParam={filterBySDGs}
        />
        <SDGs
          answer="Life below Water"
          source={IconImages.belowWaterIcon}
          onPressWithParam={filterBySDGs}
        />
        <SDGs
          answer="Life on land"
          source={IconImages.onLandIcon}
          onPressWithParam={filterBySDGs}
        />
        <SDGs
          answer="Justice / Institutions"
          source={IconImages.justiceIcon}
          onPressWithParam={filterBySDGs}
        />
        <SDGs
          answer="Partnership for the Goals"
          source={IconImages.partnershipIcon}
          onPressWithParam={filterBySDGs}
        />
        </View>
        </View>
      </View>
    </ScrollView>
  );
}
