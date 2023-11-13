// src/components/Signup.tsx
import React, { FC, useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

type AuthType = 'vendor' | 'servicer';

interface SignupProps {
    type: AuthType;
    onSignup?: (email: string, password: string) => void;
}

const Signup: FC<SignupProps> = ({ onSignup }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSignup) {
            onSignup(email, password);
        }
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            flexDirection="column"
        >
            <Typography component="h1" variant="h5">
                Sign up
            </Typography>
            <form noValidate onSubmit={handleSignup}>
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
                    Sign Up
                </Button>
            </form>
        </Box>
    );
};

export default Signup;
