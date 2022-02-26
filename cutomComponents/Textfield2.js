import React from "react";
import { TextInput } from "react-native";
import { componentStyles } from "../styles/componentStyles";


export const TextField2 = (prop) => {
    return(
        <TextInput
            style={componentStyles.textfield2}
            placeholder={prop.placeholder}
            secureTextEntry={prop.isPasswd}
            placeholderTextColor={prop.placeColor}
        />
    )
}