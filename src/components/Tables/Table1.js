import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

const Table1 = ({ tableHeadings, tableData }) => {

    const styles = {
        screen: {
            height: "100vh",
            width: '100%',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#E0E0E0"
        },
        parentContainer: {
            width: "80rem"
        },
        textStyles: {
            padding: '5px',
            fontWeight: 'bold'
        },
        cellStyles: {
            paddingTop: '20px',
            paddingBottom: '20px'
        }

    };

    return (
        <Box sx={styles.screen}>
            <Box sx={styles.parentContainer}>
                <TableContainer component={Paper} sx={{ padding: '20px', borderRadius: '10px' }}>
                    <Table aria-label="simple table" size="medium" >
                        <TableHead sx={{
                            backgroundColor: "#F3F3F3",
                            position: "sticky",
                            top: 0,
                            zIndex: 10,
                            borderRadius: '20px'
                        }}>
                            <TableRow >
                                {tableHeadings.map((heading, index) => (
                                    <TableCell key={index} align="center">
                                        {heading}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.map((data, index) => {
                                return <TableRow key={index}>
                                    <TableCell align='center' sx={styles.cellStyles} >
                                        <Typography variant='body-2' sx={styles.textStyles}>{data.name}</Typography>
                                    </TableCell>
                                    <TableCell align='center' sx={styles.cellStyles}>
                                        <Typography variant="body-2" sx={styles.textStyles}>{data.email}</Typography>
                                    </TableCell>
                                    <TableCell align='center' sx={styles.cellStyles}>
                                        <Typography variant="body-2" sx={styles.textStyles}>{data.role}</Typography>
                                    </TableCell>
                                    <TableCell align='center' sx={styles.cellStyles}>
                                        <Typography variant="body-2" sx={styles.textStyles}>{data.location}</Typography>
                                    </TableCell>
                                    <TableCell align='center' sx={styles.cellStyles}>
                                        <Typography variant="body-2" sx={styles.textStyles}>
                                            {data.lastActive}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align='center' sx={styles.cellStyles}>
                                        <Typography variant="body-2" sx={styles.textStyles}>
                                            {data.permissions}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align='center' sx={styles.cellStyles}>
                                        <Typography variant="body-2" sx={{ ...styles.textStyles, backgroundColor: `${data.status == "Active" ? "#4CAF50" : "#ED1C24"}`, color: 'white', borderRadius: '5px' }}>
                                            {data.status}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align='center' sx={styles.cellStyles} >
                                        <Typography variant="body-2" sx={{ ...styles.textStyles, display: "flex", justifyContent: "center", alignItems: 'center', gap: '10px' }}>
                                            <BorderColorOutlinedIcon />
                                            <DeleteIcon color='warning' />
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box >
    );
};

export default Table1;

Table1.propTypes = {
    tableData: PropTypes.array,
    tableHeadings: PropTypes.array,

};
