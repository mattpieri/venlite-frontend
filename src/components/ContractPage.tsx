import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Chat from '../components/Chat'; // Import the Chat component
import {
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
} from '@mui/material';
import AlternateTimeline from "./ContractTimeline";
import DataTable from "./SchedulePayment";
// Dummy contract data
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ResponsiveDatePickers from "./InputDateComponent";
import BasicTextFields from "./InputTextField";
import dayjs from "dayjs";
import InputSelect from "./InputSelect";
import ContractEdit from "./ContractEdit";


const ContractPage: React.FC = () => {


    const { contractId } = useParams<{ contractId: string }>();

    const contractData = {
        contractId: contractId,
        location: 'Hotel Downtown',
        client: 'Plumbing Services Inc.',
        project: 'Bathroom Renovation',
        serviceType: 'Plumbing',
        duration: '3 months',
        permitsAndApprovals: 'Client to obtain all necessary permits and approvals.',
        insurance: 'Contractor and client to have liability insurance coverage.',
        paymentSchedule: [
            { milestone: 'Project initiation', amount: '$5,000', dueDate: '01/15/2024', documentLink: undefined },
            { milestone: 'Mid-project inspection', amount: '$10,000', dueDate: '03/15/2024', documentLink: 'https://www.google.com' },
            { milestone: 'Project completion', amount: '$15,000', dueDate: '06/15/2024', documentLink: 'https://www.google.com' },
        ],
        scopeOfWork: `
        - Replace all plumbing fixtures in the existing bathrooms.
        - Install new water supply and drainage systems.
        - Ensure compliance with local plumbing codes.
    `,
        startDate: '2023-01-15 00:00:00',
        endDate: '2023-12-31 00:00:00',
        contractValue: 11000,
        paymentTerms: 'Net 30',
        renewalTerms: '1 year',
        cancellationPolicy: '30 days notice',
        modificationClause: 'Allowed',
        confidentialityClause: 'Standard',
        liabilityClauses: 'Limited',
        disputeResolution: 'Arbitration',
        signature: 'Signed',
        attachments: 'Contract.pdf',
        notes: 'This is a sample contract.',
        status: 'Active'
    };

    const [closeDate, setCloseDate] = useState<dayjs.Dayjs>(dayjs('2021-02-01'));
    const handleCloseDateChange = (newDate: dayjs.Dayjs) => {
        setCloseDate(newDate);
    };

    const [endDate, setEndDate] = useState<dayjs.Dayjs>(dayjs('2021-02-01'));
    const handleEndDateChange = (newDate: dayjs.Dayjs) => {
        setEndDate(newDate);
    };

    const [contractValue, setContractValue] = useState<string>("$12000");
    const handleContractValueChange = (newContractValue: string) => {
        setContractValue(newContractValue);
    };

    const contractValueSelections = [
        { value: 'Net 15', label: 'Net 15' },
        { value: 'Net 30', label: 'Net 30' },
        { value: 'Net 45', label: 'Net 45' },
        { value: 'Net 60', label: 'Net 60' },
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







    const [checkerComments, setCheckerComments] = useState<string[]>(new Array(contractData.paymentSchedule.length).fill(''));
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const EditStates = {
        CLOSE_DATE: 'CLOSE_DATE',
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

    const handleEditCloseDate = () => setEditState(EditStates.CLOSE_DATE);
    const handleEditEndDate = () => setEditState(EditStates.END_DATE);
    const handleEditContractValue = () => setEditState(EditStates.CONTRACT_VALUE);
    const handleEditPaymentTerms = () => setEditState(EditStates.PAYMENT_TERMS);
    const handleEditRenewalTerms = () => setEditState(EditStates.RENEWAL_TERMS);
    const handleEditCancellationPolicy = () => setEditState(EditStates.CANCELLATION_POLICY);
    const handleEditConfidentialityClause = () => setEditState(EditStates.CONFIDENTIALITY_CLAUSE);
    const handleEditLiabilityClause = () => setEditState(EditStates.LIABILITY_CLAUSE);
    const handleEditDisputeResolution = () => setEditState(EditStates.DISPUTE_RESOLUTION);
    const handleEditSignature = () => setEditState(EditStates.SIGNATURE);
    const handleEditAttachments = () => setEditState(EditStates.ATTACHMENTS);
    const handleEditNotes = () => setEditState(EditStates.NOTES);
    const handleEditStatus = () => setEditState(EditStates.STATUS);


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


    async function handleDocumentUpload(event: React.ChangeEvent<HTMLInputElement>, item: { milestone: string; amount: string; dueDate: string; }): Promise<void> {
        const file = event.target.files?.[0]; // Get the selected file
        if (!file) {
            console.error("No file selected");
            return;
        }

        // Prepare the file data for sending
        const formData = new FormData();
        formData.append('file', file);
        formData.append('amount', item.amount); // Append amount to formData

        try {
            // Assuming your Spring Boot app runs on port 8080
            const response = await fetch("http://localhost:8080/upload", {
                method: 'POST',
                body: formData,
            });

            const responseData = await response.text(); // Or `response.json()` if the server sends JSON response

            if (!response.ok) {
                throw new Error(`Upload failed: ${responseData}`);
            }

            console.log(`File uploaded successfully: ${responseData}`);
        } catch (error) {
            console.error(`There was an error uploading the file: ${error}`);
        }
    }

    async function handleCheckDocument( item: any, index: number, prompt: string): Promise<void> {

        console.log("Hello world");

        const formData = new FormData();
        formData.append('prompt', prompt);
        formData.append('amount', item.amount);

        try {
            const response = await fetch("http://localhost:8080/check", {
                method: 'POST',
                body: formData,
            });

            const responseData = await response.text();

            if (!response.ok) {
                throw new Error(`Check failed: ${responseData}`);
            }

            // Update the comment for this item
            const updatedComments = [...checkerComments];
            updatedComments[index] = responseData;
            setCheckerComments(updatedComments);
        } catch (error) {
            console.error(`There was an error checking the document: ${error}`);
        }
    }




    const renderEditComponent = () => {
        switch (editState) {
            case EditStates.CLOSE_DATE:
                return  <ResponsiveDatePickers currentValue={closeDate} goBack={() => setEditState(EditStates.NONE)} onDateChange={handleCloseDateChange} label={"Close Date"}/>;
            case EditStates.END_DATE:
                return  <ResponsiveDatePickers currentValue={endDate} goBack={() => setEditState(EditStates.NONE)} onDateChange={handleEndDateChange} label={"End Date"}/>;
            case EditStates.CONTRACT_VALUE:
                return  <BasicTextFields currentValue={contractValue} goBack={ () => setEditState(EditStates.NONE)} onDataChange={handleContractValueChange} label={"Contract Value"} />;
            case EditStates.PAYMENT_TERMS:
                return  <InputSelect currentValue={paymentTerms} goBack={ () => setEditState(EditStates.NONE)} onDataChange={handlePaymentTermsChange} label={"Payment Terms"} selections={contractValueSelections}/>;
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
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Edit Contract Details
                </Typography>
            <br/>
            <TableContainer>
                <Table>
                    <TableBody>
                        <TableRow hover onClick={handleEditCloseDate}>
                            <TableCell><strong>Close Date:</strong></TableCell>
                            <TableCell>{closeDate.toString()}</TableCell>
                            <TableCell align="right">
                                <ArrowForwardIosIcon style={{ color: 'blue', fontSize: 'small' }} />
                            </TableCell>
                        </TableRow>
                        <TableRow hover  onClick={handleEditEndDate}>
                            <TableCell><strong>End Date:</strong></TableCell>
                            <TableCell>{endDate.toString()}</TableCell>
                            <TableCell align="right">
                                <ArrowForwardIosIcon style={{ color: 'blue', fontSize: 'small' }} />
                            </TableCell>
                        </TableRow>
                        <TableRow hover onClick={handleEditContractValue}>
                            <TableCell><strong>Contract Value:</strong></TableCell>
                            <TableCell>{contractValue}</TableCell>
                            <TableCell align="right">
                                <ArrowForwardIosIcon style={{ color: 'blue', fontSize: 'small' }} />
                            </TableCell>
                        </TableRow>
                        <TableRow hover onClick={handleEditPaymentTerms}>
                            <TableCell><strong>Payment Terms:</strong></TableCell>
                            <TableCell>{paymentTerms}</TableCell>
                            <TableCell align="right">
                                <ArrowForwardIosIcon style={{ color: 'blue', fontSize: 'small' }} />
                            </TableCell>
                        </TableRow >
                        <TableRow hover onClick={handleEditRenewalTerms}>
                            <TableCell><strong>Renewal Terms:</strong></TableCell>
                            <TableCell>{renewalTerms}</TableCell>
                            <TableCell align="right">
                                <ArrowForwardIosIcon style={{ color: 'blue', fontSize: 'small' }} />
                            </TableCell>
                        </TableRow>
                        <TableRow hover onClick={handleEditCancellationPolicy}>
                            <TableCell><strong>Cancellation Policy:</strong></TableCell>
                            <TableCell>{cancellationPolicy}</TableCell>
                            <TableCell align="right">
                                <ArrowForwardIosIcon style={{ color: 'blue', fontSize: 'small' }} />
                            </TableCell>
                        </TableRow>
                        <TableRow hover onClick={handleEditConfidentialityClause}>
                            <TableCell><strong>Confidentiality Clause:</strong></TableCell>
                            <TableCell>{confidentialityClause}</TableCell>
                            <TableCell align="right">
                                <ArrowForwardIosIcon style={{ color: 'blue', fontSize: 'small' }} />
                            </TableCell>
                        </TableRow>
                        <TableRow hover onClick={handleEditLiabilityClause}>
                            <TableCell><strong>Liability Clauses:</strong></TableCell>
                            <TableCell>{liabilityClause}</TableCell>
                            <TableCell align="right">
                                <ArrowForwardIosIcon style={{ color: 'blue', fontSize: 'small' }} />
                            </TableCell>
                        </TableRow>
                        <TableRow hover onClick = {handleEditDisputeResolution}>
                            <TableCell><strong>Dispute Resolution:</strong></TableCell>
                            <TableCell>{disputeResolution}</TableCell>
                            <TableCell align="right">
                                <ArrowForwardIosIcon style={{ color: 'blue', fontSize: 'small' }} />
                            </TableCell>
                        </TableRow>
                        <TableRow hover onClick = {handleEditSignature}>
                            <TableCell><strong>Signature:</strong></TableCell>
                            <TableCell>{signature}</TableCell>
                            <TableCell align="right">
                                <ArrowForwardIosIcon style={{ color: 'blue', fontSize: 'small' }} />
                            </TableCell>
                        </TableRow>
                        <TableRow hover onClick={handleEditAttachments}>
                            <TableCell><strong>Attachments:</strong></TableCell>
                            <TableCell>{contractData.attachments}</TableCell>
                            <TableCell align="right">
                                <ArrowForwardIosIcon style={{ color: 'blue', fontSize: 'small' }} />
                            </TableCell>
                        </TableRow>
                        <TableRow hover onClick = {handleEditNotes}>
                            <TableCell><strong>Notes:</strong></TableCell>
                            <TableCell>{contractData.notes}</TableCell>
                            <TableCell align="right">
                                <ArrowForwardIosIcon style={{ color: 'blue', fontSize: 'small' }} />
                            </TableCell>
                        </TableRow>
                        <TableRow hover onClick={handleEditStatus}>
                            <TableCell><strong>Status:</strong></TableCell>
                            <TableCell>{contractData.status}</TableCell>
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
        <div>
            <Typography variant="h4">Contract: {contractData.contractId}</Typography>
            <br/>
            <Paper elevation={3} style={{padding:"5px"}}>
                <Typography variant="h5">Timeline</Typography>

                <AlternateTimeline></AlternateTimeline>
            </Paper>
            <br/>

            <Paper elevation={3} style={{padding:"5px"}}>
                <Typography variant="h5">Scope of Work</Typography>
                <Typography paragraph>{contractData.scopeOfWork}</Typography>
            </Paper>
            <br/>
            <div style={{display:"flex",  gap: "15px"}}>
            <Paper elevation={3} style={{padding:"5px"}} >
                <Typography variant="h5">Contract Details</Typography>
                <Button onClick={handleOpen}>Edit Contract</Button>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell><strong>Vendor:</strong></TableCell>
                                <TableCell>{contractData.client}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Close Date:</strong></TableCell>
                                <TableCell>{contractData.startDate}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>End Date:</strong></TableCell>
                                <TableCell>{contractData.endDate}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Contract Value:</strong></TableCell>
                                <TableCell>${contractData.contractValue}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Payment Terms:</strong></TableCell>
                                <TableCell>{contractData.paymentTerms}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Renewal Terms:</strong></TableCell>
                                <TableCell>{contractData.renewalTerms}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Cancellation Policy:</strong></TableCell>
                                <TableCell>{contractData.cancellationPolicy}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Confidentiality Clause:</strong></TableCell>
                                <TableCell>{contractData.confidentialityClause}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Liability Clauses:</strong></TableCell>
                                <TableCell>{contractData.liabilityClauses}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Dispute Resolution:</strong></TableCell>
                                <TableCell>{contractData.disputeResolution}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Signature:</strong></TableCell>
                                <TableCell>{contractData.signature}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Attachments:</strong></TableCell>
                                <TableCell>{contractData.attachments}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Notes:</strong></TableCell>
                                <TableCell>{contractData.notes}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Status:</strong></TableCell>
                                <TableCell>{contractData.status}</TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

             <div >
                <Paper elevation={3} style={{padding:"5px"}}>
                <Typography variant="h5">Scheduled Payments</Typography>
                   <DataTable></DataTable>
                </Paper>
                 <br/>
                <Paper elevation={3} style={{padding:"5px"}}>
                    <Typography variant="h5">Invoices</Typography>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Milestone</TableCell>
                                    <TableCell>Amount</TableCell>
                                    <TableCell>Due Date</TableCell>
                                    <TableCell>Document</TableCell>
                                    <TableCell>Intelligent Checker</TableCell>
                                    <TableCell>Checker Comment</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {contractData.paymentSchedule.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{item.milestone}</TableCell>
                                        <TableCell>{item.amount}</TableCell>
                                        <TableCell>{item.dueDate}</TableCell>
                                        <TableCell>
                                            {item.documentLink ? (
                                                <a href={item.documentLink} target="_blank" rel="noopener noreferrer">View Document</a>
                                            ) : (
                                                <Button variant="contained" component="label">
                                                    Upload Document
                                                    <input
                                                        type="file"
                                                        hidden
                                                        onChange={event => handleDocumentUpload(event, item)}
                                                    />
                                                </Button>
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                variant="contained"
                                                onClick={() => handleCheckDocument(item, index, "Does the document amount match the milestone amount?")}>
                                                Does the document amount match the milestone amount?
                                            </Button>
                                            <br/>
                                            <br/>
                                            <Button
                                                variant="contained"
                                                onClick={() => handleCheckDocument(item, index, "Can you summarize the data points")}>
                                                Can you summarize the data points?
                                            </Button>
                                        </TableCell>
                                        <TableCell>{checkerComments[index]}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </div>


            </div>

            <br />
            <Paper>
            <Typography variant="h5">Chat</Typography>
            <Chat />
            </Paper>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                BackdropProps={{
                    style: {
                        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Or any color with desired opacity
                    },
                }}
            >
                <Box sx={style}>
                    <ContractEdit/>
                </Box>
            </Modal>
        </div>
    );
};

export default ContractPage;
