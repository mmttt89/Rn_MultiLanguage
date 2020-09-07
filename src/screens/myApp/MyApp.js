import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CustomText from '../../components/Custom-Text'

export default class MyAppScreen extends Component {
    render() {
        return (
            <View>
                <CustomText>
                    MyAppScreen screen
              </CustomText>
            </View>
        )
    }
}
