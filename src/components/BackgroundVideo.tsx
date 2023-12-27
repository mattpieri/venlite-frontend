import React from 'react';
import Box from '@mui/material/Box';
import ServiceSearchForm from "./VendorSearch";

const BackgroundVideo = () => {
    return (
        <Box sx={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            '& video': {
                position: 'absolute',
                width: '100%',
                left: '50%',
                top: '50%',
                height: '100%',
                objectFit: 'cover',
                transform: 'translate(-50%, -50%)',
                zIndex: -1,
            }
        }}>
            <video autoPlay loop muted style={{ width: '100%', height: '100%' }}>
                <source src="/background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Box sx={{
                position: 'absolute',
                zIndex: 1,
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'common.white',
                // Add more styles for your content here
            }}>
                {/* Content on top of your video goes here */}
                <ServiceSearchForm></ServiceSearchForm>
            </Box>
        </Box>
    );
};

export default BackgroundVideo;
