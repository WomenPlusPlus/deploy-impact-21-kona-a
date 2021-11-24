import React from "react";
import { Text, View, Image } from "react-native";
import { GlobalStyles } from "./GlobalStyles";

const HomeFooter = () => {
  return (
      <View >
        <View style={GlobalStyles.ptpb}>
            <Image  resizeMode="contain"
            style={{ width: 120, height: 50 }}
        
            source={require('../../assets/white_logo_dots.svg')}
            />
        </View>
        <View style={GlobalStyles.ptpb}>
            <Text style={GlobalStyles.homeFooterText}>Dots is an alternative legal aid app aiming to
            connect individuals to the organisations that can provide help.  </Text>
        </View>
        <View style={{paddingTop: 30}}>
        <Text style={GlobalStyles.homeFooterLinks}>Terms & Conditions   |   Privacy Policy   |   Impressum   
        Volunteering   |   Partnering
        </Text>
        </View>
        <View style={{paddingTop: 20}}>
            <Text style={GlobalStyles.homeFooterCopyright}>
            © 2020 Kona Connect
            </Text>
        </View>
      </View>
  );
};

export default HomeFooter;