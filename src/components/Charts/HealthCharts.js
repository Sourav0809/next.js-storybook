import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Box, Button, Typography } from '@mui/material';
import { BiSolidError } from 'react-icons/bi';
import { GiCctvCamera } from 'react-icons/gi';
import { MdInfo } from 'react-icons/md';
import { styles } from './HealthCharts.style';

const HealthCharts = () => {
    const chartContainerRef = useRef(null);
    // Dummy data
    const data = {
        labels: ['Super Healthy', 'Healthy', 'Warning', 'Danger'],
        datasets: [
            {
                data: [56, 35, 27, 6],
                backgroundColor: ['#19A01E', '#00DB4A', '#FB8B34', '#ED1C24'],
                borderColor: 'white',
                borderWidth: 0,
                cutout: '80%',
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
    };

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
                            <span style={{ fontSize: '30px', fontWeight: 'bold' }}>124</span>
                            <span>Cameras</span>
                        </Typography>
                        <canvas ref={chartContainerRef} width="100%" height="100%"></canvas>
                    </Box>

                    <Box sx={styles.textContainer}>
                        <Box sx={styles.cameraIconBox}>
                            <GiCctvCamera style={styles.cameraIcon} />
                            <Typography variant="h7">
                                Totally 124 Cameras are in 9 NVRs and installed in 12 Locations
                            </Typography>
                        </Box>

                        <Box sx={styles.downtimeBox}>
                            <Box sx={styles.errorIconBox}>
                                <BiSolidError style={styles.errorIcon} />
                                <Typography variant="h7">
                                    6 Cameras were experiencing downtime in Last 30 days
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

export default HealthCharts;
