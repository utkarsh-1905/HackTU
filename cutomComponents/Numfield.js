import React from "react";
import { TextInput } from "react-native";
import { componentStyles } from "../styles/componentStyles";


export const NumField = (prop) => {
    return(
        <TextInput
            keyboardType="numeric"
            maxLength={10}
            style={componentStyles.textfield2}
            placeholder={prop.placeholder}
            secureTextEntry={prop.isPasswd}
            placeholderTextColor={prop.placeColor}
        />
    )
}