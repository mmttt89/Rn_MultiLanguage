import React, { useState, useContext } from 'react'
import { Switch } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import EStyleSheet from "react-native-extended-stylesheet";
import MyIcon from '../../components/My-Icon'
import Strings from '../../constants/Strings'
import { DarkModeContext } from '../../services/DarkMode_Context';
import Row from "./Row"

const DarkMode = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
    const [isEnabled, setIsEnabled] = useState(darkMode);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        isEnabled ? toggleDarkMode(false) : toggleDarkMode(true)
    }

    return (
        <>
            <Row
                title={Strings.DarkMode}
                endIcon={<Switch
                    trackColor={{ false: "#767577", true: "#dbdbdb" }}
                    thumbColor={isEnabled ? "red" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />}
                firstIcon={<MyIcon type={"Ionicons"} name={"moon"} style={{ color: "#fff" }} />}
            />
        </>
    )
}

export default DarkMode

const styles = EStyleSheet.create({
    centerize: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1
    },
    modalContent: {
        backgroundColor: "#fff",
        paddingHorizontal: wp("3%"),
        paddingTop: hp("3%"),
        paddingBottom: hp("1%"),
        marginHorizontal: 40,
        borderRadius: 10,
        maxHeight: hp("60%")
    },
})

