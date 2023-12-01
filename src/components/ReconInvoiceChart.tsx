import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
const chartSetting = {
    yAxis: [{ label: 'Amount' }],
    width: 800,
    height: 300,
    paddingLeft: '20px',
    sx: {
        [`.${axisClasses.left} .${axisClasses.label}`]: {
            transform: 'translate(-30px, 0)',
        },
    },
    // ... other settings ...
};

const valueFormatter = (value: number) => `${value.toFixed(2)}`;

export default function BarsDataset() {
    // Hardcoded dataset
    const chartDataset = [
        { month: 'Jan', invoiceAmount: 1000, paymentAmount: 800, ytdDifference: 200 },
        { month: 'Feb', invoiceAmount: 2000, paymentAmount: 2000, ytdDifference: 0 },
        { month: 'Mar', invoiceAmount: 1500, paymentAmount: 1000, ytdDifference: 500 },
        { month: 'Apr', invoiceAmount: 2500, paymentAmount: 1000, ytdDifference: 1500 },
        { month: 'May', invoiceAmount: 1800, paymentAmount: 1800, ytdDifference: 0 },
        { month: 'Jun', invoiceAmount: 2200, paymentAmount: 2000, ytdDifference: 200 },
        { month: 'Jul', invoiceAmount: 1300, paymentAmount: 1300, ytdDifference: 0 },
        { month: 'Aug', invoiceAmount: 2100, paymentAmount: 2100, ytdDifference: 0 },
        { month: 'Sep', invoiceAmount: 1900, paymentAmount: 1500, ytdDifference: 400 },
        { month: 'Oct', invoiceAmount: 2300, paymentAmount: 2300, ytdDifference: 0 },
        { month: 'Nov', invoiceAmount: 1700, paymentAmount: 1200, ytdDifference: 500 },
        { month: 'Dec', invoiceAmount: 1600, paymentAmount: 1600, ytdDifference: 0 }
    ];

    // ... more months ...

    return (

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <BarChart
                dataset={chartDataset}
                xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                series={[
                    { dataKey: 'invoiceAmount', label: 'Invoice Amount', valueFormatter },
                    { dataKey: 'paymentAmount', label: 'Scheduled Payment Amount', valueFormatter },
                    { dataKey: 'ytdDifference', label: 'YTD Difference', valueFormatter },
                ]}
                {...chartSetting}
            />
        </div>

    );
}

