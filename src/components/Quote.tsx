import React, {useState} from 'react';
import {
    Box,
    Card,
    CardContent,
    CardActions,
    Button,
    Typography,
    TextField,
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Grid,
    Paper,
    Divider,
    Stack,
    IconButton, StepButton
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import SendIcon from '@mui/icons-material/Send';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ListItemIcon from "@mui/material/ListItemIcon";
import MessageItem from "./Messages";
import ContractEdit from "./ContractEdit";
import Stepper from "@mui/material/Stepper";
import HorizontalLinearStepper from "./Stepper";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ProfessionalsList from "./VendorsSearchResult";
import ProposalCompare from "./ProposalCompare";
import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Minimize';

// Define the vendor and event info data structures
interface VendorInfo {
    name: string;
    location: string;
    rating: number;
    reviewCount: number;
    imageUrl: string;
}

interface EventInfo {
    date: string;
    time: string;
    location: string;
}


const vendorInfo: VendorInfo = {
    name: 'Property Manager LLC',
    location: 'New York City, NY',
    rating: 4.96,
    reviewCount: 6,
    imageUrl: '/garage_15346.png', // Replace with the path to the vendor's image
};

const eventInfo: EventInfo = {
    date: 'Sat, August 5, 2023',
    time: '7:30 PM – 8:30 PM (1 hour)',
    location: '199 Bowery, New York, NY 10002',
};
const steps = ['View Job Post', 'Invite Talent', 'Review Proposals', 'Contract Negotiation', 'Accept'];
function MessagingInterface() {

    const [activeStep, setActiveStep] = React.useState(0);

    const listItems = [
        "Design and install a complete HVAC system suitable for the commercial building.",
        "Ensure the system meets the specific needs of the building, including energy efficiency and capacity requirements.",
        "Coordinate with our team for seamless integration into the existing building infrastructure.",
        "Adhere to all local building codes, regulations, and safety standards.",
        "Complete the project within the set timeline and budget."
    ];

    const vendorItems = [
        "Must have significant experience in commercial HVAC installations.",
        "Should possess all necessary licenses and insurance.",
        "Must provide references from previous similar projects.",
        "Ability to work collaboratively with our management team.",
        "Strong commitment to safety and quality workmanship."
    ];
    const items = [
        { id: 0, name: 'Frank Flushing', jobTitle: 'CEO', avatarUrl: '/path/to/alice.jpg' },
        { id: 1, name: 'Harold Hills', jobTitle: 'Product Manager', avatarUrl: '/path/to/bob.jpg' },
        { id: 2, name: 'Alex Astoria', jobTitle: 'Account Manager', avatarUrl: '/path/to/bob.jpg' },
        // ... more items
    ];

    const [message, setMessage] = useState('What would you like to say? ');


    const sendMessage = () => {
        console.log(message); // Here you would handle the message sending logic
        setMessage(''); // Reset message input after sending
    };

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const handleSendMessage = () => {
        // Handle the message sending logic here
        console.log(message);
        setMessage(''); // Clear the input field after sending the message
    };

    const handleClose = () => {
        // Handle the chat box closing logic here
        console.log('Chat closed');
    };


    const [isExpanded, setIsExpanded] = useState(true); // State to track if chat box is expanded


    const handleToggleExpand = (chatId: number) => {
        // Create a new array with the 'isExpanded' flag toggled for the chat with the given ID
        const updatedChats = chats.map(chat => {
            if (chat.id === chatId) {
                return { ...chat, isExpanded: !chat.isExpanded };
            }
            return chat;
        });

        // Update the state with the new chats array
        setChats(updatedChats);
    };

    const [chats, setChats] = useState([
        { id: 0, name: 'Frank Flushing', message: 'This is a sample message', isExpanded: false },
        // ... you can add more chats here
    ]);

    const handleRemoveChat = (chatId: number) => {
        // Filter out the chat with the matching id
        setChats(chats.filter(chat => chat.id !== chatId));
    };

    const handleAddChat = (itemId: number) => {
        // Retrieve the name from items using the itemId
        const newName = items[itemId].name;

        // Create a new chat object
        const newChat = {
            id: chats.length, // Assuming id should be the next sequential number
            name: newName,
            message: 'This is a sample message', // You can customize this message
            isExpanded: false // Default state for expansion can be set as false
        };

        // Append the new chat to the existing chats array
        setChats([...chats, newChat]);
    };

    return (
        <div>
            <Paper sx={{ mb: 1, p: 2 }} >
                <Typography variant="h4" sx={{ mb: 2 }}>
                    Install a Garage in Building XYZ
                </Typography>
                <Box sx={{ width: '100%' }}>
                    <Stepper nonLinear  activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps: { completed?: boolean } = {};
                            const labelProps: {
                                optional?: React.ReactNode;
                            } = {};
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepButton color="inherit" onClick={handleStep(index)}>
                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                    </StepButton>
                                </Step>
                            );
                        })}
                    </Stepper>
                </Box>
            </Paper>
            {activeStep === 0 && (<Paper sx={{ mb: 1, p: 2 }}>
                <Typography gutterBottom variant="h4" component="div">
                    Job Post
                </Typography>
                <List>
                    {/*<ListItem>
                                <ListItemIcon>
                                    <EventIcon />
                                </ListItemIcon>
                                <ListItemText primary={eventInfo.date} />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <AccessTimeIcon />
                                </ListItemIcon>
                                <ListItemText primary={eventInfo.time} />
                            </ListItem>*/}
                    <ListItem>
                        <ListItemIcon>
                            <LocationOnIcon />
                        </ListItemIcon>
                        <ListItemText primary={eventInfo.location} />
                    </ListItem>
                </List>
                <Typography gutterBottom variant="h5" component="div">
                    Project Overview
                </Typography>

                <Typography variant="body1" sx={{ mb: 2 }}>
                    We are a property management company currently overseeing a commercial building project. We are seeking experienced and reliable HVAC installation vendors to undertake the installation of a comprehensive heating, ventilation, and air conditioning system in our property. The ideal vendor should have a proven track record in successfully handling similar projects.
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    Scope of Work
                </Typography>
                <List>
                    {listItems.map((item, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <FiberManualRecordIcon sx={{ fontSize: '0.6rem' }} />

                            </ListItemIcon>
                            <Typography variant="body1">{item}</Typography>
                        </ListItem>
                    ))}
                </List>
                <Typography gutterBottom variant="h5" component="div">
                    Talent Requirements
                </Typography>
                <List>
                    {vendorItems.map((item, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <FiberManualRecordIcon sx={{ fontSize: '0.6rem' }} />
                            </ListItemIcon>
                            <Typography variant="body1">{item}</Typography>
                        </ListItem>
                    ))}
                </List>


            </Paper>)}
            {activeStep === 1 && (<Paper sx={{ mb: 1, p: 2 }}>
                <Typography gutterBottom variant="h4" component="div">
                    Invite Talent
                </Typography>


                <TextField  fullWidth sx={{ mb: 2 }} label="Search" id="fullWidth" />


                <ProfessionalsList></ProfessionalsList>




            </Paper>)}
            {activeStep === 2 && (
                <div>
                                <ProposalCompare></ProposalCompare>

                </div>

            )}
            {activeStep === 3 && (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8} >
                            <Paper sx={{ mb: 1, p: 2 }}>

                                <ContractEdit></ContractEdit>


                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Vendor Info
                                    </Typography>
                                    <Avatar
                                        alt={'Citywide Garage Solutions'}
                                        src={'/garage_3.png'}
                                        sx={{ width: 150, height: 150 }}
                                    />
                                    <Typography variant="h6">{'Citywide Garage Solutions'}</Typography>
                                    <Typography variant="body2">{'Queens, NY'}</Typography>
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <StarIcon color="primary" />
                                        <Typography variant="body2">
                                            {vendorInfo.rating} ({vendorInfo.reviewCount} reviews)
                                        </Typography>
                                    </Stack>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">View Profile</Button>
                                    <Button size="small">Write a review</Button>
                                </CardActions>
                            </Card>

                            <Paper sx={{my: 2, p:2}}>
                                <List>
                                    {items.map(item => (
                                        <ListItem key={item.id}>
                                            <ListItemAvatar>
                                                <Avatar src={item.avatarUrl} />
                                            </ListItemAvatar>
                                            <ListItemText primary={item.name} secondary={item.jobTitle} />
                                            <Button variant="contained" color="primary" onClick={()=>handleAddChat(item.id)}>
                                                Message
                                            </Button>
                                        </ListItem>
                                    ))}
                                </List>
                            </Paper>



                            <Paper sx={{ my: 2,  p: 2 }}>

                                {/* ... */}
                                <MessageItem></MessageItem>
                                <Divider sx={{ my: 2 }} />
                                {/* Here you would add the quote information and other messages */}
                                {/* ... */}
                            </Paper>
                            {chats.map((chat) => (
                                <React.Fragment key={chat.id}>
                                    <Box sx={{
                                        position: 'fixed',
                                        bottom: 0,
                                        right: 80 + ( 320 * chat.id) ,
                                        width: 300, // Width of the chat box
                                        height: chat.isExpanded ? 500 : 72, // Height of the chat box
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                        <Paper elevation={3} sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: '100%',
                                            overflow: 'hidden'
                                        }}>
                                            {/* Header */}
                                            <Box sx={{ p: 2, display: 'flex', alignItems: 'center', backgroundColor: '#d3d0cb' }}>
                                                <Avatar sx={{ marginRight: 2 }}>D</Avatar>
                                                <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>{chat.name}</Typography>

                                                <IconButton onClick={() => handleToggleExpand(chat.id)}>
                                                    <MinimizeIcon/>
                                                </IconButton>

                                                <IconButton onClick={() => handleRemoveChat(chat.id)}>
                                                    <CloseIcon />
                                                </IconButton>
                                            </Box>

                                            {/* Message Area */}
                                            <Box sx={{ p: 2, flexGrow: 1, overflow: 'auto' }}>
                                                <Typography variant="body1">
                                                    Hi Matthew,
                                                    <br />
                                                    {/* Add the rest of the message here */}
                                                </Typography>
                                            </Box>

                                            {/* Reply Area */}
                                            <Box sx={{ display: 'flex', alignItems: 'center', padding: 2, backgroundColor: '#f5f5f5' }}>
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    variant="outlined"
                                                    placeholder="Type a message..."
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                                    sx={{ marginRight: 1 }}
                                                />
                                                <IconButton color="primary" onClick={handleSendMessage}>
                                                    <SendIcon />
                                                </IconButton>
                                            </Box>
                                        </Paper>
                                    </Box>
                                </React.Fragment>
                            ))}


                        </Grid>
                    </Grid>
                </Box>
            )}


        </div>
    );
}

export default MessagingInterface;
