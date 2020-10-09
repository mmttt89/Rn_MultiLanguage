import React, { Component, useContext } from 'react'
import { View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import EStyleSheet from "react-native-extended-stylesheet";
import MyText from '../../components/My-Text'
import MyHeader from '../../components/My-Header'
import Strings from '../../constants/Strings'
import LanguageModal from "./LanguageModal"
import DarkMode from './DarkMode';
import { DarkModeContext } from '@Services/DarkMode_Context';

const SettingsScreen = () => {
    const { theme } = useContext(DarkModeContext)
    console.log("THEME", theme)
    return (
        <View style={[styles.container, { backgroundColor: theme.bg }]}>
            <MyHeader label={Strings.SETTINGS} center />
            <DarkMode />
            <>
                <SectionHeader title={Strings.REGIONAL} style={{ backgroundColor: theme.overlay }} />
                <LanguageModal />
            </>
        </View>
    )
}

export default SettingsScreen;

const SectionHeader = ({ title, style }) => {
    return (
        <View style={[{
            justifyContent: 'center',
            height: hp("5%"),
            paddingHorizontal: wp("5%")
        }, style]}>
            <MyText bold>
                {title}
            </MyText>
        </View>
    )
}

const styles = EStyleSheet.create({
    centerize: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1
    },
})
