import React, { useState } from 'react';
import {Button, MenuItem, Select, SelectChangeEvent, Stack} from "@mui/material";

type ResponsiveDatePickersProps = {
    label: string;
    goBack: () => void;
    onDataChange: (newValue: string) => void;
    currentValue: string;
    selections: Array<{ value: string, label: string }>;
};

export default function InputSelect({ label, goBack, onDataChange, currentValue, selections }: ResponsiveDatePickersProps) {
    const [tempData, setTempData] = useState<string>(currentValue);

    // Update the local temporary data value
    const handleDataChange = (event: SelectChangeEvent<string>) => {
        setTempData(event.target.value as string);
    };

    // Call the onDataChange callback with the temporary data value when "Save" is clicked
    const handleSave = () => {
        onDataChange(tempData);
        goBack();
    };

    return (
        <Stack spacing={2} alignItems="center">
            <h2 style={{ textAlign: 'center' }}>{label}</h2>
            <Select
                style={{ width: '50%' }}
                value={tempData}
                onChange={handleDataChange}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
            >
                {selections.map((item) => (
                    <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                ))}
            </Select>

            <Button style={{ width: '50%' }} variant="contained" onClick={handleSave}>Save</Button>
            <Button style={{ width: '50%' }} onClick={goBack}>Cancel</Button>
        </Stack>
    );
}
