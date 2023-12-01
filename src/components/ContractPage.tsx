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
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import ScheduledPaymentsRowEdit from "./ScheduledPaymentsRowEdit";
import ContractInvoiceTable from "./ContractInvoicePage";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import AutoAwesomeTwoToneIcon from '@mui/icons-material/AutoAwesomeTwoTone';
import ReconInvoiceTable from "./ReconInvoice";
import {getCSS} from "../themes/themeUtils";

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


    const [checkerComments, setCheckerComments] = useState<string[]>(new Array(contractData.paymentSchedule.length).fill(''));
    const [openContractDetails, setOpenContractDetails] = React.useState(false);
    const handleContractDetailsOpen = () => setOpenContractDetails(true);
    const handleContractDetailsClose = () => setOpenContractDetails(false);


    const [openScheduledPayments, setScheduledPayments] = React.useState(false);
    const handleCloseScheduledPayments = () => setScheduledPayments(false);

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


    const [runRecon, setRunRecon] = React.useState(false);
    const handleRunRecon = () => setRunRecon(true);
    const renderContent = () => {
        if (runRecon) {
            // Render the edit component if an edit state is set
            return(
                <Paper style={{ width: '100%'}}>
                    <ReconInvoiceTable></ReconInvoiceTable>
                </Paper>
            )
        } else {
            return (
                <Paper style={{ height: 400, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <AutoAwesomeTwoToneIcon className="gradient-icon" onClick={handleRunRecon} style={{ fontSize: '100px', cursor: 'pointer', color: 'purple' }} />
                    <Typography variant="subtitle1" style={{color:'purple'}} >Run Invoice Recon</Typography>
                </Paper>
            )
        }
    }

    return (
        <div>
            <Typography variant="h4">Contract: {contractData.contractId}</Typography>
            <br/>
            <Paper elevation={3} style={{padding:"5px"}}>
                <Typography variant="h5">Timeline</Typography>
                <AlternateTimeline></AlternateTimeline>
            </Paper>
            <br/>
            <Paper elevation={3} style={{ padding: "5px", color: getCSS('--text-color') }}>
                <Typography variant="h5">Scope of Work</Typography>
                <List>
                    <ListItem>
                        <Typography>{'Replace all plumbing fixtures in the existing bathrooms.'}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>{'Install new water supply and drainage systems.'}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>{'Ensure compliance with local plumbing codes.'}</Typography>
                    </ListItem>
                </List>
            </Paper>
            <br/>
            <div style={{display:"flex",  gap: "15px"}}>
                <Paper elevation={3} style={{padding:"5px", width:'45%'}} >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant="h5">Contract Details</Typography>
                        <Button onClick={handleContractDetailsOpen}><EditTwoToneIcon  style={{ color: 'purple' }} /></Button>
                    </div>
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
                 <div style={{width:'100%'}} >
                    <Paper elevation={3} style={{padding:"5px"}}>
                        <DataTable></DataTable>
                    </Paper>
                     <br/>
                    <Paper elevation={3} style={{padding:"5px"}}>
                        <ContractInvoiceTable></ContractInvoiceTable>
                    </Paper>
                </div>
            </div>
            <br />
            {renderContent()}
            <br />

            <Modal
                open={openContractDetails}
                onClose={handleContractDetailsClose}
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
            <Modal
                open={openScheduledPayments}
                onClose={handleCloseScheduledPayments}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                BackdropProps={{
                    style: {
                        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Or any color with desired opacity
                    },
                }}
            >
                <Box sx={style}>
                    <ScheduledPaymentsRowEdit label={"Add Scheduled Payment"} goBack={()=>null} onDataChange={()=> null} currentValue={"Test"} />
                </Box>
            </Modal>
        </div>
    );
};

export default ContractPage;
