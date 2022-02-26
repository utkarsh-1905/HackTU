
import React from 'react';
import {StyleSheet} from 'react-native'
import { Dimensions } from 'react-native';



export const welcomeStyles = StyleSheet.create({
    back: {
      backgroundColor: "#0F0F0F",
      width: Dimensions.get('window').width,
      height: Dimensions.get('screen').height
    },
    containerTop: {
      alignItems: "center",
      marginTop: 30
    },
    conatainerMid: {
      textAlign:"center"
    },
    image: {
      width: 260,
      height: 260,
    },
    titleFont: {
      fontSize: 38,
      color: "#fcc317",
    },
    wlcmFont: {
      fontSize: 25,
      color: "#fff",
      // fontFamily: 'Poppins-SemiBold.ttf',
      fontFamily: 'PoppinsBold',
      // marginTop: 0,
      marginLeft: 130,
    },
    containerText:{
      marginTop: -10,
      textAlign: "center",
      justifyContent: "center"
    },
    paraFont:{
      fontSize: 18,
      marginLeft: 20,
      marginRight: 15,
      marginTop: 10,
      color: "#fff",
      fontFamily: "Poppinsreg"
    },
    containerBtn:{
      marginTop: 20,
      alignItems: "center",
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 60,
      borderRadius: 80,
      elevation: 3,
      backgroundColor: '#272727',
    },
    topShadow: {
      shadowOffset: {
        width: -6,
        height: -6
      },
      shadowOpacity: 1,
      shadowRadius: 6,
      shadowColor: "#FBFFFF"
    },
    bottomShadow: {
      shadowOffset: {
        width: 6,
        height: 6
      },
      shadowOpacity: 1,
      shadowRadius: 6,
      shadowColor: "#B7C4DD"
    },
    buttonTxt: {
      color: "#fff",
      padding: 10,
      fontSize: 18
    },
    noBodyBtn: {
      marginTop: 25
    },
    yellow: {
      color: "#FAD655"
    },
    
    
  })
