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
        const { darkMode } = this.state;
        const theme = {
            bg: darkMode ? "#282832" : "#f4f4f4",
            overlay: darkMode ? "#a3a3a3" : "#e3e3e3",
            text: darkMode ? "#fff" : "#313131",
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
