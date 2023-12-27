import React from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Chip } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';

// Mock data - replace with actual data from your application
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
}

const professionals: Professional[] = [
    {
        "id": 1,
        "name": "Garage Company LLC",
        "rating": 4.96,
        "reviewCount": 85,
        "location": "Brooklyn, NY",
        "category": "Repair",
        "distance": "9 miles from Queens",
        "bookings": 181,
        "image": "garage_1.png", // Replace with actual image path
        "quoteText": "Book Garage Company LLC for commercial Garage replacement and installation, we are lic..."
    },
    {
        "id": 2,
        "name": "Garage Experts Inc.",
        "rating": 4.85,
        "reviewCount": 72,
        "location": "Manhattan, NY",
        "category": "Maintenance",
        "distance": "5 miles from Queens",
        "bookings": 215,
        "image": "garage_2.png", // Replace with actual image path
        "quoteText": "Choose Garage Experts Inc. for all your garage maintenance needs in Manhattan."
    },
    {
        "id": 3,
        "name": "Citywide Garage Solutions",
        "rating": 4.90,
        "reviewCount": 97,
        "location": "Queens, NY",
        "category": "Installation",
        "distance": "2 miles from Brooklyn",
        "bookings": 130,
        "image": "garage_3.png", // Replace with actual image path
        "quoteText": "Citywide Garage Solutions offers top-notch garage installation services in Queens."
    },
    {
        "id": 4,
        "name": "Brooklyn Garage Masters",
        "rating": 4.78,
        "reviewCount": 64,
        "location": "Bronx, NY",
        "category": "Repair",
        "distance": "7 miles from Manhattan",
        "bookings": 146,
        "image": "garage_4.png", // Replace with actual image path
        "quoteText": "For reliable garage repairs, trust Brooklyn Garage Masters to get the job done."
    },
    {
        "id": 5,
        "name": "Queens Garage Pros",
        "rating": 4.92,
        "reviewCount": 88,
        "location": "Queens, NY",
        "category": "Maintenance",
        "distance": "3 miles from Brooklyn",
        "bookings": 198,
        "image": "garage_5.png", // Replace with actual image path
        "quoteText": "Queens Garage Pros specializes in garage maintenance services for your convenience."
    },
    {
        "id": 6,
        "name": "Manhattan Garage Gurus",
        "rating": 4.89,
        "reviewCount": 79,
        "location": "Manhattan, NY",
        "category": "Installation",
        "distance": "6 miles from Queens",
        "bookings": 162,
        "image": "garage_6.png", // Replace with actual image path
        "quoteText": "Experience expert garage installations with Manhattan Garage Gurus."
    },
    {
        "id": 7,
        "name": "Bronx Garage Repairs",
        "rating": 4.81,
        "reviewCount": 69,
        "location": "Bronx, NY",
        "category": "Repair",
        "distance": "8 miles from Queens",
        "bookings": 175,
        "image": "garage_7.png", // Replace with actual image path
        "quoteText": "Bronx Garage Repairs is your go-to choice for garage repair services in the Bronx."
    },
    {
        "id": 8,
        "name": "Brooklyn Garage Installations",
        "rating": 4.94,
        "reviewCount": 93,
        "location": "Brooklyn, NY",
        "category": "Installation",
        "distance": "4 miles from Queens",
        "bookings": 203,
        "image": "garage_8.png", // Replace with actual image path
        "quoteText": "Upgrade your garage with professional installations by Brooklyn Garage Installations."
    }
]

function ProfessionalCard({ professional }: { professional: Professional }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={'/' + professional.image}
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {professional.name}
                </Typography>
                <Box display="flex" alignItems="center">
                    <StarRateIcon color="primary" />
                    <Typography variant="body2" color="text.secondary">
                        {professional.rating} ({professional.reviewCount} reviews)
                    </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                    {professional.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {professional.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {professional.distance}
                </Typography>
                <Typography variant="body2">
                    {professional.bookings} Verified Bookings
                </Typography>
                <Typography variant="body2">
                    {professional.quoteText}
                </Typography>
            </CardContent>

            <Box sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
                <Button size="small">Watch</Button>
                <Button size="small" variant="contained" color="primary">
                    Invite
                </Button>
            </Box>
        </Card>
    );
}

function ProfessionalsList() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {professionals.map((professional) => (
                    <Grid item xs={12} sm={6} md={4} key={professional.id}>
                        <ProfessionalCard professional={professional} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProfessionalsList;
