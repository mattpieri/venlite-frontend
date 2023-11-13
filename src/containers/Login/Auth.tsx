// src/components/Auth.tsx
import React, { FC, useState } from 'react';
import { Container, Tabs, Tab } from '@mui/material';
import Login from './Login';
import SignUp from './Signup';

type AuthType = 'vendor' | 'servicer';

interface AuthProps {
    type: AuthType;
    onLogin?: (email: string, password: string) => void;
    onSignup?: (email: string, password: string) => void;
}

const Auth: FC<AuthProps> = ({ type, onLogin, onSignup }) => {
    const [tabIndex, setTabIndex] = useState(0);

    const renderAuthComponent = () => {
        if (tabIndex === 0) {
            return <Login type={type} onLogin={onLogin} />;
        } else {
            return <SignUp type={type} onSignup={onSignup} />;
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Tabs value={tabIndex} onChange={(e, index) => setTabIndex(index)} variant="fullWidth">
                <Tab label="Login" />
                <Tab label="Signup" />
            </Tabs>
            {renderAuthComponent()}
        </Container>
    );
};

export default Auth;
