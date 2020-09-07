import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class CustomText extends Component {
    render() {
        let { large, small } = this.props
        let fontSize = 16;

        if (large) fontSize = 20
        if (small) fontSize = 12
        
        return (
            <Text style={{ fontSize }}>
                {this.props.children}
            </Text>

        )
    }
}

