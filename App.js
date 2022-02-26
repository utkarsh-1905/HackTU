import { StyleSheet, Text, View, Image, Button, Pressable, Alert} from 'react-native';
import { TextInput } from 'react-native-web';

import React,{useState} from 'react';
import { useFonts } from '@use-expo/font';

import { Welcome } from './screens/welcome';
import { Login } from './screens/login';
import Navigator from './routes/signUpstack'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardStyleInterpolators, StackViewTransitionConfigs } from 'react-navigation-stack';
import { SignUp } from './screens/signup';
// import backImage from 'assets/back.png'

const Stack = createNativeStackNavigator();

const App = () => {
  
  let [fontsLoaded] = useFonts({
    'PoppinsBold' : require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppinsreg' : require('./assets/fonts/Poppins-Light.ttf'),
    'PoppinThin': require('./assets/fonts/Poppins-Light.ttf')
  })
  if(fontsLoaded){
    return(
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right'
          }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }else{
    return (
      <View>
        <Text>OK</Text>
      </View>
    )
  }
}


export default App;