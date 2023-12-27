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
import {BrowserRouter as Router, Link, Route, Switch, useHistory} from "react-router-dom";
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
import ProfileVendor from "./ProfileClient";
import ProfileContactForm from "./ProfileContactForm";
import ProfileAboutForm from "./ProfileAboutForm";
import ProfileAddLicenseForm from "./ProfileAddLicenseForm";
import ProfileServiceDetails from "./ProfileServiceDetails";
import ProfileProjectShowcase from "./ProfileProjectShowcase";
import BusinessPageForm from "./ProfileBusinessForm";
import BusinessProfile from "./ProfilePreview";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BusinessDataGrid from "./Accounts";
import ServiceSearchForm from "./VendorSearch";
import ProfessionalsList from "./VendorsSearchResult";
import ReviewsIcon from '@mui/icons-material/Reviews';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import SpaceDashboardTwoToneIcon from '@mui/icons-material/SpaceDashboardTwoTone';
import HomeDashboard from "./Home";
import BackgroundVideo from "./BackgroundVideo";
import InvoiceScreen from "./Invoices";
import VendorReview from "./VendorReview";
import VendorList from "./VendorList";
import Quotes from "./Quotes";
import EventList from "./Quotes";
import MyCalendar from "./Calendar";
import MessagingInterface from "./Quote";
import MultipleSelectCheckmarks from "./AccountDropDown";
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


    const linkStyle = {
        textDecoration: 'none',
        color: useTheme().palette.text.primary, // Use the primary text color from the theme
        fontFamily: "LatinoType"
    };

    const handleHome = () => {
        history.push('/home');
    };

    const handleProfile = () => {
        history.push('/profile');
    };

    const handleSearch = () => {
        history.push('/search');
    };

    const handleInvoices = () => {
        history.push('/invoices');
    };

    const handleContracts = () => {
        history.push('/');
    };

    const handleProjects = () => {
        history.push('/projects');
    };

    const history = useHistory();

    const handleVendors = () => {
        history.push('/vendors');
    };

    const handleAccounts = () => {
        history.push('/accounts');
    };

    const handleReviews = () =>{
        history.push('/reviews');
    }

    const handleQuotes = () =>{
        history.push('/quotes');
    }

    const handleCalendar = () => {
        history.push('/calendar');
    }

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

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    pl: 1
                    // any other styling you need
                }}
            >
                {/* If logo is in the public folder */}
                <img src="/travis_logo1.png" alt="Logo" style={{ height: 85}} />

            </Box>
            <div style={{paddingLeft: '5px', paddingRight: '5px'}}>
                <MultipleSelectCheckmarks></MultipleSelectCheckmarks>

            </div>

            <Toolbar />
            <Divider />
            <List>

                <ListItem key={'Home'} disablePadding onClick={handleHome}>
                    <ListItemButton>
                        <ListItemIcon>
                            <SpaceDashboardTwoToneIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </ListItem>
                    <ListItem key={'Profile'} disablePadding onClick={handleProfile}>
                        <ListItemButton>
                            <ListItemIcon>
                                <PersonOutlineTwoToneIcon />
                            </ListItemIcon>
                                <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={'Accounts'} disablePadding onClick={handleAccounts}>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountBalanceIcon />
                            </ListItemIcon>
                            <ListItemText primary="Accounts" />
                        </ListItemButton>
                    </ListItem>


            </List>
            <Divider />
            <List>
                <ListItem key={'Vendor Hub'} disablePadding onClick={handleSearch}>
                    <ListItemButton>
                        <ListItemIcon>
                            <HubTwoToneIcon />
                        </ListItemIcon>
                        <Link to="/projects" style={linkStyle}>
                            <ListItemText primary={(mode==='Client')? "Job Search" : "Talent Search" }/>
                        </Link>
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Quotes'} disablePadding onClick={handleQuotes}>
                    <ListItemButton>
                        <ListItemIcon>
                            <RequestQuoteTwoToneIcon />
                        </ListItemIcon>
                        <ListItemText primary="Job Posts" />
                    </ListItemButton>
                </ListItem>
                {/*<ListItem key={'Reviews'} disablePadding onClick={handleReviews}>
                    <ListItemButton>
                        <ListItemIcon>
                            <ReviewsIcon />
                        </ListItemIcon>
                        <Link to="/projects" style={linkStyle}>
                            <ListItemText primary="Reviews" />
                        </Link>
                    </ListItemButton>
                </ListItem>*/}
            </List>
            <Divider />

            <List>

                <ListItem key={'Contracts'} disablePadding  onClick={handleContracts}>
                    <ListItemButton>
                        <ListItemIcon>
                            <ArticleTwoToneIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contracts" />
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Projects'} disablePadding onClick={handleProjects}>
                    <ListItemButton>
                        <ListItemIcon>
                            <FolderCopyTwoToneIcon />
                        </ListItemIcon>
                        <ListItemText primary="Projects" />
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Vendors'} disablePadding onClick={handleVendors}>
                    <ListItemButton>
                        <ListItemIcon>
                            <HailTwoToneIcon />
                        </ListItemIcon>
                        <ListItemText primary={(mode==='Client')? "Vendors" : "Customers" }/>
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Invoices'} disablePadding onClick={handleInvoices}>
                <ListItemButton>
                        <ListItemIcon>
                            <DescriptionTwoToneIcon />
                        </ListItemIcon>
                        <ListItemText primary="Invoices" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider></Divider>
            <List>
                <ListItem key={'Alerts'} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <NotificationsActiveTwoToneIcon />
                        </ListItemIcon>
                            <ListItemText primary="Alerts" />
                    </ListItemButton>
                </ListItem>
                <ListItem key={'Calendar'} disablePadding onClick={handleCalendar}>
                    <ListItemButton>
                        <ListItemIcon>
                            <AssessmentTwoToneIcon />
                        </ListItemIcon>
                            <ListItemText primary="Calendar" />
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
                            <Route path="/home" exact component ={HomeDashboard} />
                            <Route path="/accounts" exact component={BusinessDataGrid} />
                            <Route path="/invoices" exact component={InvoiceScreen}/>
                            <Route path="/search" exact component={BackgroundVideo}/>
                            <Route path="/search/result" exact component={ProfessionalsList}/>
                            <Route path="/profile" exact component={ProfileVendor} />
                            <Route path="/profile/business" exact component={BusinessPageForm} />
                            <Route path="/profile/contactInfo" exact component={ProfileContactForm} />
                            <Route path="/profile/about" exact component={ProfileAboutForm} />
                            <Route path="/profile/licensing" exact component={ProfileAddLicenseForm} />
                            <Route path="/profile/serviceDetails" exact component={ProfileServiceDetails} />
                            <Route path="/profile/projectShowCase" exact component={ProfileProjectShowcase} />
                            <Route path="/profile/preview" exact component={BusinessProfile} />
                            <Route path="/projects" exact component={ProjectTable} />
                            <Route path="/reviews" exact component={VendorReview} />
                            <Route path="/calendar" exact component={MyCalendar} />
                            <Route path="/quotes" exact component={EventList} />
                            <Route path="/quote" exact component={MessagingInterface}/>
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
