import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import Colors from "../constants/Colors"
import Consts from '../constants/Consts'
import MyText from './My-Text'
import { DarkModeContext } from '@Services/DarkMode_Context';

const MyHeader = ({ label, center }) => {
    const { theme } = useContext(DarkModeContext);
    return (
        <View style={[styles.container, { backgroundColor: theme.bg }]}>
            <View style={styles.statusBar} />
            <View style={[{ height: 62 }, center ? styles.centerize : null]}>
                <MyText>
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
        borderBottomWidth: 1,
        borderBottomColor: Colors.inactive
    },
    statusBar: {
        height: Consts.StatusBar_Height,
        width: "100%"
    },
})
