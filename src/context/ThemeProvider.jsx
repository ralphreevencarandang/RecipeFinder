import { createContext } from "react";
import { useState, useEffect } from "react";
export const ThemeContext = createContext();

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((prev) => (prev == "dark" ? "light" : "dark"));
    };


    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const values = {
        theme,
        toggleTheme,
    };
    return (
        <ThemeContext.Provider value={values}>
        {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
