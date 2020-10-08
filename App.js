import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';
import RootNavigation from "./src/navigation/Root"
import LanguageContextProvider from "./src/services/Language_Context";
import EStyleSheet from 'react-native-extended-stylesheet';

let { height, width } = Dimensions.get('window');
EStyleSheet.build({
  $rem: width > 340 ? (width / 300) : (width / 340)
});

const App = () => {
  return (
    <>
      <LanguageContextProvider>
        <StatusBar barStyle="dark-content" translucent backgroundColor={"rgba(0,0,0,0.3)"} />
        <SafeAreaView style={{ flex: 1 }}>
          <RootNavigation />
        </SafeAreaView>
      </LanguageContextProvider>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
