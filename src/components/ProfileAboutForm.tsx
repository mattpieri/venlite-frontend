import React from 'react';
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    FormGroup,
    Grid,
    Paper,
    TextField,
    Typography
} from '@mui/material';

function AboutForm() {
    // State for form fields (not fully implemented for brevity)
    const [formValues, setFormValues] = React.useState({
        businessDescription: '',
        inBusinessSince: '',
        highlights: {
            blackOwned: false,
            minorityOwned: false,
            womenOwned: false,
            veteranOwned: false,
            lgbtqFriendly: false,
            speaksSpanish: false,
            familyOwned: false
        }
    });

    // Handle change for checkboxes
    const handleCheckboxChange = (event: { target: { name: any; checked: any; }; }) => {
        setFormValues({
            ...formValues,
            highlights: {
                ...formValues.highlights,
                [event.target.name]: event.target.checked
            }
        });
    };

    // Handle form submission
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Form submission logic goes here
    };

    return (
        <Paper style={{paddingTop: '50px', paddingBottom: '50px'}}>
        <Container component="main" maxWidth="sm">
            <Typography component="h1" variant="h5">
                About
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box sx={{ mt: 3 }}>
                    <TextField
                        required
                        fullWidth
                        id="business-description"
                        label="Business Description"
                        name="businessDescription"
                        multiline
                        rows={4}
                        placeholder="Tell potential customers what makes you stand out. Include details like specific services offered, info about your team’s expertise, and how you guarantee quality work."
                        inputProps={{ maxLength: 2000 }}
                        value={formValues.businessDescription}
                        // onChange={...} // Implement this to handle text change
                    />
                    <TextField
                        fullWidth
                        id="in-business-since"
                        label="In business since"
                        name="inBusinessSince"
                        type="number"
                        InputLabelProps={{ shrink: true }}
                        placeholder="Year"
                        sx={{ mt: 2 }}
                        value={formValues.inBusinessSince}
                        // onChange={...} // Implement this to handle text change
                    />
                    <TextField
                        fullWidth
                        id="number-of-employees"
                        label="# of employees"
                        name="numberOfEmployee"
                        type="number"
                        InputLabelProps={{ shrink: true }}
                        sx={{ mt: 2 }}
                        // onChange={...} // Implement this to handle text change
                    />
                    <Typography component="h3" variant="subtitle1" sx={{ mt: 2 }}>
                        Business Highlights
                    </Typography>
                    <FormGroup>
                        {Object.keys(formValues.highlights).map((highlight) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={false}
                                        onChange={handleCheckboxChange}
                                        name={highlight}
                                    />
                                }
                                label={highlight.replace(/([A-Z])/g, ' $1').trim()} // Convert camelCase to normal text
                                key={highlight}
                            />
                        ))}
                    </FormGroup>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Save
                    </Button>
                </Box>
            </form>
        </Container>
        </Paper>
    );
}

export default AboutForm;
