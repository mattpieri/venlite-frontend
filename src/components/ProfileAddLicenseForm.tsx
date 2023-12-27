import {
    Button,
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    OutlinedInput, Paper,
    Select,
    TextField,
    Typography
} from "@mui/material";
import React from "react";
import AboutForm from "./ProfileAboutForm";


function ProfileAddLicenseForm() {
    const [formValues, setFormValues] = React.useState({
        licenseStatus: '',
        licenseName: '',
        firstName: '',
        lastName: '',
        company: '',
        licenseNumber: '',
        state: '',
        licenseAuthority: '',
        licenseExpiration: '',
    });

    // For category selection - assuming multiple can be selected
    const [category, setCategory] = React.useState([]);

    const handleCategoryChange = (event: { target: { value: any; }; }) => {
        const {
            target: { value },
        } = event;
        setCategory(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Implement your form submission logic here
    };

    return (
        <Paper style={{paddingTop: '50px', paddingBottom: '50px'}}>
        <Container component="main">
            <Typography component="h1" variant="h5">
                Add License
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="category-label">Select Category</InputLabel>
                            <Select
                                labelId="category-label"
                                id="category-select"
                                multiple
                                value={category}
                                onChange={handleCategoryChange}
                                input={<OutlinedInput label="Select Category" />}
                                renderValue={(selected) => selected.join(', ')}
                            >
                                {/* Replace these with your categories */}
                                <MenuItem value="Electrical">Electrical</MenuItem>
                                <MenuItem value="Plumbing">Plumbing</MenuItem>
                                <MenuItem value="General Contractor">General Contractor</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="license-status-label">License Status</InputLabel>
                            <Select
                                labelId="license-status-label"
                                id="license-status-select"
                                value={formValues.licenseStatus}
                                label="License Status"
                                onChange={handleChange}
                                name="licenseStatus"
                            >
                                <MenuItem value="Yes, I am appropriately licensed for my trade.">
                                    Yes, I am appropriately licensed for my trade.
                                </MenuItem>
                                <MenuItem value="No, I am not licensed.">
                                    No, I am not licensed.
                                </MenuItem>
                                {/* Add more options as needed */}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="license-name"
                            label="License Name"
                            name="licenseName"
                            value={formValues.licenseName}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            id="first-name"
                            label="First Name"
                            name="firstName"
                            value={formValues.firstName}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            id="last-name"
                            label="Last Name"
                            name="lastName"
                            value={formValues.lastName}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="company"
                            label="Company"
                            name="company"
                            value={formValues.company}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="license-number"
                            label="License Number"
                            name="licenseNumber"
                            value={formValues.licenseNumber}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="state-label">State</InputLabel>
                            <Select
                                labelId="state-label"
                                id="state-select"
                                value={formValues.state}
                                label="State"
                                onChange={handleChange}
                                name="state"
                            >
                                {/* Replace these with your states */}
                                <MenuItem value="NY">New York</MenuItem>
                                <MenuItem value="CA">California</MenuItem>
                                <MenuItem value="TX">Texas</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="license-authority"
                            label="License Authority"
                            name="licenseAuthority"
                            value={formValues.licenseAuthority}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="license-expiration"
                            label="License Expiration"
                            name="licenseExpiration"
                            placeholder="mm/dd/yyyy"
                            value={formValues.licenseExpiration}
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
                            Add License
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
        </Paper>
    );
};

export default ProfileAddLicenseForm;