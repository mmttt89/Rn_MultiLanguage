import { StatusBar, Dimensions } from "react-native";

let StatusBar_Height = StatusBar.currentHeight;
const { width, height } = Dimensions.get("window");

const w = width
const h = height

export default {
    StatusBar_Height,
    w, h,    
}