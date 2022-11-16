import React from "react";
import { Divider } from "@mui/material";

const DividerComponent = ()=> {
    return (
        <>
            <Divider sx={{
                height: '10px', 
                background: 'linear-gradient(90deg, #2DB68F 0%, #A5DFBC 80.17%)',
            }} />
        </>
    )
}

export default DividerComponent