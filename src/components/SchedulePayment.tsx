import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Chip from '@mui/material/Chip';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { GridColDef } from '@mui/x-data-grid';
import {Button, Typography} from "@mui/material";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import {useState} from "react";
import Box from "@mui/material/Box";
import ScheduledPaymentsRowEdit from "./ScheduledPaymentsRowEdit";
import Modal from "@mui/material/Modal";
const renderStatus = (params: GridRenderCellParams) => {
    let backgroundColor, color;
    switch (params.value) {
        case 'Pending':
            backgroundColor = '#ffd97a'; // Light Salmon
            color = '#9b7e1e'; // Darker Salmon
            break;
        case 'Paid':
            backgroundColor = '#98FB98'; // Pale Green
            color = '#3CB371'; // Medium Sea Green
            break;
        case 'Delinquent':
            backgroundColor = '#FFB6C1'; // Light Pink
            color = '#d55595'; // Hot Pink
            break;
        default:
            backgroundColor = '#D3D3D3'; // Light Grey
            color = '#A9A9A9'; // Dark Grey
    }

    return (
        <Chip
            label={params.value}
            size="small"
            sx={{ bgcolor: backgroundColor, color: color, fontWeight: 'bold' }}
        />
    );
};

const formatCurrency = (amount: number): string => {
    return `$${amount.toFixed(2)}`; // Adjust formatting as needed
};

const columns: GridColDef[] = [
    { field: 'amount', headerName: 'Amount', width: 110, type: 'number',
        align: 'right',
        headerAlign: 'center',
        renderCell: (params: GridRenderCellParams) => formatCurrency(params.value as number),
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 130,
        renderCell: renderStatus, // Custom render function for the status
        align: 'center',
        headerAlign: 'center'
    },
    { field: 'description', headerName: 'Description', width: 150,
        align: 'center',

        headerAlign: 'center' },
    {
        field: 'dueDate',
        headerName: 'Due Date',
        type: 'date',
        align: 'center',
        headerAlign: 'center',
        valueGetter: (params) =>
            new Date(params.value), // Transform the string value to a Date object
    },

    // ... more columns if needed
];

export default function DataTable() {
    const [openScheduledPayments, setScheduledPayments] = React.useState(false);
    const handleOpenScheduledPayments = () => setScheduledPayments(true);
    const handleCloseScheduledPayments = () => setScheduledPayments(false);


    const [gridRows, setGridRows] = useState([
        { id: 1, description: 'Initial Payment', amount: 500, dueDate: '2023-01-15', status: 'Pending' },
        { id: 2, description: 'Monthly Payment', amount: 1500, dueDate: '2023-02-15', status: 'Paid' },
        { id: 3, description: 'Monthly Payment', amount: 200, dueDate: '2023-03-15', status: 'Delinquent' },
        // Add more rows as needed
    ]);


    const onDataChange = (newData: any) => {
        if (newData.id) {
            // Update existing row
            setGridRows(gridRows.map(row => row.id === newData.id ? newData : row));
        } else {
            // Add new row
            const newRow = {
                ...newData,
                id: gridRows.length + 1 // Assuming id is a simple increment. Adjust as needed.
            };
            setGridRows([...gridRows, newRow]);
        }
    };

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

    return (
        <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h5" style={{ padding: "5px"}}>Contract Scheduled Cashflows</Typography>
            <Button onClick={handleOpenScheduledPayments}><AddTwoToneIcon /></Button>
        </div><br/>

        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={gridRows}
                columns={columns}
                checkboxSelection
            />
        </div>

        <Modal
            open={openScheduledPayments}
            onClose={handleCloseScheduledPayments}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            BackdropProps={{
                style: {
                    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Or any color with desired opacity
                },
            }}
        >
            <Box sx={style}>
                <ScheduledPaymentsRowEdit label={"Add Scheduled Payment"} goBack={handleCloseScheduledPayments} onDataChange={onDataChange} currentValue={{}} />
            </Box>
        </Modal>
        </div>
    );
}
