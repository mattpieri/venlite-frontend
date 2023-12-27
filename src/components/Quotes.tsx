import React from 'react';
import {
    Box,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Typography,
    Paper, Button
} from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import Divider from "@mui/material/Divider";
import {useHistory} from "react-router-dom";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";

interface Event {
    id: number;
    title: string;
    dateSent: string;
    eventType: string;
    eventDate: string;
    imageUrl: string;
    status: 'available' | 'unavailable';
}




const eventsData: Event[] = [
    // Populate with your actual events data
    {
        id: 1,
        title: 'Install a Garage in Building XYZ',
        dateSent: 'Aug 1',
        eventType: 'Brooklyn Garage Masters',
        eventDate: 'Sat, Aug 5, 2023',
        imageUrl: 'garage_1.png', // Replace with the actual path to the image
        status: 'unavailable',
    }
    /*{
        id: 1,
        title: 'Garage Experts Inc.',
        dateSent: 'Aug 1',
        eventType: 'Property Manager LLC.',
        eventDate: 'Sat, Aug 5, 2023',
        imageUrl: 'garage_2.png', // Replace with the actual path to the image
        status: 'unavailable',
    },
    {
        id: 1,
        title: 'Citywide Garage Solutions',
        dateSent: 'Aug 1',
        eventType: 'Property Manager LLC.',
        eventDate: 'Sat, Aug 5, 2023',
        imageUrl: 'garage_3.png', // Replace with the actual path to the image
        status: 'unavailable',
    },
    {
        id: 1,
        title: 'Brooklyn Garage Masters',
        dateSent: 'Aug 1',
        eventType: 'Property Manager LLC.',
        eventDate: 'Sat, Aug 5, 2023',
        imageUrl: 'garage_4.png', // Replace with the actual path to the image
        status: 'unavailable',
    },*/
    // ... other events
];

function EventList() {

    const handleSelect = () => {
        history.push('/quote');
    }

    const history = useHistory();

    return (
        <Paper style={{ padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="h4" style={{paddingLeft:'5px'}}>Job Posts</Typography>
                <Button
                        variant="contained"
                        startIcon={<AddTwoToneIcon style={{ fontSize: 'small' }} />}

                >
                    Add Job Post
                </Button>
            </div>

            <List>
                {eventsData.map((event, index) => (
                    <React.Fragment key={event.id}>
                        <ListItem alignItems="flex-start"  >
                            <ListItemAvatar>
                                <Avatar src={"/" + event.imageUrl} />
                            </ListItemAvatar>
                            <ListItemText style={{cursor: 'pointer' }} onClick={handleSelect}
                                primary={event.title}
                                secondary={
                                    <>
                                        <Typography component="span" variant="body2" color="text.primary">
                                            Sent: {event.dateSent}
                                        </Typography>
                                        {" — "}{event.eventType}{" — "}{event.eventDate}
                                    </>
                                }
                            />

                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="status">
                                    {event.status === 'available' ? (
                                        <EventAvailableIcon color="primary" />
                                    ) : (
                                        <EventBusyIcon color="error" />
                                    )}
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        {/* Add the Divider conditionally based on index */}
                        {index !== eventsData.length - 1 && <Divider variant="inset" component="li" />}
                    </React.Fragment>
                ))}
            </List>
        </Paper>
    );
}

export default EventList;
