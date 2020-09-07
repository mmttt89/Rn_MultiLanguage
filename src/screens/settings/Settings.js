import React, { Component, useContext } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import MyText from '../../components/My-Text'
import MyHeader from '../../components/My-Header'
import Strings from '../../constants/Strings'
import { LanguageContext } from '../../services/Language_Context'

export default class SettingsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MyHeader label={Strings.SETTINGS} center />
                <ChangeLanguageComponentQA />
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

const ChangeLanguageComponentQA = () => {
    const { changeLanguage } = useContext(LanguageContext)
    return (
        <View style={{}}>
            <View style={{
                borderBottomWidth: 0.8,
                height: 60,
                width: "100%",
                flexDirection: Strings.Dir == "rtl" ? "row" : "row-reverse",
                alignItems: 'center',
                justifyContent: "space-between",
                paddingHorizontal: 20
            }}>
                <View>
                    <MyText>
                        {Strings[`${Strings.getLanguage().toUpperCase()}`]}
                    </MyText>
                </View>
                <MyText>
                    {Strings.LANGUAGE}
                </MyText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
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
