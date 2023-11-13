// src/components/Login.tsx
import React, { FC, useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useHistory } from 'react-router-dom';

type AuthType = 'vendor' | 'servicer';

interface LoginProps {
    type: AuthType;
    onLogin?: (email: string, password: string) => void;
}

const Login: FC<LoginProps> = ({ onLogin }) => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (onLogin) {
            onLogin(email, password);
        }
        history.push('/dashboard');  // Navigate to Dashboard
    };

    return (
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        flexDirection="column"
        >
        <Container component="main" maxWidth="xs">
            <div>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <form noValidate onSubmit={handleLogin}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
        </Box>
    );
};

export default Login;
