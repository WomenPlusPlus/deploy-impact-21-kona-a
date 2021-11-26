import React from "react";
import { View, Image } from "react-native";

const Footer = () => {
  return (
      <View >
        <View style={{padding: 24, height: 100}}>
            <Image  resizeMode="contain"
            style={{ width: 88, height: 34 }}
        
            source={require('../../assets/light_purple_logo_dots.svg')}
            />
        </View>
        
      </View>
  );
};

export default Footer;
