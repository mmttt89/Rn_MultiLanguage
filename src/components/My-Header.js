import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from "../constants/Colors"
import Consts from '../constants/Consts'
import MyText from './My-Text'

const MyHeader = ({ label, center }) => {
    return (
        <View style={styles.container}>
            <View style={styles.statusBar} />
            <View style={[{ height: 62 }, center ? styles.centerize : null]}>
                <MyText style={{ color: "#fff" }}>
                    {label}
                </MyText>
            </View>
        </View>
    )
}

export default MyHeader

const styles = StyleSheet.create({
    centerize: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        backgroundColor: Colors.main
    },
    statusBar: {
        height: Consts.StatusBar_Height,
        width: "100%"
    },
})
