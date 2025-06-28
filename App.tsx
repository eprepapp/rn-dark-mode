// App.tsx
import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import MainScreen from './screens/MainScreen';

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <MainScreen />
        </ThemeProvider>
    );
};

export default App;
