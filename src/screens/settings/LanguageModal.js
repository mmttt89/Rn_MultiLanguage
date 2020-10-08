import React, { useContext, useState } from 'react'
import { View } from 'react-native'
import Modal from 'react-native-modal';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import EStyleSheet from "react-native-extended-stylesheet";
import MyText from '../../components/My-Text'
import MyIcon from '../../components/My-Icon'
import MyTouch from '../../components/My-Touch'
import Strings from '../../constants/Strings'
import { LanguageContext } from '../../services/Language_Context';
import { ScrollView } from 'react-native-gesture-handler';
import Row from "./Row"

const LanguageModal = () => {
    const { changeLanguage } = useContext(LanguageContext)
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
                    <View style={styles.modalContent}>
                        <MyText bold>{Strings.LANGUAGE}</MyText>
                        <ScrollView>
                            <Option title={Strings.FA} onPress={() => _changeLanguage("fa")} />
                            <Option title={Strings.EN} onPress={() => _changeLanguage("en")} last />
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </>
    )
}

const Option = ({ title, last, ...props }) => {
    return (
        <MyTouch style={{
            flexDirection: "row",
            alignItems: 'center',
            paddingVertical: 5,
            borderBottomWidth: last ? 0 : 0.6
        }}
            {...props}
        >
            <MyText>{title}</MyText>
        </MyTouch>
    )
}

export default LanguageModal

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

