import React from "react";
import { TextInput } from "react-native";
import { componentStyles } from "../styles/componentStyles";


export const TextField = (prop) => {
    return(
        <TextInput
            style={componentStyles.textfield}
            placeholder={prop.placeholder}
            secureTextEntry={prop.isPasswd}
            placeholderTextColor={prop.placeColor}
        />
    )
}