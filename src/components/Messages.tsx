// ... other imports and code
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
    IconButton
} from '@mui/material';
import SendIcon from "@mui/icons-material/Send";


interface Message {
    id: number;
    from: string;
    avatarUrl: string;
    content: string;
    date: string;
    time: string;
    isFromVendor: boolean
}

const messages = [
    {
        id: 8,
        from: "User",
        avatarUrl: "path/to/avatar2.jpg",
        content: "That works for me. Please proceed with preparing the proposal, and we can discuss further details before finalizing the contract.",
        date: "Aug 7",
        time: "2:20 pm",
        isFromVendor: false,
    },
    {
        id: 7,
        from: "Garage Company LLC",
        avatarUrl: "/garage_1.png",
        content: "Certainly! We typically require a deposit upfront to secure the project. The final payment is due upon completion and your satisfaction with our work. We'll provide all these details in the proposal.",
        date: "Aug 7",
        time: "10:45 am",
        isFromVendor: true,
    },
    {
        id: 6,
        from: "User",
        avatarUrl: "path/to/avatar2.jpg",
        content: "Sounds good. I'd like to see the proposal before finalizing the contract. Can you also clarify your payment terms?",
        date: "Aug 6",
        time: "3:15 pm",
        isFromVendor: false,
    },
    {
        id: 5,
        from: "Garage Company LLC",
        avatarUrl: "/garage_1.png",
        content: "Great! We can begin next week. Regarding the contract, we will provide a detailed proposal outlining the scope of work, timeline, and cost. Once you review and approve it, we can proceed.",
        date: "Aug 5",
        time: "9:30 am",
        isFromVendor: true,
    },
    {
        id: 4,
        from: "User",
        avatarUrl: "path/to/avatar2.jpg",
        content: "I'd like to start as soon as possible. What are your terms and conditions for the contract?",
        date: "Aug 6",
        time: "3:15 pm",
        isFromVendor: false,
    },
    {
        id: 3,
        from: "Garage Company LLC",
        avatarUrl: "/garage_1.png",
        content: "Thank you for sharing your requirements. We can certainly help with that. When would you like us to start the project?",
        date: "Aug 2",
        time: "8:52 pm",
        isFromVendor: true,
    },
    {
        id: 2,
        from: "User",
        avatarUrl: "path/to/avatar2.jpg",
        content: "Hi, I need a complete garage renovation. This includes repairing the doors, installing new shelving, and adding proper lighting.",
        date: "Jul 30",
        time: "8:52 pm",
        isFromVendor: false,
    },
    {
        id: 1,
        from: "Garage Company LLC",
        avatarUrl: "/garage_1.png",
        content: "Hello! Thank you for considering our garage service. What specific services are you looking for?",
        date: "Aug 2",
        time: "8:52 pm",
        isFromVendor: true,
    },
];


function MessageItem() {
    // ... other parts of the component
    const [newMessage, setNewMessage] = useState('');
    const [messageList, setMessageList] = useState(messages);

    const handleSendMessage = () => {
        if (newMessage.trim() === '') {
            return; // Don't send empty messages
        }

        const currentDate = new Date();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const amPm = hours >= 12 ? 'PM' : 'AM';
        const paddedHours = hours % 12 === 0 ? 12 : hours % 12; // Convert 0 to 12 for 12 AM
        const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

        const newMessageItem = {
            id: messageList.length + 1,
            from: 'User',
            avatarUrl: 'path/to/avatar2.jpg',
            content: newMessage,
            date: `${currentDate.toLocaleString('default', { month: 'short' })} ${currentDate.getDate()}`,
            time: `${paddedHours}:${paddedMinutes} ${amPm}`,
            isFromVendor: false,
        };

        setMessageList((prevMessages) => [newMessageItem, ...prevMessages]);

        setNewMessage('');
    };

    return (
        <Box>
            <TextField
                fullWidth
                multiline
                placeholder="Send Garage Company LLC a message."
                minRows={3}
                margin="normal"
                variant="outlined"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
            />
            <div style={{ display: 'flex', justifyContent: 'right' }}>
                <Button variant="contained" startIcon={<SendIcon />} onClick={handleSendMessage}>
                    Send
                </Button>
            </div>
        <Box sx={{ display: 'flex', justifyContent: 'left', height: '1000px',overflow: 'auto', mt:2 }}>

            <List >
                {messageList.map((message) => (
                    <React.Fragment key={message.id}>
                        <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
                            <ListItemAvatar>
                                <Avatar src={message.avatarUrl} alt={message.from} />
                            </ListItemAvatar>
                            <Paper sx={{ order: message.isFromVendor ? 1 : -1, mx: 4, flex: 1 }}>
                            <ListItem alignItems="flex-start" sx={{my:1}}>
                                <ListItemText
                                    secondary={
                                        <>
                                            <Typography component="span" variant="body2" color="text.primary">
                                                {message.content}
                                            </Typography>
                                        </>
                                    }
                                />
                            </ListItem>
                            </Paper>
                             <Box sx={{ display: 'flex', alignItems: 'left', my: 1,  flexDirection: 'column'}}>
                                <Typography component="span" variant="caption" color="text.secondary">
                                    {message.date}
                                </Typography>
                                <Typography component="span" variant="caption" color="text.secondary">
                                    {message.time}
                                </Typography>
                            </Box>
                        </Box>
                    </React.Fragment>
                ))}
            </List>
        </Box>
        </Box>

    );
}

export default MessageItem;
