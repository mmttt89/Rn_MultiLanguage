import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import MyText from '../../components/My-Text'
import Strings from '../../constants/Strings'
import MyHeader from '../../components/My-Header'
import MyTextInput from '../../components/My-Input'
import MyButton from '../../components/My-Button'
import MyIcon from '../../components/My-Icon'
import Colors from '../../constants/Colors'
import Consts from "../../constants/Consts"
import logo from "../../assets/images/logo.png"

export default class MyAppScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <MyHeader /> */}

                <View style={[styles.centerize, { paddingTop: 80 }]}>
                    <Image source={logo} style={{ width: 180, height: 180 }} />
                </View>
                <View style={styles.form}>
                    <MyTextInput
                        style={{ marginVertical: 5 }}
                        placeholder={Strings.UserName}
                    />
                    <MyTextInput
                        style={{ marginVertical: 5 }}
                        placeholder={Strings.Password}
                        inputIcon={true}
                        inputIconComponent={<MyIcon type={"Ionicons"} name={"eye"} />}
                    />
                    <MyText style={{ fontSize: 14, color: Colors.link, paddingTop: 5 }}>
                        {Strings.ForgetPassword}
                    </MyText>
                    <View style={[{ marginTop: 50, marginBottom: 10 }, styles.centerize]}>
                        <MyButton
                            label={Strings.Enter_to_app}
                            style={{}}
                            labelStyle={{ color: "#fff" }}
                        />
                        <MyText style={{ color: Colors.main, fontSize: 14, paddingTop: 30 }}>
                            {Strings.Make_New_Account}
                        </MyText>
                    </View>
                    <View style={styles.divider} />
                    <View style={[styles.terms, styles.centerize]}>
                        <MyText style={{ fontSize: 13, textAlign: "center" }}>
                            {Strings.Terms}
                        </MyText>
                    </View>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
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
        paddingVertical: 50,
    },
    divider: {
        height: 0.8,
        width: "100%",
        backgroundColor: "#d4d4d4",
        marginVertical: 15
    },
    terms: {
        paddingTop: 20
    },
})
