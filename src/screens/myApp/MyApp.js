import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MyText from '../../components/My-Text'
import Strings from '../../constants/Strings'
import MyHeader from '../../components/My-Header'

export default class MyAppScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <MyHeader />
                <MyText>
                    {Strings.WELCOME_STRING}
                </MyText>
            </View>
        )
    }
}
