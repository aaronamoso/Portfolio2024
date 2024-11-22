import React, { createContext, useContext, useEffect, useState } from "react";

// 1. Create a "Context" to store and share the theme (light or dark) across the app
const ThemeContext = createContext();

// 2. A custom hook that makes it easier for other parts of the app to get the theme
export const useTheme = () => {
    return useContext(ThemeContext);  // This gives access to the current theme
};

// 3. This component provides the theme and a way to change it (toggleTheme) to the rest of the app
export const ThemeProvider = ({ children }) => {
    // 4. Set up state to track the current theme, defaulting to 'light' if there's no saved theme
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';  // Check if there's a saved theme, else use 'light'
    });

    // 5. Update the page's theme whenever the theme state changes
    useEffect(() => {
        // 6. Change the theme on the website (by adding a 'data-theme' to the body tag)
        document.body.setAttribute('data-theme', theme);
        // 7. Save the chosen theme in localStorage so the choice is remembered later
        localStorage.setItem('theme', theme);
    }, [theme]);  // This effect runs whenever 'theme' changes

    // 8. Function to switch between light and dark themes
    const toggleTheme = () => {
    
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // 9. Provide the current theme and the toggle function to the rest of the app
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}  {/* This is the part of the app that will use the theme */}
        </ThemeContext.Provider>
    );
};
