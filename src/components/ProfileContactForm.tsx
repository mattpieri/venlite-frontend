import React from 'react';
import {TextField, Button, Container, Grid, Typography, Paper} from '@mui/material';

function ContactForm() {
    // You would handle form submission here
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Form processing logic goes here
    };

    return (
        <Paper style={{paddingTop: '50px', paddingBottom: '50px'}}>
        <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h5">
                Contact Info
            </Typography>
            <br/>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="first-name"
                            label="First Name"
                            name="firstName"
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="last-name"
                            label="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="address1"
                            label="Address 1"
                            name="address1"
                            autoComplete="address-line1"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="address2"
                            label="Address 2"
                            name="address2"
                            autoComplete="address-line2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="city"
                            label="City"
                            name="city"
                            autoComplete="address-level2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            required
                            fullWidth
                            id="state"
                            label="State"
                            name="state"
                            autoComplete="address-level1"
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            required
                            fullWidth
                            id="zip"
                            label="ZIP Code"
                            name="zip"
                            autoComplete="postal-code"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="phone"
                            label="Phone"
                            name="phone"
                            autoComplete="tel"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
        </Paper>
    );
}

export default ContactForm;
