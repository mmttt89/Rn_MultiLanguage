import React, { useContext } from 'react';
import EStyleSheet from "react-native-extended-stylesheet";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyIcon from '../components/My-Icon';
import Strings from "../constants/Strings"

import SettingsScreen from "../screens/settings"
import MyAppScreen from "../screens/myApp"
import Coupons from '../screens/coupons';

import { LanguageContext } from "../services/Language_Context";
import Colors from '../constants/Colors';

const Tab = createBottomTabNavigator();

const TabStack = ({ ...props }) => {
    let c = useContext(LanguageContext)

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let iconType;

                    if (route.name === Strings.MY_APP) {
                        iconName = 'person';
                        iconType = "Ionicons"
                    }                    
                    else if (route.name === Strings.COUPONS) {
                        iconName = 'cards'
                        iconType = "MaterialCommunityIcons"
                    }
                    else if (route.name === Strings.SETTINGS) {
                        iconName = 'settings'
                        iconType = "Ionicons"
                    }

                    return <MyIcon type={iconType} name={iconName} color={color} style={styles.tabIcon} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: Colors.main,
                inactiveTintColor: Colors.inactive,
                labelStyle: styles.tabsLabelStyle,
                style: {
                    height: 68,
                    paddingBottom: 7,
                    paddingTop: 5
                },
            }}
            initialRouteName={Strings.COUPONS}
        >
            <Tab.Screen name={Strings.MY_APP} component={MyAppScreen} />
            <Tab.Screen name={Strings.SETTINGS} component={SettingsScreen} />            
            <Tab.Screen name={Strings.COUPONS} component={Coupons} />
        </Tab.Navigator>
    )
}

export default TabStack;

const styles = EStyleSheet.create({
    tabIcon: {
        fontSize: "15rem"
    },
    tabsLabelStyle: {
        fontSize: "10rem",
        fontFamily: "IRANSans_Normal"
    },
})