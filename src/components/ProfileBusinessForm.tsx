import React from 'react';
import {
    Box,
    Button,
    Container,
    Grid,
    MenuItem,
    Select,
    TextField,
    Typography,
    InputLabel,
    FormControl, Paper
} from '@mui/material';

function BusinessPageForm() {
    const [businessInfo, setBusinessInfo] = React.useState({
        businessLocation: '',
        typeOfBusiness: '',
        businessStructure: '',
        legalName: '',
        tin: '',
        doingBusinessAs: '',
        businessAddressCountry: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zip: '',
        industry: '',
        businessWebsite: ''
    });

    const handleChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setBusinessInfo({ ...businessInfo, [name]: value });
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Implement form submission logic here
    };

    return (
        <Paper style = {{padding:"20px"}}>
        <Container component="main">
            <Typography component="h1" variant="h5">
                Business Information
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="business-location-label">Business location</InputLabel>
                            <Select
                                labelId="business-location-label"
                                id="businessLocation"
                                name="businessLocation"
                                value={businessInfo.businessLocation}
                                label="Business location"
                                onChange={handleChange}
                            >
                                {/* Add your own location options here */}
                                <MenuItem value="United States">United States</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="type-of-business-label">Type of business</InputLabel>
                            <Select
                                labelId="type-of-business-label"
                                id="typeOfBusiness"
                                name="typeOfBusiness"
                                value={businessInfo.typeOfBusiness}
                                label="Type of business"
                                onChange={handleChange}
                            >
                                <MenuItem value="Company">Company</MenuItem>
                                {/* Add more options as needed */}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="business-structure-label">Business structure</InputLabel>
                            <Select
                                labelId="business-structure-label"
                                id="businessStructure"
                                name="businessStructure"
                                value={businessInfo.businessStructure}
                                label="Business structure"
                                onChange={handleChange}
                            >
                                {/* Add options based on your requirements */}
                                <MenuItem value="Sole proprietorship">Sole proprietorship</MenuItem>
                                <MenuItem value="Single-member LLC">Single-member LLC</MenuItem>
                                <MenuItem value="Multi-member LLC">Multi-member LLC</MenuItem>
                                {/* ... other options */}
                            </Select>
                        </FormControl>
                    </Grid>
                    {/* ... other form fields */}
                    {/* Legal name, TIN, Doing business as, etc. */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="legalName"
                            name="legalName"
                            label="Legal name"
                            value={businessInfo.legalName}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="tin"
                            name="tin"
                            label="Taxpayer Identification Number (TIN)"
                            value={businessInfo.tin}
                            onChange={handleChange}
                        />
                    </Grid>
                    {/* ... other address fields */}
                    {/* ... similar for Industry and Business website */}
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="industry"
                            name="industry"
                            label="Industry"
                            value={businessInfo.industry}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="businessWebsite"
                            name="businessWebsite"
                            label="Business website"
                            value={businessInfo.businessWebsite}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Submit Information
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
        </Paper>
    );
}

export default BusinessPageForm;
