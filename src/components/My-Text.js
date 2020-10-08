import React, { Component } from 'react'
import { Text, View } from 'react-native'
import EStyleSheet from "react-native-extended-stylesheet"

export default class MyText extends Component {
    render() {
        let { bold, style } = this.props
        let fontFamily = "IRANSans_Normal";
        if (bold) {
            fontFamily = "IRANSans_Bold";
        }

        return (
            <Text {...this.props} style={[styles.text, { fontFamily }, style]}>
                {this.props.children}
            </Text>
        )
    }
}

const styles = EStyleSheet.create({
    text: {
        fontSize: "10rem"
    },
})

