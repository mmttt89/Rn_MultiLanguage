import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Keyboard } from 'react-native'
import Colors from "../constants/Colors"
import Consts from '../constants/Consts'
import MyTouch from "./My-Touch"

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
                style={[styles.container, isFocused ? styles.isFocused : null]}>
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
                    style={[styles.input, textInputStyle]}
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

const styles = StyleSheet.create({
    container: {
        marginTop: 4,
        borderBottomColor: Colors.bg,
        borderBottomWidth: 3,
        flexDirection: "row",
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
        fontFamily: "IRANSans_Normal",
        
        flexDirection: "row",
        alignItems: 'center'
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
