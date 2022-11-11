import React from "react";

export const colorModeContext = React.createContext({
    mode: "",
    setMode: () => { alert("Você precisa me configurar primeiro") },
    toggleMode: () => { alert("Você precisa me configurar primeiro") }
});

export default function ColorModeProvider(props) {
    const [mode, setMode] = React.useState(props.initialMode)

    function toggleMode() {
        if (mode === "dark") {
            setMode("light")
        } else {
            setMode("dark")
        }
    }

    return (
        <colorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}>
            {props.children}
        </colorModeContext.Provider>
    )
}