import React from 'react'
import { StyleSheet, Text, View, Image, Button, Pressable, Alert, TextInput} from 'react-native';
import { Dimensions } from 'react-native';
import LogoSvg from '../assets/images/myShare.svg'
import {global} from '../styles/globalStyles'
import { TextField2 } from '../cutomComponents/Textfield2';
import BackSVG from '../assets/images/backg.svg'
import { welcomeStyles } from '../styles/welcomeStyles';
import { useFonts } from '@use-expo/font';
import GoogleLogo from '../assets/images/ggle.svg'
import FbLogo from '../assets/images/fb.svg'
import { signUpStyles } from '../styles/signupStyle';
import {NumField } from '../cutomComponents/Numfield'
import ReactNavigation from 'react-navigation'

export const SignUp = ({ navigation }) => {
    
    const arrow = "<"
    const backToHome = () => {
        navigation.goBack()
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
            <View style={signUpStyles.containerTop}>
                <Pressable
                style={[signUpStyles.roundBtn, signUpStyles.bottomShadow]}
                onPress={backToHome}
                >
                    <Text style={signUpStyles.arrow}>
                        {arrow}
                    </Text>
                </Pressable>
                <LogoSvg
                    width="150"
                    style={signUpStyles.logo} 
                />
            </View>
            <View style={signUpStyles.formContainer}>
                <TextField2
                    placeholder="Name"
                    isPasswd={false}
                    placeColor={"#ECCA5173"}
                />
                <NumField
                    placeholder="Phone Number"
                    isPasswd={false}
                    placeColor={"#ECCA5173"}
                />
                <TextField2
                    placeholder="Email Id"
                    isPasswd={false}
                    placeColor={"#ECCA5173"}
                />
                <TextField2
                    placeholder="Password"
                    isPasswd={true}
                    placeColor={"#ECCA5173"}
                />
                <Pressable style={[signUpStyles.button, signUpStyles.bottomShadow]}
                // onPress={onClick}
                >
                    <Text style={[signUpStyles.btnText, signUpStyles.yellow]}>SignUp</Text>
                </Pressable>
            </View>
            <View style={signUpStyles.textBox2}>
                <Text style={signUpStyles.disText}>
                    Or Sign Up With
                </Text>
            </View>
            <View style={signUpStyles.authBtns}>
                <Pressable
                style={[signUpStyles.roundBtn, signUpStyles.bottomShadow, signUpStyles.extraMarg]}
                onPress={backToHome}
                >
                    <GoogleLogo
                        width="45"
                    />
                </Pressable>
                <Pressable
                style={[signUpStyles.roundBtn, signUpStyles.bottomShadow, signUpStyles.extraMarg]}
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
            <View style={signUpStyles.textBox}>
                <Text style={signUpStyles.disText}>
                    By continuing you agree to our 
                </Text>
                <Text style={[signUpStyles.disText , signUpStyles.yellow]}> Terms of Services</Text><Text style={signUpStyles.disText}> & </Text><Text style={[signUpStyles.disText, signUpStyles.yellow]}>Privacy Policy.</Text>
            </View>
        </View>
    )
}