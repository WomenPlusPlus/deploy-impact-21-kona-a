import React from 'react';
import { View, Image } from 'react-native-animatable';

export default function Logo() {
    return (
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
      <Image  resizeMode="contain"
    style={{ width: 120, height: 50 }}
        
        source={require('../../assets/logo_DOTS.svg')}
      />
      </View>
    );
  }
  