import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BsClipboard2Plus } from 'react-icons/bs';
import { styles } from './ReceipeCard.style'
const ReceipeCard = () => {
    return (
        <Box sx={styles.cardContainer}>
            <BsClipboard2Plus style={styles.icon} />
            <Typography sx={styles.title}>Receipe Management</Typography>
            <Typography sx={styles.manageText}>Manage</Typography>
        </Box>
    );
};

export default ReceipeCard;
