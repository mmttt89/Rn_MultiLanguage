import React, { Component, createContext } from 'react';
import Strings from "../constants/Strings"

export const LanguageContext = createContext();

export default class LanguageContextProvider extends Component {
    state = {
        lang: "en"
    }

    UNSAFE_componentWillMount(){
        Strings.setLanguage(this.state.lang);
    }    

    _changeLanguage = (lang) => {
        Strings.setLanguage(lang);
        // RNRestart.Restart()
        this.setState({ lang })
    }

    render() {
        return (
            <LanguageContext.Provider value={{
                lang: this.state.lang,
                changeLanguage: this._changeLanguage
            }}>
                {
                    this.props.children
                }
            </LanguageContext.Provider>
        )
    }
}
