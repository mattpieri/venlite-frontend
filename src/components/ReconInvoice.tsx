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
import StackOffsetDemo from "./ReconInvoiceChart";
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

interface Invoice {
    invoiceNumber: string;
    invoiceDate: string;
    invoiceAmount: number;
    // ... other fields
}
const formatCurrency = (params: GridRenderCellParams<Invoice, number>): React.ReactNode => {
    if (params.value != null) {
        return `$${params.value.toFixed(2)}`;
    } else {
        // Handle the case where params.value is undefined or null
        return 'N/A'; // or any other fallback string or value
    }
};

const columns: GridColDef[] = [
    { field: 'invoiceNumber', headerName: 'Invoice Number', width: 120 },
    {
        field: 'invoiceDate',
        headerName: 'Invoice Date',
        width: 120,
        type: 'date',
        valueGetter: (params) => new Date(params.value) // Convert string to Date object
    },
    { field: 'invoiceAmount', headerName: 'Invoice Amount', width: 140, renderCell: formatCurrency },
    {
        field: 'scheduledPaymentDate',
        headerName: 'Scheduled Payment Date',
        width: 190,
        type: 'date',
        valueGetter: (params) => new Date(params.value) // Convert string to Date object
    },
    { field: 'paymentAmount', headerName: 'Payment Amount', width: 140, renderCell: formatCurrency },
    { field: 'paymentStatus', headerName: 'Payment Status', width: 140, renderCell: renderStatus },
    { field: 'reconciliationStatus', headerName: 'Reconciliation Status', width: 180 }
];

export default function ReconInvoiceTable() {

    const [gridRows, setGridRows] = useState([
        { id: 1, invoiceNumber: 'INV-001', invoiceDate: '2023-01-01', invoiceAmount: 1000, scheduledPaymentDate: '2023-01-15', paymentAmount: 1000, paymentStatus: 'Paid', reconciliationStatus: 'Matched' },
        { id: 2, invoiceNumber: 'INV-002', invoiceDate: '2023-02-01', invoiceAmount: 2000, scheduledPaymentDate: '2023-02-15', paymentAmount: 2000, paymentStatus: 'Paid', reconciliationStatus: 'Matched' },
        { id: 3, invoiceNumber: 'INV-003', invoiceDate: '2023-03-01', invoiceAmount: 1500, scheduledPaymentDate: '2023-03-15', paymentAmount: 1500, paymentStatus: 'Pending', reconciliationStatus: 'Unmatched' },
        { id: 4, invoiceNumber: 'INV-004', invoiceDate: '2023-04-01', invoiceAmount: 2500, scheduledPaymentDate: '2023-04-15', paymentAmount: 0, paymentStatus: 'Not Paid', reconciliationStatus: 'Unmatched' }
    ]);


    return (
        <div style={ {padding:'5px'}}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="h5">Invoice vs Scheduled Payments</Typography>
            </div>
            <br/>
            <StackOffsetDemo></StackOffsetDemo>
            <br/>
            <div style={{ width: '100%' }}>
                <DataGrid
                    rows={gridRows}
                    columns={columns}
                    checkboxSelection
                />
            </div>
            <br/>


        </div>
    );
}
