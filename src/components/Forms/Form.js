import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { Button, MenuItem, Select, Typography, useTheme } from '@mui/material';

const Form = ({ input1Label, input2Label, input3Label, }) => {
    const theme = useTheme();

    const style = {
        screen: {
            height: "100vh",
            width: '100%',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#E0E0E0"
        },
        parentContainer: {
            padding: '3rem',
            width: '30rem',
            backgroundColor: 'white',
            display: "flex",
            flexDirection: "column",
            gap: "20px"
        },
        inputBox: {
            backgroundColor: "#E7E0E6",
            width: '100%'
        },
        btn: {
            backgroundColor: "black",
            color: "white",
            padding: '15px',
            '&:hover': {
                backgroundColor: "darkslategray"
            }
        },
        rangeContainer: {
            display: "flex",
            gap: '10px'
        },
        rangeBox: {
            backgroundColor: theme.palette.grey[300],
            padding: "15px",
            fontWeight: "600"
        }
    };

    const locationRanges = ['1-10', '10-50', '50-100', '150+'];

    return (
        <Box sx={style.screen}>
            <Box
                sx={style.parentContainer}
                component={'form'}
            >
                <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "600" }}>
                    XYZ
                </Typography>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                    Welcome Onboard
                </Typography>
                <TextField
                    id="filled-basic-1"
                    label={input1Label}
                    variant='filled'
                    sx={style.inputBox}
                />
                <TextField
                    id="filled-basic-2"
                    label={input2Label}
                    variant='filled'
                    sx={style.inputBox}
                />
                <Select
                    id="select-industry"
                    value=""
                    sx={style.inputBox}
                    displayEmpty
                >
                    <MenuItem disabled value="">
                        {input3Label}
                    </MenuItem>
                    <MenuItem value="industry1">Industry 1</MenuItem>
                    <MenuItem value="industry2">Industry 2</MenuItem>
                </Select>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <Typography
                        variant='h6'
                        sx={{ fontSize: '1rem', fontWeight: '400' }}
                    >Select Number Of Locations</Typography>

                    <Box sx={style.rangeContainer}>
                        {locationRanges.map((range, index) => (
                            <Box key={index} sx={style.rangeBox}>{range}</Box>
                        ))}
                    </Box>
                </Box>
                <Button variant="contained" sx={style.btn}>
                    CONTINUE
                </Button>
            </Box>
        </Box>
    );
};

Form.propTypes = {
    input1Label: PropTypes.string,
    input2Label: PropTypes.string,
    input3Label: PropTypes.string,
};

export default Form;
