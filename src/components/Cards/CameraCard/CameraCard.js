import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IoLocationOutline } from 'react-icons/io5';
import { MdError } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { ImVideoCamera } from 'react-icons/im';
import { BiSolidBarChartSquare } from 'react-icons/bi';
import { TbClipboardCheck } from 'react-icons/tb';
import { styles } from './CameraCard.style';
import Proptypes from "prop-types"

const CameraCard = (
    { imagePath,
        cameraName,
        receipeAdded,
        fetchStatus,
        branch,
        status }) => {
    return (
        <Box sx={styles.card}>
            <Box sx={styles.imageContainer}>
                <img
                    src={imagePath}
                    alt="Camera Image"
                    style={styles.image}
                />
            </Box>
            <Box sx={styles.content}>
                <Typography sx={styles.title}>
                    {cameraName}
                </Typography>
                <Box sx={styles.infoBox}>
                    <TbClipboardCheck style={styles.icon} />
                    <Typography sx={{ fontSize: '13px', opacity: '0.7' }}>
                        {receipeAdded} Recipes Added
                    </Typography>
                </Box>
                <Box sx={styles.infoBox}>
                    <MdError style={styles.icon} />
                    <Typography sx={{ fontSize: '13px', opacity: '0.7' }}>
                        {fetchStatus}
                    </Typography>
                </Box>
                <Box sx={styles.infoBox}>
                    <IoLocationOutline style={styles.icon} />
                    <Typography sx={{ fontSize: '13px', opacity: '0.7' }}>
                        {branch}
                    </Typography>
                </Box>
                <Box sx={{ ...styles.infoBox, justifyContent: 'space-between' }}>
                    <Button sx={styles.statusButton}>{status}</Button>
                    <Box sx={styles.iconsContainer}>
                        <RiDeleteBin6Line style={{ color: '#ED1C24', ...styles.icon }} />
                        <ImVideoCamera style={styles.icon} />
                        <BiSolidBarChartSquare style={styles.icon} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};



CameraCard.Proptypes = {
    imagePath: Proptypes.string,
    cameraName: Proptypes.string,
    receipeAdded: Proptypes.number,
    fetchStatus: Proptypes.string,
    branch: Proptypes.string,
    status: Proptypes.string,

}


export default CameraCard;
