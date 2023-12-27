import React from 'react';
import { Box, Card, CardContent, Grid, Typography, Button, Divider } from '@mui/material';
import SummaryCardsList from "./SummaryCard";
import {LineChart} from "@mui/x-charts";
// Import your chart library and components here. For example:
// import { LineChart, Line } from 'recharts';

// Mock data for charts and cards
const salesData = [
    { month: 'Jan', sales: 4000 },
    { month: 'Feb', sales: 3000 },
    { month: 'Mar', sales: 2000 },
    { month: 'Apr', sales: 2780 },
    { month: 'May', sales: 1890 },
    // ...other months
];

const investmentData = [
    { category: 'Automotive', contact: 'Craig Phillips', price: 820, status: 'Pending' },
    { category: 'Electronic Device', contact: 'Kierra Dorwart', price: 420, status: 'Success' },
    { category: 'Fashion', contact: 'Madelyn Botosh', price: 420, status: 'Success' },
    // ...other investments
];
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
    'Jan',
    "Feb",
    "Mar",
    'Apr',
    'May',
    'Jun',
    'July',
    'Aug',
    'Sept',
];

function HomeDashboard() {
    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Welcome back, Property Manager LLC.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                November 23, 2024 at 12:16 PM
            </Typography>

            {/* Summary Cards */}
            <Grid container spacing={3} sx={{ mb: 3 }}>
                {/* Map over your summary data to create summary cards */}
            </Grid>

            {/* Sales Figures Chart */}
            {/* Other sections such as Investment, Expenses can be added here */}
            <SummaryCardsList></SummaryCardsList>
            <Grid container spacing={3}>
                {/* Investment Table */}
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Contract Payable Cashflows
                            </Typography>
                            {/* Include your investment table component here */}
                        </CardContent>
                        <div style={{ paddingLeft: '50px' }}>
                        <LineChart
                            width={500}
                            height={300}
                            series={[
                                { data: pData, label: 'Invoice Amount' },
                                { data: uData, label: 'Scheduled Payment Amount' },
                            ]}
                            xAxis={[{ scaleType: 'point', data: xLabels }]}
                        />
                        </div>
                    </Card>
                </Grid>

                {/* Expenses Cards */}
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Upcoming Contract Alerts
                            </Typography>
                            {/* Map over your expense data to create expense cards */}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default HomeDashboard;
