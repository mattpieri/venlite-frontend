import React from 'react';
import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    Tab,
    Tabs,
    Typography,
    Link
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function ProjectShowcase() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
        setValue(newValue);
    };

    return (
        <Paper style={{paddingTop: '50px', paddingBottom: '50px'}}>
        <Container component="main">
            <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
                Project Showcase
            </Typography>
            <Typography variant="body1">
                Feature projects you're especially proud of — and that showcase your business's expertise. Adding
                photos can increase your contacts from homeowners by up to 11%.
            </Typography>
            <Box sx={{ width: '100%', bgcolor: 'background.paper', my: 3 }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Published" />
                    <Tab label="Drafts" />
                </Tabs>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper
                        variant="outlined"
                        sx={{
                            height: 140,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            '&:hover': {
                                backgroundColor: 'action.hover',
                            },
                        }}
                    >
                        <Button startIcon={<AddCircleOutlineIcon />} onClick={() => alert('Add a project')}>
                            Add a project
                        </Button>
                    </Paper>
                </Grid>
                {/* Additional project items would be mapped here */}
            </Grid>
            <Typography variant="body2" sx={{ mt: 2 }}>
                Want to upload a single photo or a team headshot? Head to{' '}
                <Link href="#" onClick={() => alert('Redirect to photos')}>
                    photos.
                </Link>
            </Typography>
        </Container>
        </Paper>
    );
}

export default ProjectShowcase;
