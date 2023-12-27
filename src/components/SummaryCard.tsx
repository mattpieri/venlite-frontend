import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EventNoteIcon from '@mui/icons-material/EventNote';

interface SummaryItem{
    title: string,
    amount?: string,
    change?: string,
    previous?: string,
    due?: string,
    date?: string
}
// Define a mock data array for the summary items
const summaryItems: SummaryItem[] = [
    { title: 'Invoice Amounts', amount: '$5,020', change: 'up', previous: '$4,850 previous month' },
    { title: 'Scheduled Payments', amount: '$6,200', change: 'up', previous: '$5,600 previous period' },
    { title: 'Withdrawals', amount: '$1,180', change: 'down', previous: '$950 previous month' },
    { title: 'Quarterly taxes due', amount: '$4,800', due: 'Due in 7 days' },

];

function SummaryCard({ item }: { item: SummaryItem }) {
    return (
        <Card sx={{ minWidth: 150, m: 1 }}>
            <CardContent>
                <Typography variant="subtitle1">{item.title}</Typography>
                <Typography variant="h5">
                    {item.amount}
                    {item.change === 'up' ? <ArrowUpwardIcon color="success" /> : null}
                    {item.change === 'down' ? <ArrowDownwardIcon color="error" /> : null}
                </Typography>
                {item.previous ? <Typography color="text.secondary">{item.previous}</Typography> : null}
                {item.due ? <Typography color="text.secondary">{item.due}</Typography> : null}
                {item.date ? (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <EventNoteIcon color="action" />
                        <Typography color="text.secondary" sx={{ ml: 0.5 }}>
                            {item.date}
                        </Typography>
                    </Box>
                ) : null}
            </CardContent>
        </Card>
    );
}

function SummaryCardsList() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
            <Grid container>
                {summaryItems.map((item, index) => (
                    <Grid item key={index}>
                        <SummaryCard item={item} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default SummaryCardsList;