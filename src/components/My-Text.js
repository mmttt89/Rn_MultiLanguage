import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class MyText extends Component {
    render() {
        let { large, small } = this.props
        let fontSize = 16;

        if (large) fontSize = 20
        if (small) fontSize = 12

        let fontFamily = "IRANSans_Normal"
        
        return (
            <Text style={{ fontSize, fontFamily }}>
                {this.props.children}
            </Text>

        )
    }
}

