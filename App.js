import { StyleSheet, Text, View, Image, Button, Pressable, Alert} from 'react-native';
import { TextInput } from 'react-native-web';

import React,{useState} from 'react';
import { useFonts } from '@use-expo/font';

import { Welcome } from './screens/welcome';
import { Login } from './screens/login';
import Navigator from './routes/authStack'
// import backImage from 'assets/back.png'

const App = () => {
  
  let [fontsLoaded] = useFonts({
    'PoppinsBold' : require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppinsreg' : require('./assets/fonts/Poppins-Light.ttf'),
    'PoppinThin': require('./assets/fonts/Poppins-Light.ttf')
  })
  if(fontsLoaded){
    return <Navigator/>
  }else{
    return (
      <View>
        <Text>OK</Text>
      </View>
    )
  }
}


export default App;