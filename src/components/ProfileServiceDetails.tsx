import React from 'react';
import {
    Box,
    Button,
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
    Typography,
    Checkbox, Paper
} from '@mui/material';

function ServiceDetailsForm() {
    const [serviceDetails, setServiceDetails] = React.useState({
        emergencyService: false,
        videoOrPhoneEstimates: false,
        freeEstimates: 'no',
        offerWarranty: 'no',
        seniorDiscount: 'no',
        discountDetails: '',
    });

    const handleCheckboxChange = (event: { target: { name: any; checked: any; }; }) => {
        setServiceDetails({
            ...serviceDetails,
            [event.target.name]: event.target.checked,
        });
    };

    const handleRadioChange = (event: { target: { name: any; value: any; }; }) => {
        setServiceDetails({
            ...serviceDetails,
            [event.target.name]: event.target.value,
        });
    };

    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        setServiceDetails({
            ...serviceDetails,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Implement your form submission logic here
    };

    return (
        <Paper style={{paddingTop: '50px', paddingBottom: '50px'}}>
        <Container component="main">
            <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
                Service Details
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h6">Services highlights</Typography>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={serviceDetails.emergencyService}
                                    onChange={handleCheckboxChange}
                                    name="emergencyService"
                                />
                            }
                            label="Offers emergency service"
                        />
                        <Typography variant="body2">
                            We accept urgent requests outside normal business hours.
                        </Typography>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={serviceDetails.videoOrPhoneEstimates}
                                    onChange={handleCheckboxChange}
                                    name="videoOrPhoneEstimates"
                                />
                            }
                            label="Video or phone estimates"
                        />
                        <Typography variant="body2">
                            We offer convenient estimates over video or phone.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Do you offer free estimates?</FormLabel>
                            <RadioGroup
                                row
                                name="freeEstimates"
                                value={serviceDetails.freeEstimates}
                                onChange={handleRadioChange}
                            >
                                <FormControlLabel value="yes" control={<Radio />} label="Yes — we don't charge for an estimate, including travel to site." />
                                <FormControlLabel value="no" control={<Radio />} label="No — we charge for estimates (or we charge for travel to provide one)." />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Do you offer any warranty?</FormLabel>
                            <RadioGroup
                                row
                                name="offerWarranty"
                                value={serviceDetails.offerWarranty}
                                onChange={handleRadioChange}
                            >
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Do you offer a senior discount?</FormLabel>
                            <RadioGroup
                                row
                                name="seniorDiscount"
                                value={serviceDetails.seniorDiscount}
                                onChange={handleRadioChange}
                            >
                                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="no" control={<Radio />} label="No" />
                            </RadioGroup>
                            {serviceDetails.seniorDiscount === 'yes' && (
                                <TextField
                                    fullWidth
                                    id="discount-details"
                                    label="Discount details"
                                    name="discountDetails"
                                    value={serviceDetails.discountDetails}
                                    onChange={handleInputChange}
                                    margin="normal"
                                />
                            )}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mt: 3 }}
                        >
                            Save Details
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
        </Paper>
    );
}

export default ServiceDetailsForm;
