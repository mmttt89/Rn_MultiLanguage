import React, { Component, useContext } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import MyText from '../../components/My-Text'
import Strings from '../../constants/Strings'
import { LanguageContext } from '../../services/Language_Context'

export default class Home extends Component {
    render() {
        return (
            <View>
                <ChangeLanguageComponent />
            </View>
        )
    }
}

const ChangeLanguageComponent = () => {
    const { changeLanguage } = useContext(LanguageContext)
    return (
        <View style={styles.langContainer}>
            <View style={{ paddingBottom: 10 }}>
                <MyText>
                    {Strings.LANGUAGE_SELECT}
                </MyText>
            </View>
            <TouchableOpacity
                onPress={() => changeLanguage("en")}
                style={styles.option}>
                <MyText>
                    {Strings.EN}
                </MyText>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => changeLanguage("fa")}
                style={styles.option}>
                <MyText>
                    {Strings.FA}
                </MyText>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    langContainer: {
        marginHorizontal: 100,
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: "#f8f8f8",
        borderRadius: 8
    },
    option: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 8,
        marginVertical: 3
    },
})
