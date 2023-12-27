import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, Grid, Paper, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {useHistory} from "react-router-dom";
import BackgroundVideo from "./BackgroundVideo";

function ServiceSearchForm() {
    const [searchParams, setSearchParams] = useState({
        service: '',
        zipCode: ''
    });

    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        setSearchParams({
            ...searchParams,
            [event.target.name]: event.target.value
        });
    };
    const history = useHistory();
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Implement your search functionality here
        console.log(searchParams);

        history.push("/search/result");
    };

    return (


        <Container component="main" maxWidth="sm" sx={{ marginTop: 8 }}>

            <Typography variant="h5" component="h1" style={{color:'white'}} gutterBottom >
                Find top-rated certified pros in your area.
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="service"
                    label="How can we help?"
                    name="service"
                    autoFocus
                    value={searchParams.service}
                    onChange={handleInputChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="zipCode"
                    label="Zip Code"
                    name="zipCode"
                    value={searchParams.zipCode}
                    onChange={handleInputChange}
                    style={{color:'white'}}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon color="action" />
                            </InputAdornment>
                        ),
                    }}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Search
                </Button>
            </Box>
            {/* This is where you might render search results or popular categories */}

        </Container>


    );
}

export default ServiceSearchForm;
