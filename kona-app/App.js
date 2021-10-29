import React, { useState } from 'react';
import Home from './screens/home';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MyStack from './routes/homeStack';

const getFonts = () => Font.loadAsync({
  'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
  'poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
  'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf')
});


export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <MyStack />
    );
  } else {
    return (
    <AppLoading
     startAsync={getFonts}
     onFinish={()=> setFontsLoaded(true)}
     onError={() => console.log('error')}
    />
    )
  }

}
