import CustomTable from "./Dashboard";
import * as React from "react";
import {useState} from "react";
import {Button, Typography} from "@mui/material";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import {DataGrid, GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ScheduledPaymentsRowEdit from "./ScheduledPaymentsRowEdit";
import Chip from "@mui/material/Chip";
import VendorListRowEdit from "./VendorListRow";

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
    { field: 'name', headerName: 'Name', width: 180 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'numberOfContracts', headerName: '# of Contracts', width: 140, align: 'center', headerAlign: 'center' },
    {
        field: 'created',
        headerName: 'Created',
        type: 'date',
        width: 150,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (params) => params.value ? new Date(params.value) : null,
    },
    // ... [other columns as needed]
];

const sampleGridData = [
    {
        id: 1,
        name: 'Plumbing Services Inc.',
        email: 'alice.johnson@example.com',
        numberOfContracts: 5,
        created: '2021-01-15'
    },
    {
        id: 2,
        name: 'Landscaping Pros',
        email: 'bob.smith@example.com',
        numberOfContracts: 3,
        created: '2021-02-20'
    },
    {
        id: 3,
        name: 'Cleaning Experts Ltd.',
        email: 'carol.white@example.com',
        numberOfContracts: 2,
        created: '2021-03-05'
    },
    {
        id: 4,
        name: 'HVAC Services Corp.',
        email: 'david.brown@example.com',
        numberOfContracts: 7,
        created: '2021-04-10'
    },
    {
        id: 5,
        name: 'Pool Maintenance Pros',
        email: 'eve.davis@example.com',
        numberOfContracts: 4,
        created: '2021-05-25'
    },
    // ... more data rows as needed
];
const VendorTable = () => {


    const [openScheduledPayments, setScheduledPayments] = React.useState(false);
    const handleOpenScheduledPayments = () => setScheduledPayments(true);
    const handleCloseScheduledPayments = () => setScheduledPayments(false);


    const [gridRows, setGridRows] = useState(sampleGridData);


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
                <Typography variant="h5">Vendors</Typography>
                <Button onClick={handleOpenScheduledPayments}
                        variant="contained"
                        startIcon={<AddTwoToneIcon style={{ fontSize: 'small' }} />}
                        style={{
                            backgroundColor: 'purple', // Set the button color to purple
                            color: 'darkpurple' // Set the text color to dark purple (replace with actual color code)
                        }}
                >
                    Add Vendor
                </Button>
            </div>
            <br/>

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
                    <VendorListRowEdit label={"Add Vendor"} goBack={handleCloseScheduledPayments} onDataChange={onDataChange} currentValue={{}} />
                </Box>
            </Modal>
        </div>
    )

}

export default VendorTable;