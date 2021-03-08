import React, { useContext, useState } from 'react'
import { Platform, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import EStyleSheet from "react-native-extended-stylesheet";
import MyText from '../../components/My-Text'
import MyIcon from '../../components/My-Icon'
import MyTouch from '../../components/My-Touch'
import Strings from '../../constants/Strings'
import Colors from '../../constants/Colors';

const Row = ({ title, description, firstIcon, endIcon, ...props }) => {
   return (
      <MyTouch
         style={
            {
               height: 70,
               width: "100%",
               flexDirection: Strings.Dir == "rtl" ? "row" : "row-reverse",
               alignItems: 'center',
               justifyContent: "space-between",
               paddingHorizontal: wp("5%")
            }
         }
         {...props}
      >
         <View style={styles.iconWrapper}>
            {endIcon ??
               <MyIcon type={"Entypo"} name={Strings.Dir == "rtl" ? "chevron-left" : "chevron-right"} style={{ color: Colors.main }} />
            }
         </View>
         <View style={
            {
               flexDirection: Strings.Dir == "rtl" ? "row" : "row-reverse",
               justifyContent: "space-between",
               alignItems: "center"
            }
         }>
            <View style={{ marginTop: 3, width: wp("64%") }}>
               <MyText bold style={
                  {
                     marginRight: Strings.Dir == "rtl" ? wp("3%") : 0,
                     marginLeft: Strings.Dir == "rtl" ? 0 : wp("3%"),
                  }
               }>
                  {title}
               </MyText>
               {description ?
                  <MyText numberOfLines={2} ellipsizeMode='tail' style={
                     {
                        marginTop: 5,
                        marginRight: Strings.Dir == "rtl" ? wp("3%") : 0,
                        marginLeft: Strings.Dir == "rtl" ? 0 : wp("3%"),
                        fontSize: 11,
                        color: Colors.gray
                     }
                  }>
                     {description ?? null}
                  </MyText> : null}
            </View>
            <View style={styles.iconWrapper}>
               <View style={[styles.firstIconStyle, { backgroundColor: Colors.main }]}>
                  {firstIcon}
               </View>
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
   iconWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      width: wp("13%")
   },
   firstIconStyle: {
      padding: 7,
      borderRadius: wp("50%"),
      alignItems: 'center',
      justifyContent: 'center'
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

