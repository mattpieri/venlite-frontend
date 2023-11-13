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
// Dummy contract data




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
    };

    const [checkerComments, setCheckerComments] = useState<string[]>(new Array(contractData.paymentSchedule.length).fill(''));


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



    return (
        <div>
            <Typography variant="h3">Contract: {contractData.contractId}</Typography>
            <Paper elevation={3}>
                <Typography variant="h5">Scope of Work</Typography>
                <Typography paragraph>{contractData.scopeOfWork}</Typography>
            </Paper>
            <br />
            <Paper elevation={3}>
                <Typography variant="h5">Contract Details</Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell><strong>Location:</strong></TableCell>
                                <TableCell>{contractData.location}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Client:</strong></TableCell>
                                <TableCell>{contractData.client}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Project:</strong></TableCell>
                                <TableCell>{contractData.project}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Service Type:</strong></TableCell>
                                <TableCell>{contractData.serviceType}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Duration:</strong></TableCell>
                                <TableCell>{contractData.duration}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Permits and Approvals:</strong></TableCell>
                                <TableCell>{contractData.permitsAndApprovals}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><strong>Insurance and Liability:</strong></TableCell>
                                <TableCell>{contractData.insurance}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <br />

            <Paper elevation={3}>
            <Typography variant="h5">Payment Schedule</Typography>
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
            <br />
            <Paper>
            <Typography variant="h5">Chat</Typography>
            <Chat />
            </Paper>
        </div>
    );
};

export default ContractPage;
