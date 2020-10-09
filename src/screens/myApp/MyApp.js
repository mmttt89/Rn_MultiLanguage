import React, { Component, useContext } from 'react'
import { View, Image } from 'react-native'
import EStyleSheet from "react-native-extended-stylesheet"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import MyText from '../../components/My-Text'
import Strings from '../../constants/Strings'
import MyHeader from '../../components/My-Header'
import MyTextInput from '../../components/My-Input'
import MyButton from '../../components/My-Button'
import MyIcon from '../../components/My-Icon'
import Colors from '../../constants/Colors'
import Consts from "../../constants/Consts"
import logo from "../../assets/images/logo.png"
import { DarkModeContext } from '@Services/DarkMode_Context';

const MyAppScreen = () => {
    const { theme } = useContext(DarkModeContext)
    return (
        <View style={[styles.container, { backgroundColor: theme.bg }]}>

            <View style={[styles.centerize, { paddingTop: hp("10%") }]}>
                <Image source={logo} style={{ width: wp("40%"), height: wp("40%") }} />
            </View>
            <View style={styles.form}>
                <MyTextInput
                    style={{ marginVertical: 3 }}
                    placeholder={Strings.UserName}
                />
                <MyTextInput
                    style={{ marginVertical: 3 }}
                    placeholder={Strings.Password}
                    inputIcon={true}
                    inputIconComponent={<MyIcon type={"Ionicons"} name={"eye"} />}
                />
                <MyText style={{ color: Colors.link, paddingTop: 5 }}>
                    {Strings.ForgetPassword}
                </MyText>
                <View style={[{ marginTop: hp("3%"), marginBottom: hp("1%") }, styles.centerize]}>
                    <MyButton
                        label={Strings.Enter_to_app}
                        style={{}}
                        labelStyle={styles.buttonLabel}
                    />
                    <MyText style={{ color: Colors.main, paddingTop: hp("3%") }}>
                        {Strings.Make_New_Account}
                    </MyText>
                </View>
                <View style={styles.divider} />
                <View style={[styles.terms, styles.centerize]}>
                    <MyText style={styles.termsStrings}>
                        {Strings.Terms}
                    </MyText>
                </View>

            </View>

        </View>
    )
}

export default MyAppScreen

const styles = EStyleSheet.create({
    centerize: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: Colors.bg
    },
    form: {
        paddingHorizontal: 20,
        paddingVertical: hp("5%"),
    },
    divider: {
        height: 0.8,
        width: "100%",
        backgroundColor: "#d4d4d4",
        marginVertical: hp("1.5%")
    },
    buttonLabel: {
        color: "#fff",
        fontSize: "10rem"
    },
    terms: {
        paddingTop: hp("2%")
    },
    termsStrings: {
        fontSize: "8.5rem",
        textAlign: "center"
    },
})
