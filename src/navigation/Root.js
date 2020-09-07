import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import TabStack from "./TabStack";
import LanguageContextProvider from "../services/Language_Context";

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <TabStack />
        </NavigationContainer>
    );
}


export default RootNavigation;