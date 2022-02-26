import React from 'react';
import { StyleSheet, Text, View, Image, Button, Pressable, Alert} from 'react-native';
import { Dimensions } from 'react-native';
import {welcomeStyles} from '../styles/welcomeStyles'
import LogoSvg from '../assets/images/myShare.svg'
import {global} from '../styles/globalStyles'
import { useFonts } from '@use-expo/font';
const greetImage = require('../assets/images/back.png')
// const logo = require('../assets/images/myShare.svg')
import VectorUp from '../assets/images/VectorUp.svg';
import VectorDown from '../assets/images/VectorDown.svg'

export const Welcome = ({ navigation }) => {

    const onClick = () =>{
        navigation.push('Login')
    }

    const onClickSign = () =>{
      navigation.push('SignUp')
    }

    let [fontsLoaded] = useFonts({
      'PoppinsBold' : require('../assets/fonts/Poppins-Bold.ttf'),
      'Poppinsreg' : require('../assets/fonts/Poppins-Light.ttf'),
      'PoppinThin': require('../assets/fonts/Poppins-Light.ttf')
    })

    return(
        <View style={global.back}>
          <VectorUp
            width="530"
            height="430"
            style={{
                position: 'absolute',
                top: -170,
                left: -125,
                bottom: 0,
            }} 
          />
          <VectorDown
            width="530"
            height="430"
            style={{
                position: 'absolute',
                top: 600,
                left: -95,
                bottom: 0,
            }} 
          />
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
              onPress={onClickSign}
            >
              <Text style={[welcomeStyles.buttonTxt, welcomeStyles.yellow]}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
    )
}

