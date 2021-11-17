import React, { useState } from 'react';
import OrgList from '../components/startQuestionnaire/OrganizatonsList';
import Filter from '../screens/Filter';
import { View, ScrollView } from 'react-native';
import Data from '../assets/kona_orgs.json';

export default function FilteredOrgs({ route, navigation }) {

    const [filteredOrgs, setFilteredOrgs] = useState(route.params.orgs);

    const filterKeyword = route.params.filter;


    // let word = "Women";
    // const filteredOrgs2 = filteredOrgs.filter((ngo) => {
    //     if (ngo['TargetGroup'].includes(word)) {
    //         return ngo
    //     }
    // })


    // if (word) {
    //     return (
    //         <View>
    //             <Filter filterKeyword = {filter}/>
    //             {console.log("We are here")}
    //             {console.log(filteredOrgs)}
    //             <View>
    //                 <OrgList orgs={filteredOrgs2}/>
    //             </View>
    //         </View>
    //     )
    // }

    return(
        <ScrollView>
            <Filter filterKeyword = {filterKeyword} setFilteredOrgs={setFilteredOrgs} />

            <View>
                <OrgList orgs={filteredOrgs}/>
            </View>
      </ScrollView>
    )
}
