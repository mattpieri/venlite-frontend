import React, { useState, useEffect } from 'react';
import {
    Container,
    TextField,
    Button,
    Paper,
    Typography,
} from '@mui/material';

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [newMessage, setNewMessage] = useState('');

    const handleNewMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, newMessage]);
            setNewMessage('');
        }
    };

    useEffect(() => {
        // Scroll to the bottom of the chat when new messages are added
        const chatContainer = document.getElementById('chat-container');
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }, [messages]);

    return (
        <Paper elevation={3} className="chat-container" id="chat-container">
            <Container>
                <div className="chat-messages">
                    {messages.map((message, index) => (
                        <Typography key={index} variant="body1" className="chat-message">
                            {message}
                        </Typography>
                    ))}
                </div>
                <div className="chat-input">
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={handleNewMessageChange}
                    />
                    <br />
                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSendMessage}
                    >
                        Send
                    </Button>
                    <br />
                </div>
                <br />
                <br />

            </Container>
        </Paper>
    );
};

export default Chat;
