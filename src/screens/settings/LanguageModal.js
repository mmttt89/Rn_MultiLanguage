import React, { useContext, useState } from 'react'
import { View } from 'react-native'
import Modal from 'react-native-modal';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import EStyleSheet from "react-native-extended-stylesheet";
import MyText from '../../components/My-Text'
import MyIcon from '../../components/My-Icon'
import MyTouch from '../../components/My-Touch'
import Strings from '../../constants/Strings'
import { LanguageContext } from '@Services/Language_Context';
import { DarkModeContext } from '@Services/DarkMode_Context';
import { ScrollView } from 'react-native-gesture-handler';
import Row from "./Row"
import Colors from '../../constants/Colors';

const LanguageModal = () => {
   const { changeLanguage, lang } = useContext(LanguageContext)
   const { theme } = useContext(DarkModeContext)
   const [isModalVisible, setModalVisible] = useState(false);

   const _changeLanguage = lang => {
      setModalVisible(false);
      changeLanguage(lang)
   }

   return (
      <>
         <Row
            title={Strings.LANGUAGE}
            description={Strings.LanguageOptionDescription}
            onPress={() => setModalVisible(true)}
            endIcon={<MyIcon type={"Entypo"} name={Strings.Dir == "rtl" ? "chevron-left" : "chevron-right"} style={{ color: theme.text ?? "#586f87" }} />}
            firstIcon={<MyIcon type={"MaterialIcons"} name={"language"} style={{ color: "#fff" }} />}
         />
         <Modal
            onBackdropPress={() => setModalVisible(false)}
            onBackButtonPress={() => setModalVisible(false)}
            isVisible={isModalVisible}
            style={{
               flex: 1,
               margin: 0,
               justifyContent: 'flex-end',
               backgroundColor: "rgba(0,0,0,0)",
               backgroundColor: "transparent"
            }}
         >
            <View style={[styles.modalContent, { backgroundColor: theme.bg }]}>
               <View style={styles.modalContentHeader}>
                  <MyText bold>{Strings.LANGUAGE}</MyText>
               </View>
               <ScrollView style={{ marginTop: 10 }}>
                  <Option setModalVisible={setModalVisible} value={"en"} title={"English"} />
                  <Option setModalVisible={setModalVisible} value={"fa"} title={"فارسی"} />
                  <Option setModalVisible={setModalVisible} value={"fr"} title={"Française"} />
                  <Option setModalVisible={setModalVisible} value={"ru"} title={"Pусский"} />
               </ScrollView>
            </View>
         </Modal>
      </>
   )
}

const Option = ({ title, value, setModalVisible, ...props }) => {
   const { changeLanguage, lang } = useContext(LanguageContext);

   const _changeLanguage = () => {
      setModalVisible(false);
      changeLanguage(value)
   }

   return (
      <>
         <MyTouch
            onPress={_changeLanguage}
            style={[styles.touchOption, {
               flexDirection: Strings.Dir == "rtl" ? "row-reverse" : "row",
            }]}
            {...props}
         >
            <View style={[styles.row, { marginTop: 4 }]}>
               <MyText style={value == lang ? styles.selectedOption : null} gray>{title}</MyText>
            </View>
         </MyTouch>
      </>
   )
}

export default LanguageModal

const styles = EStyleSheet.create({
   row: {
      flexDirection: "row"
   },
   centerize: {
      alignItems: 'center',
      justifyContent: 'center'
   },
   container: {
      flex: 1
   },
   modalContent: {
      backgroundColor: '#fff',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      paddingHorizontal: wp("5%"),
      paddingTop: 25,
      minHeight: wp("100%"),
   },
   modalContentHeader: {
      borderBottomWidth: 2,
      paddingBottom: hp("1%"),
      borderBottomColor: Colors.main
   },
   touchOption: {
      alignItems: 'center',
      paddingVertical: hp("1.2%"),
   },
   selectedOption: {
      color: Colors.inactive
   }
})

