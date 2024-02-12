import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { styles } from './Table1.style';

const Table1 = ({ tableHeadings, tableData }) => {

    return (
        <Box sx={styles.screen}>
            <Box sx={styles.parentContainer}>
                <TableContainer component={Paper} sx={styles.tableContainer}>
                    <Table aria-label="simple table" size="medium" >
                        <TableHead sx={styles.tableHead}>
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
                                            <FaEdit style={{ fontSize: "20px" }} />
                                            <RiDeleteBin6Line style={{ fontSize: "20px", color: '#ED1C24' }} />
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

Table1.propTypes = {
    tableData: PropTypes.array,
    tableHeadings: PropTypes.array,
};

export default Table1;
