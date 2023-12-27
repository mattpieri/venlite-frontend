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

    const comic = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#bd0707',
            },
            secondary: {
                main: '#ffc510',
            },
            background: {
                default: '#4c69f6',
                paper: '#4c94f6',
            },
        },
        typography: {

            fontFamily: 'Bangers',

        },
    });

    const themeOptions = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#f9595f', // A pink-red shade similar to the buttons and highlights
            },
            secondary: {
                main: '#018864', // A teal shade, as seen in some UI elements
            },
            background: {
                default: '#d5d2cd', // A light background
                paper: '#f7f7f7', // Slightly off-white for paper elements
            },
            text: {
                primary: '#2c2929', // Dark gray for primary text
                secondary: '#6d6d6d', // Lighter gray for secondary text
            },
            info: {
                main: '#2196f3', // Blue for informational elements
            },
            error: {
                main: '#f44336', // Red for error states
            },
            warning: {
                main: '#ffc107', // Amber for warning messages
            },
            success: {
                main: '#4caf50', // Green for success states
            },
        },
        typography: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // The default font family
            h1: {
                fontFamily: '"Roboto Slab", "Times New Roman", serif', // A slab serif for headings
                fontWeight: 700,
            },
            h2: {
                fontFamily: '"LatinoType", "Roboto Slab", "Times New Roman", serif',
                fontWeight: 700,
            },
            h3: {
                fontFamily: '"Roboto Slab", "Times New Roman", serif',
                fontWeight: 700,
            },
            h4: {
                fontFamily: '"LatinoType", "Times New Roman", serif',
                fontWeight: 400,
                color:  '#3b3b3b' // A light background
            },
            h5: {
                fontFamily: '"LatinoType", "Times New Roman", serif',
                fontWeight: 400,
                color:  '#3b3b3b' // A light background
            },


            // ... and so on for h4, h5, h6, subtitle1, subtitle2, button, overline
            button: {
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                fontWeight: 500,
            },
            overline: {
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                textTransform: 'uppercase',
            },
        },
    });

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
        typography: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // The default font family
            h1: {
                fontFamily: '"Roboto Slab", "Times New Roman", serif', // A slab serif for headings
                fontWeight: 700,
            },
            h2: {
                fontFamily: '"LatinoType", "Roboto Slab", "Times New Roman", serif',
                fontWeight: 700,
            },
            h3: {
                fontFamily: '"Roboto Slab", "Times New Roman", serif',
                fontWeight: 700,
            },
            h4: {
                fontFamily: '"LatinoType", "Times New Roman", serif',
                fontWeight: 400,
                color:  '#8fc8f7' // A light background
            },
            h5: {
                fontFamily: '"LatinoType", "Times New Roman", serif',
                fontWeight: 400,
                color:  '#8fc8f7' // A light background
            },


            // ... and so on for h4, h5, h6, subtitle1, subtitle2, button, overline
            button: {
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                fontWeight: 500,
            },
            overline: {
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                textTransform: 'uppercase',
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
            <ThemeProvider theme={themeMode === 'light' ? themeOptions : darkTheme}>
                <ResponsiveDrawer onThemeToggle={toggleTheme}></ResponsiveDrawer>
            </ThemeProvider>
        </Router>

    );
};

export default App;
