import React, {useState} from "react";
import dayjs from "dayjs";
import ResponsiveDatePickers from "./InputDateComponent";
import BasicTextFields from "./InputTextField";
import InputSelect from "./InputSelect";
import {Button, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import ContactForm from "./ProfileContactForm";
import AboutForm from "./ProfileAboutForm";
import ProjectShowcase from "./ProfileProjectShowcase";
import ProfileAddLicenseForm from "./ProfileAddLicenseForm";
import ServiceDetailsForm from "./ProfileServiceDetails";
import {useHistory} from "react-router-dom";

const ProfileVendorEdit: React.FC = () => {


    const [businessLocation, setBusinessLocation] = useState<string>("");
    const handleLocationChange = (newBusinessLocation: string) => {
        setBusinessLocation(newBusinessLocation);
    };

    const [endDate, setEndDate] = useState<string>("");
    const handleEndDateChange = (newDate: string) => {
        setEndDate(newDate);
    };

    const [contractValue, setContractValue] = useState<string>("");
    const handleContractValueChange = (newContractValue: string) => {
        setContractValue(newContractValue);
    };

    const contractBusinessLocations = [
        { value: 'United States', label: 'United States' },
        { value: 'Canada', label: 'Canada' },
        { value: 'United Kingdom', label: 'United Kingdom' },
        { value: 'Australia', label: 'Australia' },
        { value: 'Germany', label: 'Germany' },
        { value: 'France', label: 'France' },
        { value: 'Japan', label: 'Japan' },
        { value: 'China', label: 'China' },
        { value: 'India', label: 'India' },
        { value: 'Brazil', label: 'Brazil' },
        { value: 'South Africa', label: 'South Africa' },
        { value: 'Netherlands', label: 'Netherlands' },
        { value: 'Italy', label: 'Italy' },
        { value: 'Spain', label: 'Spain' },
        { value: 'Mexico', label: 'Mexico' },
        { value: 'Russia', label: 'Russia' },
        { value: 'South Korea', label: 'South Korea' },
        { value: 'Sweden', label: 'Sweden' },
        { value: 'Norway', label: 'Norway' },
        { value: 'Denmark', label: 'Denmark' },
        { value: 'Switzerland', label: 'Switzerland' },
        { value: 'Belgium', label: 'Belgium' },
    ];

    const [paymentTerms, setPaymentTerms] = useState<string>("NEEDS REVIEW");
    const handlePaymentTermsChange = (newPaymentTerms: string) => {
        setPaymentTerms(newPaymentTerms);
    };

    const renewalTermsSelections = [
        { value: '.5 year', label: '.5 year' },
        { value: '1 year', label: '1 year' },
        { value: '2 year', label: '2 year' },
    ];

    /* RENEWAL TERMS */

    const [renewalTerms, setRenewalTerms] = useState<string>("1 year");
    const handleRenewalTermsChange = (newRenewalTerms: string) => {
        setRenewalTerms(newRenewalTerms);
    };

    /* CANCELLATION POLICY  */

    const cancellationPolicySelections = [
        { value: '30 days notice', label: '30 days notice' },
        { value: '45 days notice', label: '45 days notice' },
        { value: '60 days notice', label: '60 days notice' },
    ];

    const [cancellationPolicy, setCancellationPolicy] = useState<string>('30 days notice');
    const handleCancellationPolicy = (newCancellationPolicy: string) => {
        setCancellationPolicy(newCancellationPolicy);
    };

    /* CONFIDENTIALITY CLAUSE */

    const confidentialityClauseSelections = [
        { value: 'Standard', label: 'Standard' },
    ];

    const [confidentialityClause, setConfidentialityClause] = useState<string>('Standard');
    const handleConfidentialityClause = (newConfidentialityClause: string) => {
        setConfidentialityClause(newConfidentialityClause);
    };

    /* LIABILITY CLAUSE */

    const liabilityClauseSelections = [
        { value: 'Limited', label: 'Limited' },
    ];

    const [liabilityClause, setLiabilityClause] = useState<string>('Limited');
    const handleLiabilityClause = (newLiabilityClause: string) => {
        setLiabilityClause(newLiabilityClause);
    };

    /* DISPUTE RESOLUTION */

    const disputeResolutionSelections = [
        { value: 'Arbitration', label: 'Arbitration' },
    ];

    const [disputeResolution, setDisputeResolution] = useState<string>('Arbitration');
    const handleDisputeResolution = (newDisputeResolution: string) => {
        setDisputeResolution(newDisputeResolution);
    };

    /* SIGNATURE */

    const signatureSelections = [
        { value: 'SIGNED', label: 'SIGNED' },
        { value: 'PENDING SIGNATURE', label: 'PENDING SIGNATURE' },
    ];

    const [signature, setSignature] = useState<string>('SIGNED');
    const handleSignature = (newSignature: string) => {
        setSignature(newSignature);
    };



    const EditStates = {
        LOCATION: 'LOCATION',
        END_DATE: 'END_DATE',
        CONTRACT_VALUE: 'CONTRACT_VALUE',
        PAYMENT_TERMS: 'PAYMENT_TERMS',
        RENEWAL_TERMS: 'RENEWAL_TERMS',
        CANCELLATION_POLICY: 'CANCELLATION_POLICY',
        CONFIDENTIALITY_CLAUSE: 'CONFIDENTIALITY_CLAUSE',
        LIABILITY_CLAUSE: 'LIABILITY_CLAUSE',
        DISPUTE_RESOLUTION: 'DISPUTE_RESOLUTION',
        SIGNATURE: 'SIGNATURE',
        ATTACHMENTS: 'ATTACHMENTS',
        NOTES: 'NOTES',
        ABOUT: 'ABOUT',
        CONTACT: 'CONTACT',
        PROJECT_SHOWCASE: 'PROJECT_SHOWCASE',
        LICENSING: 'LICENSING',
        SERVICE_DETAILS: 'SERVICE_DETAILS',
        NONE: null
        // Add other states as needed
    };

    const [editState, setEditState] = useState<string | null>(null);


    const handleEditLocation = () => {
        history.push('/profile/business');
    };

    const handleEditServiceDetails = () => {
        history.push('/profile/serviceDetails');
    };

    const handleEditContractValue = () => {
        history.push('/profile/contactInfo');
    };

    const handleEditLicensing = () => {
        history.push('/profile/licensing');
    };

    const handlePreviewProfile = () =>{
        history.push( '/profile/preview');
    }

    const handleEditProjectShowCase = () => {
        history.push('/profile/projectShowCase');
    };

    const handleEditAbout = () => {
        history.push('/profile/about');
    };

    const history = useHistory();

    const handleEditContact = () => {
        history.push('/profile/contactInfo');
    };


    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };


    const renderEditComponent = () => {
        switch (editState) {
            case EditStates.LOCATION:
                return  <InputSelect currentValue={paymentTerms} goBack={ () => setEditState(EditStates.NONE)} onDataChange={handleLocationChange} label={"Business Location"} selections={contractBusinessLocations}/>;
           case EditStates.CONTACT:
                return  <ContactForm />;
            case EditStates.ABOUT:
                return  <AboutForm/>;
            case EditStates.PROJECT_SHOWCASE:
                return  <ProjectShowcase/>;
            case EditStates.LICENSING:
                return  <ProfileAddLicenseForm/>;
            case EditStates.SERVICE_DETAILS:
                return  <ServiceDetailsForm/>;
            // Add cases for other attributes
            default:
                return null; // or some default view
        }
    };
    const renderContent = () => {
        if (editState) {
            // Render the edit component if an edit state is set
            return renderEditComponent();
        } else {
            // Render the table if no edit state is set
            return (
                <div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}> {/* Centering the icon */}
                        <PersonOutlineTwoToneIcon style={{  fontSize: '80px' }} /> {/* Setting icon color */}
                    </div>
                    <Typography variant="h5" style={{ textAlign: 'center' }} >Profile</Typography>
                    <br/>
                    <div style={{ display: 'flex', justifyContent: 'center' }}> {/* Centering the icon */}
                        <Button onClick = {handlePreviewProfile} variant={"outlined"}>Preview Profile</Button>
                    </div>

                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow hover onClick={handleEditLocation}>
                                    <TableCell><strong>Business</strong></TableCell>
                                    <TableCell>{businessLocation}</TableCell>
                                    <TableCell align="right">
                                        <ArrowForwardIosIcon style={{ color: 'blue', fontSize: 'small' }} />
                                    </TableCell>
                                </TableRow>
                                <TableRow hover onClick={handleEditContact}>
                                    <TableCell><strong>Contact</strong></TableCell>
                                    <TableCell>{businessLocation}</TableCell>
                                    <TableCell align="right">
                                        <ArrowForwardIosIcon style={{ color: 'blue', fontSize: 'small' }} />
                                    </TableCell>
                                </TableRow>
                                <TableRow hover onClick={handleEditAbout}>
                                    <TableCell><strong>About</strong></TableCell>
                                    <TableCell>{businessLocation}</TableCell>
                                    <TableCell align="right">
                                        <ArrowForwardIosIcon style={{ color: 'blue', fontSize: 'small' }} />
                                    </TableCell>
                                </TableRow>
                                <TableRow hover onClick={handleEditServiceDetails}>
                                    <TableCell><strong>Service Details</strong></TableCell>
                                    <TableCell>{businessLocation}</TableCell>
                                    <TableCell align="right">
                                        <ArrowForwardIosIcon style={{ color: 'blue', fontSize: 'small' }} />
                                    </TableCell>
                                </TableRow>
                                <TableRow hover  onClick={handleEditProjectShowCase}>
                                    <TableCell><strong>Project Showcase</strong></TableCell>
                                    <TableCell>{endDate.toString()}</TableCell>
                                    <TableCell align="right">
                                        <ArrowForwardIosIcon style={{ color: 'blue', fontSize: 'small' }} />
                                    </TableCell>
                                </TableRow>
                                <TableRow hover onClick={handleEditContractValue}>
                                    <TableCell><strong>Logo & Photos</strong></TableCell>
                                    <TableCell><Button>{contractValue}</Button></TableCell>
                                    <TableCell align="right">
                                        <ArrowForwardIosIcon style={{ color: 'blue', fontSize: 'small' }} />
                                    </TableCell>
                                </TableRow>
                                <TableRow hover onClick={handleEditLicensing}>
                                    <TableCell><strong>Licensing & Insurance</strong></TableCell>
                                    <TableCell align="right">
                                        <Button
                                            color={'primary' }
                                            variant="contained"
                                        >{paymentTerms}
                                        </Button>
                                    </TableCell>
                                    <TableCell align="right">
                                        <ArrowForwardIosIcon style={{ color: 'blue', fontSize: 'small' }} />
                                    </TableCell>
                                </TableRow >
                                </TableBody>
                        </Table>
                    </TableContainer>

                </div>);
        }
    };


    return (
        renderContent()
    );
};

export default ProfileVendorEdit;