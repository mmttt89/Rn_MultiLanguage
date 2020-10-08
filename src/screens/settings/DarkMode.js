import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import EStyleSheet from "react-native-extended-stylesheet";
import MyIcon from '../../components/My-Icon'
import Strings from '../../constants/Strings'
import Row from "./Row"

const DarkMode = () => {
    return (
        <>
            <Row
                title={Strings.DarkMode}
                endIcon={<MyIcon type={"Entypo"} name={Strings.Dir == "rtl" ? "chevron-left" : "chevron-right"} style={{ color: "#586f87" }} />}
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

