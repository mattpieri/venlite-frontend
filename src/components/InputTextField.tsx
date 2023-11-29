import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import dayjs from "dayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {Button, Stack} from "@mui/material";
import {useState} from "react";


type ResponsiveDatePickersProps = {
    label: string;
    goBack: () => void;
    onDataChange: (string: any) => void;
    currentValue: string;
};


export default function BasicTextFields({ label, goBack, onDataChange, currentValue  }: ResponsiveDatePickersProps) {

    const [tempData, setTempData] = useState<any>(currentValue);

    // Update the local temporary date value
    const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTempData(event.target.value);
    };

    // Call the onDateChange callback with the temporary date value when "Save" is clicked
    const handleSave = () => {
        onDataChange(tempData);
        goBack()
    };

    return (


    <Stack spacing={2} alignItems="center">

        <h2 style={{ textAlign: 'center' }}>{label}</h2>
        <TextField id="outlined-basic" label={label} variant="outlined"  value={tempData}  onChange={handleDataChange}  />

        <Button style={{ width: '50%' }} variant="contained" onClick={handleSave}>Save</Button>
        <Button style={{ width: '50%' }} onClick={goBack}>Cancel</Button>
    </Stack>
    );
}
