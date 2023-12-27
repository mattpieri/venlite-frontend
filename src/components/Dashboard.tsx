// src/components/CustomTable.tsx
import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import {Button, Paper, TextField, Typography} from "@mui/material";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import Box from "@mui/material/Box";
import ContractEdit from "./ContractEdit";
import Modal from "@mui/material/Modal";

const data = [
    {
        id: 1,
        location: 'Hotel Downtown',
        client: 'Plumbing Services Inc.',
        project: 'Bathroom Renovation',
        contract: 'Plumbing Contract',
        serviceType: 'Plumbing',
    },
    {
        id: 2,
        location: 'Hotel Downtown',
        client: 'Landscaping Pros',
        project: 'Garden Enhancement',
        contract: 'Landscaping Contract',
        serviceType: 'Landscaping',
    },
    {
        id: 3,
        location: 'Hotel Uptown',
        client: 'Electrical Solutions Co.',
        project: 'Electrical Upgrades',
        contract: 'Electrical Contract',
        serviceType: 'Electrical',
    },
    {
        id: 4,
        location: 'Hotel Midtown',
        client: 'Cleaning Experts Ltd.',
        project: 'Housekeeping Services',
        contract: 'Cleaning Contract',
        serviceType: 'Housekeeping',
    },
    {

        id: 5,
        location: 'Hotel Uptown',
        client: 'HVAC Services Corp.',
        project: 'Air Conditioning Installation',
        contract: 'HVAC Contract',
        serviceType: 'HVAC',
    },
    // Add more rows...
    {
        id: 6,
        location: 'Hotel Downtown',
        client: 'Security Solutions LLC',
        project: 'Surveillance System Upgrade',
        contract: 'Security Contract',
        serviceType: 'Security',
    },
    {
        id: 7,
        location: 'Hotel Midtown',
        client: 'Laundry Services Inc.',
        project: 'Laundry Room Renovation',
        contract: 'Laundry Contract',
        serviceType: 'Laundry',
    },
    {
        id: 8,
        location: 'Hotel Uptown',
        client: 'Catering Excellence',
        project: 'Event Catering Services',
        contract: 'Catering Contract',
        serviceType: 'Catering',
    },
    {
        id: 9,
        location: 'Hotel Downtown',
        client: 'Pool Maintenance Pros',
        project: 'Swimming Pool Upkeep',
        contract: 'Pool Maintenance Contract',
        serviceType: 'Pool Maintenance',
    },
    {
        id: 10,
        location: 'Hotel Midtown',
        client: 'Painting Specialists',
        project: 'Interior Painting',
        contract: 'Painting Contract',
        serviceType: 'Painting',
    },
    {
        id: 11,
        location: 'Hotel Downtown',
        client: 'Plumbing Services Inc.',
        project: 'Bathroom Renovation',
        contract: 'Plumbing Contract',
        serviceType: 'Plumbing',
    },/*
    {

        location: 'Hotel Downtown',
        client: 'Landscaping Pros',
        project: 'Garden Enhancement',
        contract: 'Landscaping Contract',
        serviceType: 'Landscaping',
    },
    {

        location: 'Hotel Uptown',
        client: 'Electrical Solutions Co.',
        project: 'Electrical Upgrades',
        contract: 'Electrical Contract',
        serviceType: 'Electrical',
    },
    {
        location: 'Hotel Midtown',
        client: 'Cleaning Experts Ltd.',
        project: 'Housekeeping Services',
        contract: 'Cleaning Contract',
        serviceType: 'Housekeeping',
    },
    {
        location: 'Hotel Uptown',
        client: 'HVAC Services Corp.',
        project: 'Air Conditioning Installation',
        contract: 'HVAC Contract',
        serviceType: 'HVAC',
    },
    // Add more rows...
    {
        location: 'Hotel Downtown',
        client: 'Security Solutions LLC',
        project: 'Surveillance System Upgrade',
        contract: 'Security Contract',
        serviceType: 'Security',
    },
    {
        location: 'Hotel Midtown',
        client: 'Laundry Services Inc.',
        project: 'Laundry Room Renovation',
        contract: 'Laundry Contract',
        serviceType: 'Laundry',
    },
    {
        location: 'Hotel Uptown',
        client: 'Catering Excellence',
        project: 'Event Catering Services',
        contract: 'Catering Contract',
        serviceType: 'Catering',
    },
    {
        location: 'Hotel Downtown',
        client: 'Pool Maintenance Pros',
        project: 'Swimming Pool Upkeep',
        contract: 'Pool Maintenance Contract',
        serviceType: 'Pool Maintenance',
    },
    {
        location: 'Hotel Midtown',
        client: 'Painting Specialists',
        project: 'Interior Painting',
        contract: 'Painting Contract',
        serviceType: 'Painting',
    },
    // Add 10 more rows...
    {
        location: 'Hotel Uptown',
        client: 'Roofing Solutions Inc.',
        project: 'Roof Repairs',
        contract: 'Roofing Contract',
        serviceType: 'Roofing',
    },
    {
        location: 'Hotel Downtown',
        client: 'Pest Control Experts',
        project: 'Pest Management Services',
        contract: 'Pest Control Contract',
        serviceType: 'Pest Control',
    },
    {
        location: 'Hotel Uptown',
        client: 'Audiovisual Systems Ltd.',
        project: 'Conference Room Setup',
        contract: 'AV Contract',
        serviceType: 'Audiovisual',
    },
    {
        location: 'Hotel Midtown',
        client: 'Window Cleaning Services',
        project: 'Window Cleaning',
        contract: 'Window Cleaning Contract',
        serviceType: 'Window Cleaning',
    },
    {
        location: 'Hotel Downtown',
        client: 'Carpet Cleaning Pros',
        project: 'Carpet Cleaning',
        contract: 'Carpet Cleaning Contract',
        serviceType: 'Carpet Cleaning',
    },
    {
        location: 'Hotel Uptown',
        client: 'Fire Safety Systems Inc.',
        project: 'Fire Alarm System Installation',
        contract: 'Fire Safety Contract',
        serviceType: 'Fire Safety',
    },
    {
        location: 'Hotel Midtown',
        client: 'Pool Table Services',
        project: 'Pool Table Maintenance',
        contract: 'Pool Table Contract',
        serviceType: 'Pool Table',
    },
    {
        location: 'Hotel Downtown',
        client: 'Green Energy Solutions',
        project: 'Energy Efficiency Upgrade',
        contract: 'Energy Efficiency Contract',
        serviceType: 'Energy Efficiency',
    },
    {
        location: 'Hotel Uptown',
        client: 'Shuttle Transportation Inc.',
        project: 'Shuttle Service',
        contract: 'Transportation Contract',
        serviceType: 'Event Planning',
    },
    {
        location: 'Hotel Midtown',
        client: 'Event Planning Specialists',
        project: 'Event Planning Services',
        contract: 'Event Planning Contract',
        serviceType: 'Event Planning',
    },*/
    // Add 10 more rows...
];

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};


const columns: GridColDef[] = [
    {
        field: 'location',
        headerName: 'Location',
        flex: 1,
        groupable: true, // Enable grouping for the 'location' column
    },
    { field: 'client', headerName: 'Vendor', flex: 1 },
    { field: 'project', headerName: 'Project', flex: 1 },
    {
        field: 'contract',
        headerName: 'Contract',
        flex: 1,
        renderCell: (params) => (
            <Link to={`/contract/${params.value}`}>{params.value}</Link>
        ),
    },
    { field: 'serviceType', headerName: 'Service Type', flex: 1 },
];


const CustomTable: React.FC = () => {
    const [openContractDetails, setOpenContractDetails] = React.useState(false);
    const handleContractDetailsOpen = () => setOpenContractDetails(true);
    const handleContractDetailsClose = () => setOpenContractDetails(false);

    return (
        <Paper style = {{padding: "20px"}}>
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="h5" style={{paddingLeft:'5px'}}>Contracts</Typography>
                <Button onClick={handleContractDetailsOpen}
                        variant="contained"
                        startIcon={<AddTwoToneIcon style={{ fontSize: 'small' }} />}

                >
                Add contract
                </Button>
            </div>
            <br/>
            <TextField  fullWidth sx={{ mb: 2 }} label="Search" id="fullWidth" />
            <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                autoPageSize={true}
                checkboxSelection
            />
            </div>
            <Modal
                open={openContractDetails}
                onClose={handleContractDetailsClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                BackdropProps={{
                    style: {
                        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Or any color with desired opacity
                    },
                }}
            >
                <Box sx={style}>
                    <ContractEdit/>
                </Box>
            </Modal>
        </div>
        </Paper>

    );
};

export default CustomTable;