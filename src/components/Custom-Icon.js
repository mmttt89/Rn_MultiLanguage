import React, { Component } from 'react'
import { Icon } from "native-base"

const CustomIcon = ({ color, style, ...props }) => {
    return (
        <Icon style={[{ fontSize: 20, color }, style]} {...props} />
    )
}

export default CustomIcon
