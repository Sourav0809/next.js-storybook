import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { Button, MenuItem, Select, Typography } from '@mui/material';
import { styles } from './LoginForm.style';

const LoginForm = ({ input1Label, input2Label, input3Label }) => {
    const locationRanges = ['1-10', '10-50', '50-100', '150+'];

    return (
        <Box sx={styles.screen}>
            <Box sx={styles.parentContainer} component={'form'}>
                <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 600 }}>
                    XYZ
                </Typography>
                <Typography variant="h5" sx={{ textAlign: 'center' }}>
                    Welcome Onboard
                </Typography>
                <TextField
                    id="filled-basic-1"
                    label={input1Label}
                    variant="filled"
                    sx={styles.inputBox}
                />
                <TextField
                    id="filled-basic-2"
                    label={input2Label}
                    variant="filled"
                    sx={styles.inputBox}
                />
                <Select id="select-industry" value="" sx={styles.inputBox} displayEmpty>
                    <MenuItem disabled value="">
                        {input3Label}
                    </MenuItem>
                    <MenuItem value="industry1">Industry 1</MenuItem>
                    <MenuItem value="industry2">Industry 2</MenuItem>
                </Select>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 400 }}>
                        Select Number Of Locations
                    </Typography>

                    <Box sx={styles.rangeContainer}>
                        {locationRanges.map((range, index) => (
                            <Box key={index} sx={styles.rangeBox}>
                                {range}
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Button variant="contained" sx={styles.btn}>
                    CONTINUE
                </Button>
            </Box>
        </Box>
    );
};

LoginForm.propTypes = {
    input1Label: PropTypes.string,
    input2Label: PropTypes.string,
    input3Label: PropTypes.string,
};

export default LoginForm;
