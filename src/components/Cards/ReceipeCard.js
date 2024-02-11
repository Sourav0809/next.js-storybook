import { Box, Typography } from '@mui/material'
import React from 'react'
import { IoLocationOutline } from "react-icons/io5";

const ReceipeCard = () => {
    return (
        <Box sx={
            {
                width: '348px',
                height: "140px",
                borderRadius: "12px",
                display: 'flex',
                flexDirection: "column",
                gap: "10px",
                padding: "15px",
                backgroundColor: "white",
                border: '1px solid #E5E5E5'
            }}>
            <IoLocationOutline style={{ fontSize: "48px" }} />
            <Typography sx={{ fontSize: '24px', opacity: '0.7' }}>
                Receipe Management
            </Typography>
            <Typography sx={{ fontSize: '12px', opacity: '0.7', display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                Manage
            </Typography>
        </Box>
    )
}

export default ReceipeCard