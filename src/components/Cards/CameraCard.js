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


const CameraCard = () => {
    return (
        <Box sx={styles.card}>
            <Box sx={styles.imageContainer}>
                <img
                    src="https://s3-alpha-sig.figma.com/img/3579/0eaa/ffb7b894757284ab45e7f7045ffd1997?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6Mej4Fuqe1iguym4AbJ-G-QhWqVosMtLGr~4J9N8u4~fn8Q1ob9NpvmpUxBraT0PmtloHraCUTkGvkw7t2zK~R2dNO68w8ybV6jiqH8WhH2V-xApbHj9nfmON-2Sbeqo7ybkROA62zLVAhzJTX45j4NOuCBxihn20Fb25JrxDvUhA3FK6AUrtYaEHf9rR2SRwdBQCASIfdSD9DywkGMURiZNWlJmCpGT~WJqKbWmwX1glEH87jziix6raWwo0i5O~lwEJyhBYHZ4I2VK638QipMPwm-KksBVQzn5jVv3ZF5kjCAIalsizf7RYRdEuYh098h0YPbht38BVAUtAKQUA__"
                    alt="Camera Image"
                    style={styles.image}
                />
            </Box>
            <Box sx={styles.content}>
                <Typography sx={styles.title}>
                    Bank Entrance-front-view Camera1
                </Typography>
                <Box sx={styles.infoBox}>
                    <TbClipboardCheck style={styles.icon} />
                    <Typography sx={{ fontSize: '13px', opacity: '0.7' }}>
                        3 Recipes Added
                    </Typography>
                </Box>
                <Box sx={styles.infoBox}>
                    <MdError style={styles.icon} />
                    <Typography sx={{ fontSize: '13px', opacity: '0.7' }}>
                        today, 04:45pm: Unidentified face detected
                    </Typography>
                </Box>
                <Box sx={styles.infoBox}>
                    <IoLocationOutline style={styles.icon} />
                    <Typography sx={{ fontSize: '13px', opacity: '0.7' }}>
                        Coimbatore Branch
                    </Typography>
                </Box>
                <Box sx={{ ...styles.infoBox, justifyContent: 'space-between' }}>
                    <Button sx={styles.statusButton}>Active</Button>
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

export default CameraCard;
