import {Paper} from "@mui/material";
import ContractEdit from "./ContractEdit";
import React from "react";
import ProfileClientEdit from "./ProfileClientEdit";
import ProfileVendorEdit from "./ProfileVendorEdit";


export default function ProfileClient() {
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