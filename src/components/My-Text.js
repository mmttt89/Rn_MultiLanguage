import React, { Component, useContext } from 'react'
import { Text, View } from 'react-native'
import EStyleSheet from "react-native-extended-stylesheet"
import { DarkModeContext } from '@Services/DarkMode_Context';
import Strings from '../constants/Strings';

const MyText = ({ bold, style, ...props }) => {
    const { theme } = useContext(DarkModeContext);

    let fontFamily = Platform.OS == "android" ? "IRANSans_Normal" : null;
    if (bold) {
        fontFamily = Platform.OS == "android" ? "IRANSans_Bold" : null;
    }
    const textAlign = Strings.Dir == "rtl" ? "right" : "left"

    return (
        <Text {...props} style={[styles.text, { fontFamily, textAlign, color: theme.text }, style,]}>
            {props.children}
        </Text>
    )
}

export default MyText

const styles = EStyleSheet.create({
    text: {
        fontSize: Platform.OS == "ios" ? 15 : 13
    },
})

