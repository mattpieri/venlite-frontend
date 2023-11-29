// src/components/CustomTable.tsx
import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

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



const columns: GridColDef[] = [
    {
        field: 'location',
        headerName: 'Location',
        flex: 1,
        groupable: true, // Enable grouping for the 'location' column
    },
    { field: 'client', headerName: 'Client', flex: 1 },
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
    return (
        <div style={{ height: 1000, width: '100%' }}>
            <h2>Contracts</h2>
            <DataGrid
                rows={data}
                columns={columns}
                autoPageSize={true}
                checkboxSelection
            />
        </div>
    );
};

export default CustomTable;