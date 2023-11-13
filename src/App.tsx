// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Selection from './components/Selection';
import Auth from './containers/Login/Auth';
import Dashboard from './components/Dashboard';
import ContractPage from './components/ContractPage';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Selection} />
                <Route path="/vendor-auth" render={() => <Auth type="vendor" />} />
                <Route path="/servicer-auth" render={() => <Auth type="servicer" />} />
                <Route path="/dashboard" component={Dashboard} /> {/* New route */}
                <Route path="/contract/:contractId" component={ContractPage} />
            </Switch>
        </Router>
    );
};

export default App;
