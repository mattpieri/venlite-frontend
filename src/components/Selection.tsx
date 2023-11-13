// src/components/Selection.tsx
import React from 'react';
import { Button, Container, Box } from '@mui/material';
import { useHistory } from 'react-router-dom';

const Selection: React.FC = () => {
    const history = useHistory();

    const handleSelection = (path: string) => {
        history.push(path);
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            flexDirection="column"
        >
            <Container component="main" maxWidth="sm">
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => handleSelection('/vendor-auth')}
                >
                    Client Login/Signup
                </Button>
                <br />
                <br />
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    onClick={() => handleSelection('/servicer-auth')}
                >
                    Servicer Login/Signup
                </Button>
            </Container>
        </Box>
    );
};

export default Selection;
