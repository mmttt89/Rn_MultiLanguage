import React, { useContext } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomIcon from '../components/Custom-Icon';
import CustomText from '../components/Custom-Text';
import Strings from "../constants/Strings"

import HomeScreen from "../screens/home/Home"
import MyAppScreen from "../screens/myApp/MyApp"
import ShopScreen from '../screens/shop/Shop';
import Categories from '../screens/categories/Categories';
import LanguageContext from "../services/Language_Context"

const Tab = createBottomTabNavigator();

const TabStack = ({ props }) => {
    let context = useContext(LanguageContext);
    console.log(context)

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
                    else if (route.name === Strings.SHOP) {
                        iconName = 'shopping-cart'
                        iconType = "FontAwesome5"
                    }
                    else if (route.name === Strings.CATEGORIES) {
                        iconName = 'shapes'
                        iconType = "FontAwesome5"
                    }
                    else if (route.name === Strings.HOME) {
                        iconName = 'home'
                        iconType = "Ionicons"
                    }

                    return <CustomIcon type={iconType} name={iconName} color={color} style={{ fontSize: 22 }} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: "red",
                inactiveTintColor: 'gray',
                labelStyle: {
                    fontSize: 14,
                    fontFamily: "IRANSans_Normal"
                },
                style: {
                    minHeight: 68,
                    paddingBottom: 7,
                    paddingTop: 5
                },
            }}
        >
            <Tab.Screen name={Strings.MY_APP} component={MyAppScreen} />
            <Tab.Screen name={Strings.SHOP} component={ShopScreen} />
            <Tab.Screen name={Strings.CATEGORIES} component={Categories} />
            <Tab.Screen name={Strings.HOME} component={HomeScreen} />
        </Tab.Navigator>
    )
}

export default TabStack;