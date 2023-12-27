import React, {useState} from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Rating,
    Typography,
    CardMedia,
    CardContent,
    Box,
    Button,
    Card,
    List,
    ListItem,
    ListItemText,
    Grid,
    Avatar,
    Stack,
    CardActions, Divider, ListItemAvatar, IconButton, TextField, Tooltip,
} from '@mui/material';
import StarRateIcon from "@mui/icons-material/StarRate";
import ListItemIcon from "@mui/material/ListItemIcon";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import StarIcon from "@mui/icons-material/Star";
import MessageItem from "./Messages";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {Label} from "@mui/icons-material";
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
    lastContractDate: string;
    referredBy:string;
    contractCount: string;
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
    lastContractDate: string;
    referredBy:string;
    contractCount: string;
}

// Example of a Professional with an embedded proposal
const professionals: Professional[] = [{
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
        termsAndConditions: "All services provided as per the standard terms and conditions.",
        lastContractDate: "",
        referredBy: "Joseph Saputo",
        contractCount: "0"
    }
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
        "quoteText": "Citywide Garage Solutions offers top-notch garage installation services in Queens.",
    proposal: {
        budget: 4000, // Example budget in dollars
        timeline: "1 weeks", // Example timeline
        termsAndConditions: "All services provided as per the standard terms and conditions.",
        lastContractDate: "5/10/2024",
        referredBy: "",
        contractCount: "2"
    }
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
        "quoteText": "Choose Garage Experts Inc. for all your garage maintenance needs in Manhattan.",
        proposal: {
            budget: 3500, // Example budget in dollars
            timeline: "3 weeks", // Example timeline
            termsAndConditions: "All services provided as per the standard terms and conditions.",
            lastContractDate: "10/20/2024",
            referredBy: "",
            contractCount: "5"
        }


}];


const ProposalComparisonTable: React.FC = () => {

    const [activeProposal, setActiveProposal] = React.useState(-1);

    const getColumnColor = (index: number) => ({
        backgroundColor: index % 2 === 0 ? '#ecebeb' : '', // Alternating color
    });

    const handleOpenProposal = (professionalId: number) => {
        // Implement your logic to open proposal details
        console.log('Open proposal for professional with ID:', professionalId);

        setActiveProposal(professionalId);
    };

    const understandingItems = [
        "Detailed understanding of the project requirements.",
        "Your approach to designing and installing the garage.",
        "How you plan to coordinate with the property management team and integrate into the existing building infrastructure.",
        "Steps to ensure compliance with local building codes, regulations, and safety standards.",
        "A list of specific deliverables, including design plans, material specifications, and construction milestones."
    ];

    const timeLineItems = [
        "A detailed project timeline from commencement to completion.",
        "Include key milestones and deliverable dates.",
    ];

    const budgetPricingItems = [
        "Detailed pricing for the project, including material, labor, and other costs.",
        "Terms of payment and any conditions.",
    ];

    const termsConditionsItems = [
        "Outline the general terms and conditions of the proposal, including warranty information, post-installation services, and maintenance.",
    ];

    const cancel = () => {
        // Implement your logic to open proposal details

        setActiveProposal(-1);
    };

    interface VendorInfo {
        name: string;
        location: string;
        rating: number;
        reviewCount: number;
        imageUrl: string;
    }

    const vendorInfo: VendorInfo = {
        name: 'Property Manager LLC',
        location: 'New York City, NY',
        rating: 4.96,
        reviewCount: 6,
        imageUrl: '/garage_15346.png', // Replace with the path to the vendor's image
    };

    const getOrDefault= (professionalId: number) => {
        // Assuming 'professionals' is an object with IDs as keys. If it's an array, you'll need to find the professional by ID first.
        const test =  professionals[activeProposal]

        if (test) {
            // Implement your logic to open proposal details with the activeProposal
            return activeProposal
        } else {
            // Handle the case where there is no proposal or the professional wasn't found
           return 1
        }
    };

    const items = [
        { id: 0, name: 'Frank Flushing', jobTitle: 'CEO', avatarUrl: '/path/to/alice.jpg' },
        { id: 1, name: 'Harold Hills', jobTitle: 'Product Manager', avatarUrl: '/path/to/bob.jpg' },
        { id: 2, name: 'Alex Astoria', jobTitle: 'Account Manager', avatarUrl: '/path/to/bob.jpg' },
        // ... more items
    ];


    const [chats, setChats] = useState([
        { id: 0, name: 'Frank Flushing', message: 'This is a sample message', isExpanded: false },
        // ... you can add more chats here
    ]);
    const [message, setMessage] = useState('What would you like to say? ');

    const handleRemoveChat = (chatId: number) => {
        // Filter out the chat with the matching id
        setChats(chats.filter(chat => chat.id !== chatId));
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
            {activeProposal === -1 && (<TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            {professionals.map((professional, index) => (
                                <TableCell key={professional.id} style={getColumnColor(index)}>
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
                                    </CardContent>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">Budget</TableCell>
                            {professionals.map((professional, index) => (
                                <TableCell key={professional.id} align="center" style={getColumnColor(index)}>
                                    ${professional.proposal.budget}
                                </TableCell>
                            ))}
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Timeline</TableCell>
                            {professionals.map((professional, index) => (
                                <TableCell key={professional.id} align="center" style={getColumnColor(index)}>
                                    {professional.proposal.timeline}
                                </TableCell>
                            ))}
                        </TableRow>

                        <TableRow>
                            <TableCell component="th" scope="row">Referred By</TableCell>
                            {professionals.map((professional, index) => (
                                <TableCell key={professional.id} align="center" style={getColumnColor(index)}>
                                    {professional.proposal.referredBy}
                                </TableCell>
                            ))}
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row"  >
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                Contract Count
                                <Tooltip title={"Total number of contracts with vendor"}>
                                    <IconButton size="small" style={{ marginLeft: 4 }}>
                                        <InfoOutlinedIcon fontSize="inherit" />
                                    </IconButton>
                                </Tooltip>
                            </div>
                            </TableCell>
                            {professionals.map((professional, index) => (
                                <TableCell key={professional.id} align="center" style={getColumnColor(index)}>
                                    {professional.proposal.contractCount}
                                </TableCell>
                            ))}
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row"  >
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    Last Contract Date
                                    <Tooltip title={"Start date of most recent active contract with vendor"}>
                                        <IconButton size="small" style={{ marginLeft: 4 }}>
                                            <InfoOutlinedIcon fontSize="inherit" />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            </TableCell>
                            {professionals.map((professional, index) => (
                                <TableCell key={professional.id} align="center" style={getColumnColor(index)}>
                                    {professional.proposal.lastContractDate}
                                </TableCell>
                            ))}
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Terms and Conditions</TableCell>
                            {professionals.map((professional, index) => (
                                <TableCell key={professional.id} align="center" style={getColumnColor(index)}>
                                    {professional.proposal.termsAndConditions}
                                </TableCell>
                            ))}
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row"  >
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    Type
                                    <Tooltip title={"Broker or Franchised Vendor"}>
                                        <IconButton size="small" style={{ marginLeft: 4 }}>
                                            <InfoOutlinedIcon fontSize="inherit" />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            </TableCell>
                            {professionals.map((professional, index) => (
                                <TableCell key={professional.id} align="center" style={getColumnColor(index)}>
                                    {'Franchised Vendor'}
                                </TableCell>
                            ))}
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row"></TableCell>
                            {professionals.map((professional, index) => (
                                <TableCell key={professional.id} align="center" style={getColumnColor(index)}>
                                    <Button
                                        variant="contained"
                                        onClick={() => handleOpenProposal(professional.id)}
                                    >
                                        View Proposal
                                    </Button>
                                </TableCell>
                            ))}
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>)}
            {activeProposal >= 0 && (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8} >

                <Paper sx={{ mb: 1, p: 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant="h4" >Proposal</Typography>
                        <Button onClick={cancel}
                                variant="contained"
                                startIcon={<ArrowBackIosIcon style={{ fontSize: 'small' }} />}

                        >
                            Back
                        </Button>
                    </div>
                        <Typography gutterBottom variant="h5" component="div">
                        Project Understanding and Approach
                        </Typography>
                        <List>
                    {understandingItems.map((item, index) => (
                        <ListItem key={index}>
                    <ListItemIcon>
                        <FiberManualRecordIcon sx={{ fontSize: '0.6rem' }} />

                    </ListItemIcon>
                    <Typography variant="body1">{item}</Typography>
                </ListItem>
                ))}
                </List>
                <Typography gutterBottom variant="h5" component="div">
                    Timeline
                </Typography>
                <List>
                    {timeLineItems.map((item, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <FiberManualRecordIcon sx={{ fontSize: '0.6rem' }} />

                            </ListItemIcon>
                            <Typography variant="body1">{item}</Typography>
                        </ListItem>
                    ))}
                </List>
                <Typography gutterBottom variant="h5" component="div">
                    Budget and Pricing
                </Typography>
                <List>
                    {budgetPricingItems.map((item, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <FiberManualRecordIcon sx={{ fontSize: '0.6rem' }} />

                            </ListItemIcon>
                            <Typography variant="body1">{item}</Typography>
                        </ListItem>
                    ))}
                </List>
                <Typography gutterBottom variant="h5" component="div">
                    Terms and Conditions
                </Typography>
                <List>
                    {termsConditionsItems.map((item, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <FiberManualRecordIcon sx={{ fontSize: '0.6rem' }} />

                            </ListItemIcon>
                            <Typography variant="body1">{item}</Typography>
                        </ListItem>
                    ))}
                </List>
                </Paper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Vendor Info
                                    </Typography>
                                    <Avatar
                                        alt={professionals[getOrDefault(activeProposal)].name}
                                        src={professionals[getOrDefault(activeProposal)].image}
                                        sx={{ width: 150, height: 150 }}
                                    />
                                    <Typography variant="h6">{professionals[getOrDefault(activeProposal)].name}</Typography>
                                    <Typography variant="body2">{professionals[getOrDefault(activeProposal)].location}</Typography>
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <StarIcon color="primary" />
                                        <Typography variant="body2">
                                            {professionals[1].rating} ({professionals[getOrDefault(activeProposal)].reviewCount} reviews)
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
};

export default ProposalComparisonTable;
