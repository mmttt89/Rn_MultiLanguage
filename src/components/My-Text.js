import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class MyText extends Component {
    render() {
        let { large, small, style } = this.props
        let fontSize = 16;

        if (large) fontSize = 20
        if (small) fontSize = 12

        let fontFamily = "IRANSans_Normal"

        return (
            <Text {...this.props} style={[{ fontSize, fontFamily }, style]}>
                {this.props.children}
            </Text>

        )
    }
}

