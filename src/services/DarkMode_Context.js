import React, { Component, createContext } from 'react';
export const DarkModeContext = createContext();

export default class DarkModeContextProvider extends Component {
    state = {
        darkMode: false
    }

    _toggleDarkMode = darkMode => {
        this.setState({ darkMode })
    }

    render() {
        let theme = {
            bg: this.state.darkMode ? "#4a4a4a" : "#f4f4f4",
            overlay: this.state.darkMode ? "#a3a3a3" : "#e3e3e3",
            text: this.state.darkMode ? "#fff" : "#313131",

        }
        return (
            <DarkModeContext.Provider value={{
                darkMode: this.state.darkMode,
                theme,
                toggleDarkMode: this._toggleDarkMode
            }}>
                {
                    this.props.children
                }
            </DarkModeContext.Provider>
        )
    }
}
