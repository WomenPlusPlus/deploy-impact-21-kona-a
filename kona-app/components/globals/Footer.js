import React from "react";
import { View, Image } from "react-native";


const Footer = () => {
  return (
      <View >
        <View style={{padding: 24}}>
            <Image  resizeMode="contain"
            style={{ width: 88, height: 34 }}
        
            source={require('../../assets/logo_DOTS.svg')}
            />
        </View>
        
      </View>
  );
};

export default Footer;