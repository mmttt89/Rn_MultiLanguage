import React, { Component, useContext, useState } from 'react'
import { Text, View, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import EStyleSheet from "react-native-extended-stylesheet";
import barcode from "@assets/images/barcode.png";
import { MyText, MyHeader } from '@components'
import Colors from "@conts/Colors"
import MockData from "./mock.json"
import { DarkModeContext } from '@Services/DarkMode_Context';

const Categories = () => {

    const { theme } = useContext(DarkModeContext)
    return (
        <>
            <MyHeader label={"Coupons"} center />
            <View style={[styles.container, { backgroundColor: theme.bg }]}>
                <FlatList
                    data={MockData}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item, index }) =>
                        <View style={{
                            height: hp("20%"),
                            width: "100%",
                            flexDirection: "row",
                            marginVertical: 5
                        }}>
                            <View style={[{ width: wp("5%") }, styles.centerize]}>
                                <View style={[styles.dot, { left: 5.5, backgroundColor: theme.bg }]} />
                            </View>
                            <LinearGradient
                                start={{ x: 0.0, y: 0.5 }} end={{ x: 1, y: 1.0 }}
                                locations={[0, 1]}
                                colors={item?.colors ?? ['#904e95', '#e96443']}
                                style={styles.innerCard}>
                                <View style={styles.discountPart}>
                                    <MyText style={styles.discountPartText} bold>{"discount"}</MyText>
                                </View>
                                <View style={{
                                    flex: 0.8,
                                    flexDirection: "column",
                                    paddingLeft: wp("17%"),
                                    paddingTop: hp("0.5%")
                                }}>
                                    <View style={{ flex: 1 }}>
                                        <MyText style={{ fontSize: 48, color: "#fff", fontFamily: "sanserif", fontWeight: "bold" }}>
                                            {`${item?.percentage}%`}
                                        </MyText>
                                    </View>
                                    <View style={{ flex: 1, marginLeft: -10 }}>
                                        <Image
                                            source={barcode}
                                            style={{ width: "100%", height: hp("5%") }}
                                            resizeMode={"cover"}
                                        />
                                    </View>
                                </View>
                                <View style={{ flex: 1, flexDirection: "column" }}>
                                    <View style={{
                                        flex: 0.8,
                                        paddingHorizontal: wp("3%"),
                                        paddingTop: hp("2%")
                                    }}>
                                        <MyText style={styles.contentText} bold>{item?.content}</MyText>
                                        {
                                            item?.isTerms ?
                                                <MyText style={styles.contentText} bold>{"Terms and conditions applyed"}</MyText> : null
                                        }
                                    </View>
                                    <View style={{
                                        flex: 0.2,
                                        flexDirection: "row",
                                        alignItems: 'center',
                                        justifyContent: "space-evenly"
                                    }}>
                                        <MyText bold style={styles.actionBtn}>VIEW</MyText>
                                        <MyText bold style={styles.actionBtn}>REDEEM</MyText>
                                    </View>
                                </View>
                            </LinearGradient>
                            <View style={[{ width: wp("5%") }, styles.centerize]}>
                                <View style={[styles.dot, { right: 5.5, backgroundColor: theme.bg }]} />
                            </View>
                        </View>
                    }
                />
            </View>
        </>
    )
}
export default Categories

const styles = EStyleSheet.create({
    centerize: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
    },
    dot: {
        width: 30,
        height: 30,
        borderRadius: 15,
        position: 'absolute',
        zIndex: 1
    },
    innerCard: {
        flexDirection: "row",
        width: wp("90%"),
        backgroundColor: "teal",
        borderRadius: 10
    },
    discountPart: {
        position: "absolute",
        top: 0, left: 0, bottom: 0,
        width: wp("12%"),
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: wp("5%"),
        backgroundColor: "burlywood",
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },
    discountPartText: {
        width: hp("20%"),
        textAlign: 'center',
        color: Colors.bg,
        textTransform: 'uppercase',
        transform: [{ rotate: '-90deg' }],
        letterSpacing: 4
    },
    contentText: {
        color: Colors.bg,
        fontSize: "9rem"
    },
    actionBtn: {
        fontSize: "8rem"
    },
})

