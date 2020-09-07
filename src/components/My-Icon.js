import React, { Component } from 'react'
import { Icon } from "native-base"

const MyIcon = ({ color, style, ...props }) => {
    return (
        <Icon style={[{ fontSize: 20, color }, style]} {...props} />
    )
}

export default MyIcon
