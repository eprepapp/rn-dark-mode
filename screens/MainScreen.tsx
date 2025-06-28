// screens/MainScreen.tsx
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { ThemeContext } from '../ThemeProvider';

const MainScreen: React.FC = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        throw new Error('ThemeContext must be used within a ThemeProvider');
    }

    const { theme, toggleTheme } = themeContext;

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Text style={[styles.text, { color: theme.text }]}>
                Hello, Dark Mode!
            </Text>
            <Button title="Toggle Theme" onPress={toggleTheme} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
    },
});

export default MainScreen;
