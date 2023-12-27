import {Paper} from "@mui/material";
import ProfileClientEdit from "./ProfileClientEdit";
import React from "react";
import ProfileVendorEdit from "./ProfileVendorEdit";


export default function ProfileVendor() {
    return (
        <div>
            <Paper>
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%', paddingTop:'100px', paddingBottom:'100px' }}>
                    <div style={{ width: '60%' }}>
                        <ProfileVendorEdit />
                    </div>
                </div>
            </Paper>
        </div>
    )
}