import React, {useState} from "react";
import dayjs from "dayjs";
import ResponsiveDatePickers from "./InputDateComponent";
import BasicTextFields from "./InputTextField";
import InputSelect from "./InputSelect";
import {Button, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";

const ProfileClientEdit: React.FC = () => {


    const [businessLocation, setBusinessLocation] = useState<string>("");
    const handleLocationChange = (newBusinessLocation: string) => {
        setBusinessLocation(newBusinessLocation);
    };

    const [endDate, setEndDate] = useState<dayjs.Dayjs>(dayjs('2021-02-01'));
    const handleEndDateChange = (newDate: dayjs.Dayjs) => {
        setEndDate(newDate);
    };

    const [contractValue, setContractValue] = useState<string>("$12000");
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

    const [paymentTerms, setPaymentTerms] = useState<string>("Net 30");
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
        STATUS: 'STATUS',
        NONE: null
        // Add other states as needed
    };

    const [editState, setEditState] = useState<string | null>(null);

    const handleEditLocation = () => setEditState(EditStates.LOCATION);
    const handleEditEndDate = () => setEditState(EditStates.END_DATE);
    const handleEditContractValue = () => setEditState(EditStates.CONTRACT_VALUE);
    const handleEditPaymentTerms = () => setEditState(EditStates.PAYMENT_TERMS);
    const handleEditRenewalTerms = () => setEditState(EditStates.RENEWAL_TERMS);
    const handleEditCancellationPolicy = () => setEditState(EditStates.CANCELLATION_POLICY);
    const handleEditConfidentialityClause = () => setEditState(EditStates.CONFIDENTIALITY_CLAUSE);


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
            case EditStates.END_DATE:
                return  <ResponsiveDatePickers currentValue={endDate} goBack={() => setEditState(EditStates.NONE)} onDateChange={handleEndDateChange} label={"End Date"}/>;
            case EditStates.CONTRACT_VALUE:
                return  <BasicTextFields currentValue={contractValue} goBack={ () => setEditState(EditStates.NONE)} onDataChange={handleContractValueChange} label={"Contract Value"} />;
            case EditStates.PAYMENT_TERMS:
                return  <InputSelect currentValue={paymentTerms} goBack={ () => setEditState(EditStates.NONE)} onDataChange={handlePaymentTermsChange} label={"Payment Terms"} selections={contractBusinessLocations}/>;
            case EditStates.RENEWAL_TERMS:
                return  <InputSelect currentValue={renewalTerms} goBack={ () => setEditState(EditStates.NONE)} onDataChange={handleRenewalTermsChange} label={"Renewal Terms"} selections={renewalTermsSelections}/>;
            case EditStates.CANCELLATION_POLICY:
                return  <InputSelect currentValue={cancellationPolicy} goBack={ () => setEditState(EditStates.NONE)} onDataChange={handleCancellationPolicy} label={"Cancellation Policy"} selections={cancellationPolicySelections}/>;
            case EditStates.CONFIDENTIALITY_CLAUSE:
                return  <InputSelect currentValue={confidentialityClause} goBack={ () => setEditState(EditStates.NONE)} onDataChange={handleConfidentialityClause} label={"Confidentiality Clause"} selections={confidentialityClauseSelections}/>;
            case EditStates.LIABILITY_CLAUSE:
                return  <InputSelect currentValue={liabilityClause} goBack={ () => setEditState(EditStates.NONE)} onDataChange={handleLiabilityClause} label={"Liability Clause"} selections={liabilityClauseSelections}/>;
            case EditStates.DISPUTE_RESOLUTION:
                return  <InputSelect currentValue={disputeResolution} goBack={ () => setEditState(EditStates.NONE)} onDataChange={handleDisputeResolution} label={"Dispute Resolution"} selections={disputeResolutionSelections}/>;
            case EditStates.SIGNATURE:
                return  <InputSelect currentValue={signature} goBack={ () => setEditState(EditStates.NONE)} onDataChange={handleSignature} label={"Signature"} selections={signatureSelections}/>;

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

                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow hover onClick={handleEditLocation}>
                                    <TableCell><strong>Business Location:</strong></TableCell>
                                    <TableCell>{businessLocation}</TableCell>
                                    <TableCell align="right">
                                        <ArrowForwardIosIcon style={{ color: 'blue', fontSize: 'small' }} />
                                    </TableCell>
                                </TableRow>
                                <TableRow hover  onClick={handleEditEndDate}>
                                    <TableCell><strong>Legal Name:</strong></TableCell>
                                    <TableCell>{endDate.toString()}</TableCell>
                                    <TableCell align="right">
                                        <ArrowForwardIosIcon style={{ color: 'blue', fontSize: 'small' }} />
                                    </TableCell>
                                </TableRow>
                                <TableRow hover onClick={handleEditContractValue}>
                                    <TableCell><strong>Email Address:</strong></TableCell>
                                    <TableCell>{contractValue}</TableCell>
                                    <TableCell align="right">
                                        <ArrowForwardIosIcon style={{ color: 'blue', fontSize: 'small' }} />
                                    </TableCell>
                                </TableRow>
                                <TableRow hover onClick={handleEditPaymentTerms}>
                                    <TableCell><strong>Address:</strong></TableCell>
                                    <TableCell>{paymentTerms}</TableCell>
                                    <TableCell align="right">
                                        <ArrowForwardIosIcon style={{ color: 'blue', fontSize: 'small' }} />
                                    </TableCell>
                                </TableRow >
                                <TableRow hover onClick={handleEditRenewalTerms}>
                                    <TableCell><strong>Phone Number:</strong></TableCell>
                                    <TableCell>{renewalTerms}</TableCell>
                                    <TableCell align="right">
                                        <ArrowForwardIosIcon style={{ color: 'blue', fontSize: 'small' }} />
                                    </TableCell>
                                </TableRow>
                                <TableRow hover onClick={handleEditCancellationPolicy}>
                                    <TableCell><strong>Industry:</strong></TableCell>
                                    <TableCell>{cancellationPolicy}</TableCell>
                                    <TableCell align="right">
                                        <ArrowForwardIosIcon style={{ color: 'blue', fontSize: 'small' }} />
                                    </TableCell>
                                </TableRow>
                                <TableRow hover onClick={handleEditConfidentialityClause}>
                                    <TableCell><strong>Business Website:</strong></TableCell>
                                    <TableCell>{confidentialityClause}</TableCell>
                                    <TableCell align="right">
                                        <ArrowForwardIosIcon style={{ color: 'blue', fontSize: 'small' }} />
                                    </TableCell>
                                </TableRow>
                                <TableRow hover onClick={handleEditConfidentialityClause}>
                                    <TableCell><strong>Accounts:</strong></TableCell>
                                    <TableCell>{confidentialityClause}</TableCell>
                                    <TableCell align="right">
                                        <ArrowForwardIosIcon style={{ color: 'blue', fontSize: 'small' }} />
                                    </TableCell>
                                </TableRow>
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

export default ProfileClientEdit;