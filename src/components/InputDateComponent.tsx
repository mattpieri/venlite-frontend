import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import {Button, Stack} from "@mui/material";
import {useState} from "react";


type ResponsiveDatePickersProps = {
    label: string;
    goBack: () => void;
    onDateChange: (newDate: any) => void;
    currentValue: dayjs.Dayjs;
};
export default function ResponsiveDatePickers({ label, goBack, onDateChange, currentValue }: ResponsiveDatePickersProps) {
    // Local state to hold the temporary date value
    const [tempDate, setTempDate] = useState<any>(currentValue);

    // Update the local temporary date value
    const handleDateValueChange = (newValue: any) => {
        setTempDate(newValue);
    };

    // Call the onDateChange callback with the temporary date value when "Save" is clicked
    const handleSave = () => {
        onDateChange(tempDate);
        goBack()
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={2} alignItems="center">

            <h2 style={{ textAlign: 'center' }}>{label}</h2>
            <DatePicker
                label={label}
                value={tempDate} // Use the local state for the value
                onChange={handleDateValueChange} // Update the local state when the date changes
            />
            <Button style={{ width: '50%' }} variant="contained" onClick={handleSave}>Save</Button>
            <Button style={{ width: '50%' }} onClick={goBack}>Cancel</Button>
            </Stack>

        </LocalizationProvider>
    );
}
