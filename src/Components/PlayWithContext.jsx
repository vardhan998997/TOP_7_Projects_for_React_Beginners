import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    
    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            <div className={darkMode ? "bg-gray-900 text-white min-h-screen p-5" : "bg-white text-black min-h-screen p-5"}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

const ThemeToggle = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    
    return (
        <button onClick={() => setDarkMode(!darkMode)} className="bg-blue-500 text-white px-4 py-2 rounded">
            {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
    );
};

const PlayApp = () => (
    <ThemeProvider>
        <h1 className="text-2xl font-bold">Theme Toggle</h1>
        <ThemeToggle />
    </ThemeProvider>
);

export default PlayApp;
