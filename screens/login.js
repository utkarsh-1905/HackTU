import React, { useState } from 'react'
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
import FbLogo from '../assets/images/fb.svg'
import { componentStyles } from '../styles/componentStyles';

export const Login = ({ navigation }) => {
    
    const [uname, setUname] = useState("Empty")
    const [passwd, setPasswd] = useState("Empty")

    const arrow = "<"
    const backToHome = () => {
        navigation.goBack()
    }

    const authenticate = () => {
        console.log(uname)
        console.log(passwd)
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
                <TextInput
                    style={componentStyles.textfield}
                    placeholder="Email Id"
                    secureTextEntry={false}
                    placeholderTextColor="#ffffff73"
                    onChangeText={(text) => {
                        setUname(text)
                    }}
                />
                <TextInput
                    style={componentStyles.textfield}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff73"
                    onChangeText={(text) => {
                        setPasswd(text)
                    }}
                />
                <Pressable 
                style={[welcomeStyles.noBodyBtn, global.left]}
                >
                    <Text style={[welcomeStyles.buttonTxt, welcomeStyles.yellow]}>Forgot Passwod?</Text>
                </Pressable>
                <Pressable style={[loginStyles.button, loginStyles.bottomShadow]}
                onPress={authenticate}
                >
                    <Text style={loginStyles.btnText}>Login</Text>
                </Pressable>
            </View>
            <View style={loginStyles.authBtns}>
                <Pressable
                style={[loginStyles.roundBtn, loginStyles.bottomShadow, loginStyles.extraMarg]}
                onPress={backToHome}
                >
                    <GoogleLogo
                        width="45"
                    />
                </Pressable>
                <Pressable
                style={[loginStyles.roundBtn, loginStyles.bottomShadow, loginStyles.extraMarg]}
                onPress={backToHome}
                >
                    <FbLogo
                        width="45"
                        style={{
                            marginLeft: 3
                        }}
                    />
                </Pressable>
            </View>
            <View style={loginStyles.textBox}>
                <Text style={loginStyles.disText}>
                    By continuing you agree to our 
                </Text>
                <Text style={[loginStyles.disText , loginStyles.yellow]}> Terms of Services</Text><Text style={loginStyles.disText}> & </Text><Text style={[loginStyles.disText, loginStyles.yellow]}>Privacy Policy.</Text>
            </View>
        </View>
    )
}