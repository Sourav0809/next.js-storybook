import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Box, Button, Typography } from '@mui/material';
import { BiSolidError } from 'react-icons/bi';
import { GiCctvCamera } from 'react-icons/gi';
import { MdInfo } from 'react-icons/md';
import { styles } from './HealthCharts.style';
import PropTypes from 'prop-types';

const HealthCharts = ({ data, options }) => {

    const chartContainerRef = useRef(null);
    const totalCamera = data.datasets[0].data.reduce((prev, curr) => prev += curr)


    useEffect(() => {
        const ctx = chartContainerRef.current?.getContext('2d');
        if (ctx) {
            const myChart = new Chart(ctx, { type: 'pie', data, options });
            return () => {
                // Cleanup on unmount
                myChart.destroy();
            };
        }
    }, [data, options]);

    return (
        <Box sx={styles.screen}>
            <Box sx={styles.mainContainer}>
                <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 600, padding: '10px' }}>
                    Camera Health
                </Typography>
                <Box sx={{ display: 'flex', gap: '5px' }}>
                    <Box sx={styles.chartContainer}>
                        <Typography variant="h7" sx={styles.chartText}>
                            <span style={{ fontSize: '30px', fontWeight: 'bold' }}>{totalCamera}</span>
                            <span>Cameras</span>
                        </Typography>
                        <canvas ref={chartContainerRef} width="100%" height="100%"></canvas>
                    </Box>

                    <Box sx={styles.textContainer}>
                        <Box sx={styles.cameraIconBox}>
                            <GiCctvCamera style={styles.cameraIcon} />
                            <Typography variant="h7">
                                Totally {totalCamera} Cameras are in {data.datasets[0].NVR} NVRs and installed in {data.datasets[0].locations} Locations
                            </Typography>
                        </Box>

                        <Box sx={styles.downtimeBox}>
                            <Box sx={styles.errorIconBox}>
                                <BiSolidError style={styles.errorIcon} />
                                <Typography variant="h7">
                                    {data.datasets[0].downtimeCameras} Cameras were experiencing downtime in Last 30 days
                                </Typography>
                            </Box>
                            <Button variant="h7" sx={styles.infoButton}>
                                View Cameras
                            </Button>
                        </Box>

                        <Typography sx={{ marginTop: '20px' }}>
                            {data.labels.map((label, index) => (
                                <Box key={index} style={{ marginRight: '10px', display: 'inline-block' }}>
                                    <Box sx={styles.labelBox}>
                                        <Box
                                            sx={{
                                                ...styles.labelCircle,
                                                backgroundColor: `${data.datasets[0].backgroundColor[index]}`,
                                            }}
                                        />
                                        <Typography variant="h7">{label}</Typography>
                                        <Typography variant="h7">({data.datasets[0].data[index]})</Typography>
                                        <MdInfo style={styles.infoIcon} />
                                    </Box>
                                </Box>
                            ))}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

HealthCharts.PropTypes = {
    data: PropTypes.object,
    options: PropTypes.object
}


export default HealthCharts;
