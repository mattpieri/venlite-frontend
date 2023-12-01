import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Dashboard from "./Dashboard";
import CustomTable from "./Dashboard";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Selection from "./Selection";
import Auth from "../containers/Login/Auth";
import ContractPage from "./ContractPage";
import ProjectTable from "./ProjectsTable";
import FolderCopyTwoToneIcon from '@mui/icons-material/FolderCopyTwoTone';
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import HailTwoToneIcon from '@mui/icons-material/HailTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import RequestQuoteTwoToneIcon from '@mui/icons-material/RequestQuoteTwoTone';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';
import RoofingTwoToneIcon from '@mui/icons-material/RoofingTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import HubTwoToneIcon from '@mui/icons-material/HubTwoTone';
import VendorTable from "./VendorList";
import {FormControlLabel, Switch as MaterialSwitch, useTheme} from '@mui/material';
import {getCSS} from "../themes/themeUtils";
import {useEffect} from "react";
const drawerWidth = 240;

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window?: () => Window;
    onThemeToggle: (name: string) => void; // Function to toggle the theme
}

const label = { inputProps: { 'aria-label': 'Switch demo' } };
export default function ResponsiveDrawer(props: Props) {
    const { window, onThemeToggle } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [mode, setMode] = React.useState("Client");

    const handleChange  = (event: React.ChangeEvent<HTMLInputElement>) =>{
        if(event.target.checked){
            setMode("Client")
        } else {
            setMode("Vendor")
        }
    }

    const [theme, setTheme] = React.useState('day'); // Default theme

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        onThemeToggle(theme);
    };

    useEffect(() => {
        const bodyElement = document.body;
        if (theme === 'dark') {
            bodyElement.classList.add('dark-mode');
        } else {
            bodyElement.classList.remove('dark-mode');
        }
    }, [theme]);


    const linkStyle = {
        textDecoration: 'none',
        color: useTheme().palette.text.primary, // Use the primary text color from the theme
    };


    const drawer = (
        <div>
            <FormControlLabel style={{paddingLeft: '10px'}}
                              control={
                                  <MaterialSwitch {...label} defaultChecked  onChange={handleChange}
                                                  color="secondary" />
                              }
                              label={mode}
            />
            <FormControlLabel style={{paddingLeft: '10px'}}
                              control={
                                  <MaterialSwitch {...label} defaultChecked  onChange={toggleTheme}
                                                  color="primary" />
                              }
                              label={theme}
            />
            <Toolbar />
            <Divider />
            <List>
                    <ListItem key={'Home'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <RoofingTwoToneIcon />
                            </ListItemIcon>
                            <Link to="/" style={linkStyle}>
                                <ListItemText primary="Home" />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={'Profile'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PersonOutlineTwoToneIcon />
                            </ListItemIcon>
                            <Link to="/projects" style={linkStyle}>
                                <ListItemText primary="Profile" />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={'Vendor Hub'} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <HubTwoToneIcon />
                            </ListItemIcon>
                            <Link to="/projects" style={linkStyle}>
                                <ListItemText primary={(mode==='Client')? "Vendor Hub" : "Client Hub" }/>
                            </Link>
                        </ListItemButton>
                    </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem key={'Contracts'} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ArticleTwoToneIcon />
                        </ListItemIcon>
                        <Link to="/" style={linkStyle}>
                            <ListItemText primary="Contracts" />
                        </Link>
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Projects'} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <FolderCopyTwoToneIcon />
                        </ListItemIcon>
                        <Link to="/projects" style={linkStyle}>
                            <ListItemText primary="Projects" />
                        </Link>
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Vendors'} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <HailTwoToneIcon />
                        </ListItemIcon>
                        <Link to="/vendors" style={linkStyle}>
                            <ListItemText primary={(mode==='Client')? "Vendors" : "Clients" }/>
                        </Link>
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Invoices'} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <DescriptionTwoToneIcon />
                        </ListItemIcon>
                        <Link to="/projects" style={linkStyle}>
                            <ListItemText primary="Invoices" />
                        </Link>
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Quotes'} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <RequestQuoteTwoToneIcon />
                        </ListItemIcon>
                        <Link to="/projects" style={linkStyle}>
                            <ListItemText primary="Quotes" />
                        </Link>
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Alerts'} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <NotificationsActiveTwoToneIcon />
                        </ListItemIcon>
                        <Link to="/projects" style={linkStyle}>
                            <ListItemText primary="Alerts" />
                        </Link>
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Reports'} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AssessmentTwoToneIcon />
                        </ListItemIcon>
                        <Link to="/projects" style={linkStyle}>
                            <ListItemText primary="Reports" />
                        </Link>
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div  id ='1234556' >
        <Box id ='55555' sx={{ display: 'flex' } }>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: getCSS('--background-color')
                }}
            >
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <div>
                        <Switch>
                            <Route path="/" exact component={Dashboard} />
                            <Route path="/projects" exact component={ProjectTable} />
                            <Route path="/vendors" exact component={VendorTable} />
                            {/*<Route path="/vendor-auth" render={() => <Auth type="vendor" />} />
                            <Route path="/servicer-auth" render={() => <Auth type="servicer" />} />
                            <Route path="/dashboard" component={ResponsiveDrawer} /> {/* New route */}
                            <Route path="/contract/:contractId" component={ContractPage} />
                        </Switch>
                </div>
            </Box>
        </Box>
        </div>
    );
}
