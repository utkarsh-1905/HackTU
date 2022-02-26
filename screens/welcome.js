import React from 'react';
import { StyleSheet, Text, View, Image, Button, Pressable, Alert} from 'react-native';
import { Dimensions } from 'react-native';
import {welcomeStyles} from '../styles/welcomeStyles'
import LogoSvg from '../assets/images/myShare.svg'
import {global} from '../styles/globalStyles'
import { useFonts } from '@use-expo/font';
const greetImage = require('../assets/images/back.png')
// const logo = require('../assets/images/myShare.svg')

export const Welcome = ({ navigation }) => {

    const onClick = () =>{
        navigation.navigate('Login')
    }

    let [fontsLoaded] = useFonts({
      'PoppinsBold' : require('../assets/fonts/Poppins-Bold.ttf'),
      'Poppinsreg' : require('../assets/fonts/Poppins-Light.ttf'),
      'PoppinThin': require('../assets/fonts/Poppins-Light.ttf')
    })

    return(
        <View style={global.back}>
          <View style={welcomeStyles.containerTop}>
            <Image
            style={welcomeStyles.image}
            source={greetImage}
            />
            {/* Logo */}
            <View style={welcomeStyles.containerText}>
              <LogoSvg
              width="200"
              />              
            </View>
            {/* ----- */}
          </View>
          <View style={welcomeStyles.containerMid}>
            <Text style={welcomeStyles.wlcmFont}>
              Welcome!
            </Text>
            <Text style={welcomeStyles.paraFont}>
              We jbagajvnsxjviafngjav  hasihjgnbajv uhasdfgh
              fasdjgnbajkgna fvkjaadujhg uoiahg aoga b ofg ao
              fgjajhgadjksfng nasjigai g uawetr 
              aofdhfgouanrtgt vaourt oiuashfg irghao v saj
              sinas fd pt a ig spfa  ity anaso gnajdfgfho fguanjg
            </Text>
          </View>
          <View style={welcomeStyles.containerBtn}>
            <Pressable style={[welcomeStyles.button, welcomeStyles.topShadow, welcomeStyles.bottomShadow]}
              onPress={onClick}
            >
              <Text style={welcomeStyles.buttonTxt}>Login</Text>
            </Pressable>
            <Pressable 
              style={welcomeStyles.noBodyBtn}
            >
              <Text style={[welcomeStyles.buttonTxt, welcomeStyles.yellow]}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
    )
}

