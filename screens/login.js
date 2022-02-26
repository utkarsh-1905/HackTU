import React from 'react'
import { StyleSheet, Text, View, Image, Button, Pressable, Alert, TextInput} from 'react-native';
import { Dimensions } from 'react-native';
import LogoSvg from '../assets/images/myShare.svg'
import {global} from '../styles/globalStyles'
import {loginStyles} from '../styles/loginStyles'
import { TextField } from '../cutomComponents/Textfield';
import BackSVG from '../assets/images/backg.svg'
import { welcomeStyles } from '../styles/welcomeStyles';
import { useFonts } from '@use-expo/font';
import GoogleLogo from '../assets/images/ggle.svg'

export const Login = ({ navigation }) => {
    
    const arrow = "<"
    const backToHome = () => {
        navigation.navigate('Welcome')
    }
    return(
        // Body
        <View style={global.back}>
            <BackSVG
                width="530"
                height="430"
                style={{
                    position: 'absolute',
                    top: 200,
                    left: -145,
                    bottom: 0,
                }} 
            />
            <View style={loginStyles.containerTop}>
                <Pressable
                style={[loginStyles.roundBtn, loginStyles.bottomShadow]}
                onPress={backToHome}
                >
                    <Text style={loginStyles.arrow}>
                        {arrow}
                    </Text>
                </Pressable>
                <LogoSvg
                    width="150"
                    style={loginStyles.logo} 
                />
            </View>
            <View style={loginStyles.formContainer}>
                
                <TextField
                    placeholder="Email Id"
                    isPasswd={false}
                    placeColor={"#ffffff73"}
                />
                <TextField
                    placeholder="Password"
                    isPasswd={true}
                    placeColor={"#ffffff73"}
                />
                <Pressable 
                style={[welcomeStyles.noBodyBtn, global.left]}
                >
                    <Text style={[welcomeStyles.buttonTxt, welcomeStyles.yellow]}>Forgot Passwod?</Text>
                </Pressable>
                <Pressable style={[loginStyles.button, loginStyles.bottomShadow]}
                // onPress={onClick}
                >
                    <Text style={loginStyles.btnText}>Login</Text>
                </Pressable>
            </View>
            <View style={loginStyles.authBtns}>
                <Pressable
                style={[loginStyles.roundBtn, loginStyles.bottomShadow]}
                onPress={backToHome}
                >
                    <Text style={loginStyles.arrow}>
                        {arrow}
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}