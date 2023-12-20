import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Rating } from '@mui/material';

// Assuming you have a list of professionals to display
interface Professional {
    id: number;
    name: string;
    rating: number;
    reviewCount: number;
    location: string;
    category: string;
    distance: string;
    bookings: number;
    image: string; // Replace with actual image path
    quoteText: string;
}

interface ProposalComparison {
    id: number;
    budget: number;
    timeline: string;
    termsAndConditions: string;
}

interface Professional {
    id: number;
    name: string;
    rating: number;
    reviewCount: number;
    location: string;
    category: string;
    distance: string;
    bookings: number;
    image: string;
    quoteText: string;
    proposal: Proposal; // Link to the proposal part of the professional
}

interface Proposal {
    budget: number;
    timeline: string; // You could make this a Date or number of days depending on your requirements
    termsAndConditions: string;
}

// Example of a Professional with an embedded proposal
const professionalExample: Professional = {
    id: 1,
    name: "Garage Company LLC",
    rating: 4.96,
    reviewCount: 85,
    location: "Brooklyn, NY",
    category: "Repair",
    distance: "9 miles from Queens",
    bookings: 181,
    image: "garage_1.png", // Replace with actual image path
    quoteText: "Book Garage Company LLC for commercial Garage replacement and installation, we are lic...",
    proposal: {
        budget: 5000, // Example budget in dollars
        timeline: "2 weeks", // Example timeline
        termsAndConditions: "All services provided as per the standard terms and conditions of Garage Company LLC."
    }
};
const ProposalCompare: React.FC = () => {
    return (
        <Grid container spacing={2}>
            {[professionalExample, professionalExample, professionalExample, professionalExample].map((pro) => (
                <Grid item key={pro.id} xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image={pro.image}
                            alt={pro.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {pro.name}
                            </Typography>
                            <Rating name="read-only" value={pro.rating} readOnly />
                            <Typography variant="body2" color="text.secondary">
                                {`${pro.reviewCount} reviews`}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {pro.location}
                            </Typography>
                            {/* ... other fields like category, distance, etc. */}
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default ProposalCompare;
