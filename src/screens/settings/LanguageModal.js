import React, { useContext, useState } from 'react'
import { Image, View } from 'react-native'
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

const LanguageModal = () => {
    const { changeLanguage } = useContext(LanguageContext)
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
                onPress={() => setModalVisible(true)}
                endIcon={<MyIcon type={"Entypo"} name={Strings.Dir == "rtl" ? "chevron-left" : "chevron-right"} style={{ color: "#586f87" }} />}
                firstIcon={<MyIcon type={"MaterialIcons"} name={"language"} style={{ color: "#fff" }} />}
            />
            <Modal
                onBackdropPress={() => setModalVisible(false)}
                isVisible={isModalVisible}
            >
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={[styles.modalContent, { backgroundColor: theme.bg }]}>
                        <MyText bold style={{ borderBottomWidth: 2, paddingBottom: hp("1%"), borderBottomColor: "#eb8c34" }}>{Strings.LANGUAGE}</MyText>
                        <ScrollView contentContainerStyle={{ justifyContent: 'center' }}>
                            <Option title={"English"} onPress={() => _changeLanguage("en")} />
                            <Option title={"فارسی"} onPress={() => _changeLanguage("fa")} />
                            <Option title={"Française"} onPress={() => _changeLanguage("fr")} />
                            <Option title={"Pусский"} onPress={() => _changeLanguage("ru")} />
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </>
    )
}

const Option = ({ title, enTitle, last, flag, ...props }) => {
    return (
        <>
            <MyTouch style={{
                flexDirection: Strings.Dir == "rtl" ? "row-reverse" : "row",
                alignItems: 'center',
                paddingVertical: hp("0.9%"),
            }}
                {...props}
            >
                <View style={[styles.row, { marginTop: 4 }]}>
                    <MyText >{title}</MyText>
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
        backgroundColor: "#fff",
        paddingHorizontal: wp("3%"),
        paddingTop: hp("3%"),
        paddingBottom: hp("1%"),
        marginHorizontal: wp("25%"),
        borderRadius: 10,
        maxHeight: hp("60%"),
    },
})

