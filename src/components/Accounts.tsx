import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Box, Button, Container, MenuItem, Paper, Select, TextField, Typography} from '@mui/material';
import { industries } from '../constants/industries';
function BusinessDataGrid() {
    // Sample row data for the DataGrid
    const rows = [
        { id: 1, legalName: 'Property Manager US LLC', name: ' Real Estate Brothers US', creationDay: '2023-01-01', industry: 'Health Care' },
        { id: 2, legalName: 'Property Manager LLC', name: 'Real Estate Brothers', creationDay: '2023-01-02', industry: 'Hospitality' },
        // Add more rows as needed
    ];

    // Define the columns for the DataGrid
    const columns = [
        { field: 'legalName', headerName: 'Legal Name', width: 200 },
        { field: 'name', headerName: 'Name', width: 250 },
        { field: 'industry', headerName: 'Industry', width: 150 },
        { field: 'creationDay', headerName: 'Creation Day', width: 150 },
    ];

    // State for the form inputs
    const [formValues, setFormValues] = React.useState({
        legalName: '',
        name: '',
        creationDay: '',
    });

    const handleChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Implement form submission logic here
        console.log(formValues);
    };

    return (
        <Container component="main">
            <Paper style={{padding: '20px'}}>
            <Typography variant="h5" sx={{ my: 2 }}>
                Accounts
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="legalName"
                    label="Legal Name"
                    name="legalName"
                    autoComplete="legal-name"
                    autoFocus
                    value={formValues.legalName}
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    value={formValues.name}
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="creationDay"
                    label="Creation Day"
                    name="creationDay"
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={formValues.creationDay}
                    onChange={handleChange}
                />
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style = {{width: '100%'}}
                    sx={{ my: 1 }}

                >
                    {industries.map(industry => (
                        <MenuItem key={industry} value={industry}>{industry}</MenuItem>
                    ))}
                </Select>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 1, mb: 2 }}
                >
                    Add Account
                </Button>
            </Box>
            <div style={{ height: 400, width: '100%', marginTop: '16px' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    checkboxSelection
                />
            </div>
            </Paper>
        </Container>
    );
}

export default BusinessDataGrid;