import CustomTable from "./Dashboard";
import * as React from "react";
import {useState} from "react";
import {Button, Paper, Typography} from "@mui/material";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import {DataGrid, GridColDef, GridRenderCellParams} from "@mui/x-data-grid";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ScheduledPaymentsRowEdit from "./ScheduledPaymentsRowEdit";
import Chip from "@mui/material/Chip";

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
    { field: 'projectName', headerName: 'Project Name', width: 180 },
    { field: 'location', headerName: 'Location', width: 180 },
    {
        field: 'expectedCompletion',
        headerName: 'Expected Completion',
        type: 'date',
        width: 150,
        align: 'center',
        headerAlign: 'center',
        valueGetter: (params) =>
            new Date(params.value), // Transform the string value to a Date object
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 130,
        renderCell: renderStatus, // Custom render function for the status
        align: 'center',
        headerAlign: 'center'
    },
    // ... [other columns as needed]
];
const ProjectTable = () => {


    const [openScheduledPayments, setScheduledPayments] = React.useState(false);
    const handleOpenScheduledPayments = () => setScheduledPayments(true);
    const handleCloseScheduledPayments = () => setScheduledPayments(false);


    const [gridRows, setGridRows] = useState([
        { id: 1, projectName: 'Urban Renewal', location: 'New York, NY', expectedCompletion: '2024-05-30', status: 'In Progress' },
        { id: 2, projectName: 'Green Park', location: 'Austin, TX', expectedCompletion: '2023-12-15', status: 'Pending' },
        { id: 3, projectName: 'Tech Hub', location: 'San Francisco, CA', expectedCompletion: '2025-08-20', status: 'Delayed' },
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
        <Paper style={{ padding: "20px"}}>
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="h5">Projects</Typography>
                <Button onClick={handleOpenScheduledPayments}
                        variant="contained"
                        startIcon={<AddTwoToneIcon style={{ fontSize: 'small' }} />}

                >
                    Add Project
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
                    <ScheduledPaymentsRowEdit label={"Add Scheduled Payment"} goBack={handleCloseScheduledPayments} onDataChange={onDataChange} currentValue={{}} />
                </Box>
            </Modal>
        </div>
        </Paper>

    )

}

export default ProjectTable;