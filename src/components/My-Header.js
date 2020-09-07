import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from "../constants/Colors"
import Consts from '../constants/Consts'

const MyHeader = () => {
    return (
        <View style={styles.container}>
            <Text></Text>
        </View>
    )
}

export default MyHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.main,
        height: 65 + Consts.StatusBar_Height
    },
})
