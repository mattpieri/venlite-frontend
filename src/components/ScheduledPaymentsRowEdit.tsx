import React, { useState } from "react";
import {Box, Button, MenuItem, Select, SelectChangeEvent, Stack, TextField} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

type ScheduledPaymentsRowEditProps = {
    label: string;
    goBack: () => void;
    onDataChange: (data: any) => void;
    currentValue: any; // Assuming currentValue is an object representing a row
};

const ScheduledPaymentsRowEdit = ({ label, goBack, onDataChange, currentValue }: ScheduledPaymentsRowEditProps) => {
    const [amount, setAmount] = useState(currentValue.amount || '');
    const [description, setDescription] = useState(currentValue.description || '');
    const [status, setStatus] = useState(currentValue.status || '');
    const [dueDate, setDueDate] = useState(currentValue.dueDate || new Date());

    const handleDataChange = (event: SelectChangeEvent<string>) => {
        setStatus(event.target.value as string);
    };
    const handleSave = () => {
        // Convert the amount string to a number using parseFloat
        const numericAmount = parseFloat(amount);

        if (!isNaN(numericAmount)) {
            // Only update the state if the conversion is successful
            onDataChange({ amount: numericAmount, description, status, dueDate });
        } else {
            // Handle the case where the input is not a valid number
            console.error('Invalid amount input');
        }

        goBack();
    };

    return (
        <Stack spacing={2} alignItems="center">
            <h2 style={{ textAlign: 'center' }}>{label}</h2>

            <TextField
                style={{ width: '50%' }}
                label={'Amount'}
                variant="outlined"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            <TextField
                style={{ width: '50%' }}

                label={'Description'}
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />


            <Select
                style={{ width: '50%' }}
                value={status}
                onChange={handleDataChange}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
            >
                {[{value:'Pending', label:'Pending'}, {value:'Paid', label:'Paid'}, {value:'Delinquent',label:'Delinquent'}].map((item) => (
                    <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                ))}
            </Select>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Due Date"
                    onChange={(newDate) => setDueDate(newDate)}
                />
            </LocalizationProvider>


            <Button style={{ width: '50%' }} variant="contained" onClick={handleSave}>Save</Button>
            <Button style={{ width: '50%' }} onClick={goBack}>Cancel</Button>
        </Stack>
    );
};

export default ScheduledPaymentsRowEdit;
