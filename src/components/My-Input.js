import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Keyboard, Platform } from 'react-native'
import EStyleSheet from "react-native-extended-stylesheet"
import Colors from "../constants/Colors"
import Consts from '../constants/Consts'
import MyTouch from "./My-Touch"
import Strings from '../constants/Strings'

const MyTextInput = ({
    onFocus, onBlur, label, labelStyle, placeholder, style, inputStyle, textInputStyle, iconComponent,
    inputIcon, inputIconComponent, rowIcon, rowIconComponent, inputIconAction, ...otherProps
}) => {

    const [isFocused, setIsFocused] = useState(false)

    return (
        <View style={style}>
            {label ?
                <MyText
                    style={[styles.label, labelStyle]} >
                    {label}
                </MyText> : null
            }
            <View
                style={[
                    styles.container,
                    { flexDirection: Strings.Dir == "rtl" ? "row" : "row-reverse" },
                    isFocused ? styles.isFocused : null
                ]}>
                {inputIcon ?
                    <MyTouch
                        onPress={inputIconAction}
                        style={styles.inputIcon}
                    >
                        {
                            inputIconComponent
                        }
                    </MyTouch> : null
                }
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={"#888a8f"}
                    onBlur={() => setIsFocused(false)}
                    onFocus={() => setIsFocused(true)}
                    onSubmitEditing={Keyboard.dismiss}
                    style={[styles.input,
                    { textAlign: Strings.Dir == "rtl" ? "right" : "left" },
                        textInputStyle]}
                    {...otherProps}
                />
                {
                    rowIcon ?
                        <View style={styles.rowIcon}>
                            {rowIconComponent}
                        </View> : null
                }
            </View>
        </View>
    )
}

export default MyTextInput

const styles = EStyleSheet.create({
    container: {
        marginTop: 4,
        borderBottomColor: Colors.bg,
        borderBottomWidth: 3,
        backgroundColor: "#f9f9f9",
        borderRadius: 5,
    },
    isFocused: {
        borderBottomColor: "#19c0d3"
    },
    input: {
        flex: 1,
        paddingHorizontal: 6,
        minHeight: 12,
        fontFamily: Platform.OS == "android" ? "IRANSans_Normal" : null,
        flexDirection: "row",
        alignItems: 'center',
        fontSize: 13,
        paddingVertical: Platform.OS == "ios" ? 16 : 0,
    },
    inputIcon: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 15
    },
    rowIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderLeftWidth: 1,
        borderLeftColor: "#fff",
        minWidth: 60
    }
})
