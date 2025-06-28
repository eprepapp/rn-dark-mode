import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from './ThemeProvider';

const MainScreen = () => {
    const theme = useContext(ThemeContext);

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Text style={{ color: theme.text }}>Hello, Dark Mode!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MainScreen;
