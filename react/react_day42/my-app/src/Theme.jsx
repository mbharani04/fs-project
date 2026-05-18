import { createContext, useState } from "react";


export const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("Light");


    const toggleTheme = () => {
        setTheme(theme === "Light" ? "Dark" : "Light");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;