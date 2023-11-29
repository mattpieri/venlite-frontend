// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Selection from './components/Selection';
import Auth from './containers/Login/Auth';
import Dashboard from './components/Dashboard';
import ContractPage from './components/ContractPage';
import ResponsiveDrawer from './components/SidePanel'

const App: React.FC = () => {
    return (
        <Router>
            <ResponsiveDrawer></ResponsiveDrawer>

        </Router>

    );
};

export default App;
