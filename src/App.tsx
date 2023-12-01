// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Selection from './components/Selection';
import Auth from './containers/Login/Auth';
import Dashboard from './components/Dashboard';
import ContractPage from './components/ContractPage';
import ResponsiveDrawer from './components/SidePanel'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const App: React.FC = () => {
    const [themeMode, setThemeMode] = React.useState('light'); // State to toggle theme

    // Function to toggle theme mode
    const toggleTheme = (theme: string) => {
        setThemeMode(theme === 'light' ? 'dark' : 'light');
    };


    const darkTheme = createTheme({
        palette: {
            mode: 'dark', // This sets the color mode of the theme
            background: {
                default: '#2c2929', // Background color for the dark mode
                paper: '#2c2929', // Background color for components using paper
            },
            text: {
                primary: '#dadada', // Primary font color for the dark mode
                secondary: '#b9b9b9', // Secondary font color for the dark mode
            },
        },
    });
    const lightTheme = createTheme({
        palette: {
            mode: 'light',
            background: {
                default: '#ffffff', // Light mode background color
                paper: '#ffffff', // Light mode background color for paper
            },
            text: {
                primary: '#000000', // Primary font color for light mode
                secondary: '#555555', // Secondary font color for light mode
            },
        },
    });


    return (
        <Router>
            <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
                <ResponsiveDrawer onThemeToggle={toggleTheme}></ResponsiveDrawer>
            </ThemeProvider>
        </Router>

    );
};

export default App;
