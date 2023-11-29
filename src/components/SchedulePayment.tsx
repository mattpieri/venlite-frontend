import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Chip from '@mui/material/Chip';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { GridColDef } from '@mui/x-data-grid';
const renderStatus = (params: GridRenderCellParams) => {
    let color;
    switch (params.value) {
        case 'Pending':
            color = 'orange';
            break;
        case 'Paid':
            color = 'green';
            break;
        case 'Delinquent':
            color = 'red';
            break;
        default:
            color = 'grey';
    }

    return (
        <Chip
            label={params.value}
            size="small"
            sx={{ bgcolor: color, color: 'white', fontWeight: 'bold' }}
        />
    );
};

const columns: GridColDef[] = [
    { field: 'vendor', headerName: 'Description', width: 150 },
    { field: 'amount', headerName: 'Amount', width: 110, type: 'number' },
    {
        field: 'dueDate',
        headerName: 'Due Date',
        width: 130,
        type: 'date',
        valueGetter: (params) =>
            new Date(params.value), // Transform the string value to a Date object
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 130,
        renderCell: renderStatus, // Custom render function for the status
    },
    // ... more columns if needed
];

const rows = [
    { id: 1, vendor: 'Initial Payment', amount: 500, dueDate: '2023-01-15', status: 'Pending' },
    { id: 2, vendor: 'Monthly Payment', amount: 1500, dueDate: '2023-02-15', status: 'Paid' },
    { id: 3, vendor: 'Monthly Payment', amount: 200, dueDate: '2023-03-15', status: 'Delinquent' },
    // Add more rows as needed
];

export default function DataTable() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                checkboxSelection
            />
        </div>
    );
}
