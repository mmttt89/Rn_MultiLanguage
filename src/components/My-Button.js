import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MyText from './My-Text'
import Colors from '../constants/Colors'

const MyButton = ({ label, style, labelStyle, props }) => {
    return (
        <View style={[styles.container, styles.centerize, style]} {...props}>
            <MyText style={labelStyle}>{label}</MyText>
        </View>
    )
}

export default MyButton

const styles = StyleSheet.create({
    centerize: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        borderRadius: 10,
        backgroundColor: Colors.main,
        height: 50,
        width: "100%"
    },
})
