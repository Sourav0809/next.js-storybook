import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BsClipboard2Plus } from 'react-icons/bs';
import { styles } from './ReceipeCard.style'
import PropTypes from 'prop-types';

const ReceipeCard = ({ name }) => {
    return (
        <Box sx={styles.cardContainer}>
            <BsClipboard2Plus style={styles.icon} />
            <Typography sx={styles.title}>{name}</Typography>
            <Typography sx={styles.manageText}>Manage</Typography>
        </Box>
    );
};

ReceipeCard.PropTypes = {
    name: PropTypes.string
}


export default ReceipeCard;
