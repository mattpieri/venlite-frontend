import React from 'react';
import { Box, Button, Container, Grid, Paper, Tab, Tabs, Typography, Link } from '@mui/material';

function BusinessProfile() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
        setValue(newValue);
    };

    return (
        <Container component="main">
            <Paper elevation={1} sx={{ padding: 2, margin: 'auto', maxWidth: 900, flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={8}>
                        <Typography variant="h4" gutterBottom>
                            Garage Doors
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                            {/* Replace with dynamic rating component */}
                            ★★★★★ 0.0
                        </Typography>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="About" />
                                <Tab label="Contact" />
                                <Tab label="Reviews" />
                            </Tabs>
                        </Box>
                        <Typography variant="body2" gutterBottom>
                            testasdfasf
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            Licensing
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            All statements concerning insurance, licenses, and bonds are informational only, and are self-reported.
                            Since insurance, licenses and bonds can expire and can be cancelled, homeowners should always check such
                            information for themselves. To find more licensing information for your state, visit our Find Licensing
                            Requirements page. Contact pro for more details.
                        </Typography>
                        <Typography variant="h6" gutterBottom component="div">
                            Reviews
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Have you hired Garage Doors? Be the first to share your experience and help other people looking to hire
                            this pro.
                        </Typography>
                        <Button variant="outlined" sx={{ my: 2 }}>
                            Write a review
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Button variant="contained" size="large" sx={{ width: '100%', mb: 2 }}>
                            Request quote
                        </Button>
                        <Typography variant="subtitle1" gutterBottom>
                            Phone
                        </Typography>
                        <Link href="#" underline="hover">
                            Show phone number
                        </Link>
                        <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                            Address
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Wantagh, NY 11793
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                            Service Categories
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Gas Logs, Garage Doors
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default BusinessProfile;
