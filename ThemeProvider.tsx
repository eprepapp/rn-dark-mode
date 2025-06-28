// ThemeProvider.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Appearance } from 'react-native';
import { LightTheme, DarkTheme } from './themes';

// Define the theme structure
interface Theme {
    background: string;
    text: string;
}

// Define the context value type
interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

// Create the ThemeContext
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Define the props for the provider
interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(
        Appearance.getColorScheme() === 'dark'
    );

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    const theme = isDarkMode ? DarkTheme : LightTheme;

    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            setIsDarkMode(colorScheme === 'dark');
        });

        return () => subscription.remove();
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
