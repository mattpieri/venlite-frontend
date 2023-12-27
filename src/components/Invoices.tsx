import React from 'react';
import {
    Box, Button, Tab, Tabs, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography
} from '@mui/material';
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";

// Invoice interface
interface Invoice {
    id: number;
    status: 'Paid' | 'Past due' | 'Void';
    created: string;
    dueDate: string;
    amount: string;
    frequency: string;
    invoiceNumber: string;
    customerEmail: string;
    customerDescription: string;
    lineItems: string;
}

// Sample invoice data
const invoiceData: Invoice[] = [
    { id: 1, status: 'Paid', created: 'Nov 13, 6:36 PM', dueDate: '—', amount: '$0.00', frequency: 'USD', invoiceNumber: '4138AEB5-0004', customerEmail: 'mattpieri1@gmail.com', customerDescription: 'Item number one', lineItems: '...' },
    // ... more invoices
];

function InvoiceScreen() {
    // State to hold the current tab value
    const [currentTab, setCurrentTab] = React.useState(0);

    // Handle changing tabs
    const handleTabChange = (event: React.SyntheticEvent, newValue: number): void => {
        setCurrentTab(newValue);
    };

    return (
        <Paper style={{padding:'20px'}}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="h5">Invoices</Typography>
                <Button
                        variant="contained"
                        startIcon={<AddTwoToneIcon style={{ fontSize: 'small' }} />}

                >
                    Add Invoice
                </Button>
            </div>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={currentTab} onChange={handleTabChange} aria-label="invoice tabs">
                        <Tab label="All invoices" />
                        <Tab label="Draft" />
                        <Tab label="Outstanding" />
                        <Tab label="Past due" />
                    </Tabs>
                </Box>
                <Box sx={{ p: 3 }}>
                    <Button variant="contained" sx={{ margin: 1 }}>
                        Create test invoice
                    </Button>
                    <Button variant="outlined" sx={{ margin: 1 }}>
                        Export
                    </Button>
                    <Button variant="outlined" sx={{ margin: 1 }}>
                        Edit columns
                    </Button>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="invoice table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Created</TableCell>
                                    <TableCell>Due date</TableCell>
                                    <TableCell>Amount</TableCell>
                                    {/* ... other table headers */}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {invoiceData.map((invoice) => (
                                    <TableRow key={invoice.id}>
                                        <TableCell>{invoice.status}</TableCell>
                                        <TableCell>{invoice.created}</TableCell>
                                        <TableCell>{invoice.dueDate}</TableCell>
                                        <TableCell>{invoice.amount}</TableCell>
                                        {/* ... other table cells */}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Paper>

    );
}

export default InvoiceScreen;
