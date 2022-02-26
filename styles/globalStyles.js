import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native'

export const global = StyleSheet.create({
    back: {
        backgroundColor: "#0F0F0F",
        width: Dimensions.get('window').width,
        height: Dimensions.get('screen').height
    },
    left: {
        alignItems:"flex-end"
    }
})