import { useContext } from "react";
import { ThemeContext } from "./Theme";

function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div
            className={`min-h-screen flex flex-col items-center justify-center p-8 transition-colors duration-500 ${
                theme === "Light" ? "bg-white text-gray-900" : "bg-gray-900 text-white"
            }`}
        >
            <h1 className="text-4xl font-extrabold mb-8 drop-shadow-md">
                Current Theme: <span className="text-blue-500">{theme}</span>
            </h1>

            <button 
                onClick={toggleTheme}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
            >
                Change Theme
            </button>
        </div>
    );
}

export default Navbar;
