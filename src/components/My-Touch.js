import React from "react";
import { TouchableOpacity } from "react-native";

const MyTouch = props =>
    <TouchableOpacity
        activeOpacity={0.9}
        {...props}>
        {props.children}
    </TouchableOpacity>

export default MyTouch;