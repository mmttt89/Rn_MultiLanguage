import React, { useContext, useState } from 'react'
import { View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import EStyleSheet from "react-native-extended-stylesheet";
import MyText from '../../components/My-Text'
import MyIcon from '../../components/My-Icon'
import MyTouch from '../../components/My-Touch'
import Strings from '../../constants/Strings'

const Row = ({ title, firstIcon, endIcon, ...props }) => {
    return (
        <MyTouch
            style={
                {
                    height: 60,
                    width: "100%",
                    flexDirection: Strings.Dir == "rtl" ? "row" : "row-reverse",
                    alignItems: 'center',
                    justifyContent: "space-between",
                    paddingHorizontal: wp("5%")
                }
            }
            {...props}
        >
            <View >
                {endIcon ??
                    <MyIcon type={"Entypo"} name={Strings.Dir == "rtl" ? "chevron-left" : "chevron-right"} style={{ color: "#586f87" }} />
                }
            </View>
            <View style={
                {
                    flexDirection: Strings.Dir == "rtl" ? "row" : "row-reverse",
                    justifyContent: "space-between",
                    alignItems: "center"
                }
            }>
                <MyText style={
                    {
                        marginTop: 3,
                        marginRight: Strings.Dir == "rtl" ? wp("7%") : 0,
                        marginLeft: Strings.Dir == "rtl" ? 0 : wp("7%"),
                    }
                }>
                    {title ?? null}
                </MyText>
                <View style={[styles.center, { backgroundColor: "#46639e", padding: 4, borderRadius: wp("50%") }]}>
                    {firstIcon}
                </View>
            </View>
        </MyTouch>
    )
}

export default Row

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

