import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

const contractData = {
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
export default function AlternateTimeline() {
    return (
        <Timeline
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}
        >
            <TimelineItem >
                <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography>Contract Signed - {contractData.startDate}</Typography>
                    <Typography variant="caption" color="textSecondary">Jan 15, 2023, 9:00 AM</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="primary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography>Invoice Payment Page Created</Typography>
                    <Typography variant="caption" color="textSecondary">Feb 01, 2023, 10:00 AM</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="secondary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography>First Milestone Payment - {contractData.paymentSchedule[0].dueDate}</Typography>
                    <Typography variant="caption" color="textSecondary">Feb 15, 2023, 3:30 PM</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="secondary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography>Mid-project Inspection - {contractData.paymentSchedule[1].dueDate}</Typography>
                    <Typography variant="caption" color="textSecondary">Mar 15, 2023, 11:00 AM</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="secondary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography>Invoice Finalized - Marked as Paid</Typography>
                    <Typography variant="caption" color="textSecondary">Apr 10, 2023, 2:00 PM</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="secondary" />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography>Project Completion - {contractData.paymentSchedule[2].dueDate}</Typography>
                    <Typography variant="caption" color="textSecondary">Jun 15, 2023, 5:00 PM</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}