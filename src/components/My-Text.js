import React, { Component, useContext } from 'react'
import { Text, View } from 'react-native'
import EStyleSheet from "react-native-extended-stylesheet"
import { DarkModeContext } from '@Services/DarkMode_Context';

const MyText = ({ bold, style, ...props }) => {
    const { theme } = useContext(DarkModeContext)

    let fontFamily = "IRANSans_Normal";
    if (bold) {
        fontFamily = "IRANSans_Bold";
    }
    return (
        <Text {...this.props} style={[styles.text, { fontFamily, color: theme.text }, style,]}>
            {props.children}
        </Text>
    )
}

export default MyText

const styles = EStyleSheet.create({
    text: {
        fontSize: "10rem"
    },
})

