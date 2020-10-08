import React, { Component } from 'react'
import { View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import EStyleSheet from "react-native-extended-stylesheet";
import MyText from '../../components/My-Text'
import MyHeader from '../../components/My-Header'
import Strings from '../../constants/Strings'
import LanguageModal from "./LanguageModal"
import DarkMode from './DarkMode';

export default class SettingsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MyHeader label={Strings.SETTINGS} center />                
                    <DarkMode/>
                <>
                    <SectionHeader title={Strings.REGIONAL} />
                    <LanguageModal />
                </>
            </View>
        )
    }
}

const SectionHeader = ({ title }) => {
    return (
        <View style={{
            justifyContent: 'center',
            height: hp("5%"),
            backgroundColor: "#e3e3e3",
            paddingHorizontal: wp("5%")
        }}>
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
