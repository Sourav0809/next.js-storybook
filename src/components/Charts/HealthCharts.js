import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Box, Button, Typography } from '@mui/material';
import { BiSolidError } from "react-icons/bi";
import { GiCctvCamera } from "react-icons/gi";
import { MdInfo } from "react-icons/md";
const HealthCharts = () => {
    const chartContainerRef = useRef(null);

    const styles = {
        screen: {
            height: '100vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#E0E0E0',
        },
        mainContainer: {
            width: '1076px',
            backgroundColor: 'white',
            padding: '15px',
            borderRadius: '20px'

        },
        chartContainer: {
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '210px',
            height: '210px',
        },
        textContainer: {
            width: '814px',
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
            gap: '16px'
        },
    };

    // Dummy data
    const data = {
        labels: ['Super Healthy', 'Healthy', 'Warning', "Danger"],
        datasets: [{
            data: [56, 35, 27, 6],
            backgroundColor: ['#19A01E', '#00DB4A', '#FB8B34', '#ED1C24'],
            borderColor: 'white',
            borderWidth: 0,
            cutout: '80%',
        }],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            }
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
                <Typography variant='h6' sx={{ textAlign: "center", fontWeight: 600, padding: "10px" }}>Camera Health</Typography>
                <Box sx={{ display: "flex", gap: '5px' }}>
                    <Box sx={styles.chartContainer}>
                        <Typography variant="h7" sx={{ position: "absolute", display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center", fontSize: "20px" }} >
                            <span style={{ fontSize: "30px", fontWeight: 'bold' }}>124</span>
                            <span>Cameras</span>
                        </Typography>
                        <canvas ref={chartContainerRef} width="100%" height="100%"></canvas>
                    </Box>

                    <Box sx={styles.textContainer}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: '10px', backgroundColor: '#F1F1F1', fontWeight: 600, paddingY: '20px', paddingX: '10px' }}>
                            <GiCctvCamera style={{ fontSize: "25px", color: "#0043C4" }} />
                            <Typography variant="h7" >
                                Totally 124 Cameras are in 9 NVRs and installed in 12 Locations
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#FFBFCC', fontWeight: 600 }}>
                            <Box sx={{ display: "flex", justifyContent: 'center', alignItems: "center", gap: "10px" }}>
                                <BiSolidError style={{ color: "#ED1C46", fontSize: "25px" }} />
                                <Typography variant="h7">
                                    6 Cameras were experiencing downtime in Last 30 days
                                </Typography>
                            </Box>
                            <Button variant="h7" sx={{ backgroundColor: 'white', paddingX: '10px', paddingY: '10px', fontWeight: 'bold' }}>
                                View Cameras
                            </Button>
                        </Box>

                        <Typography sx={{ marginTop: '20px' }}>
                            {data.labels.map((label, index) => (
                                <Box key={index} style={{ marginRight: '10px', display: 'inline-block' }}>
                                    <Box sx={{ display: "flex", justifyContent: 'center', alignItems: "center", gap: "5px", paddingX: '5px' }}>
                                        <Box sx={{ height: "15px", width: "15px", borderRadius: "50%", backgroundColor: `${data.datasets[0].backgroundColor[index]}` }} />
                                        <Typography variant='h7'>
                                            {label}
                                        </Typography>
                                        <Typography variant='h7'>
                                            ({data.datasets[0].data[index]})
                                        </Typography>
                                        <MdInfo style={{ color: '#8F90A6', fontSize: "20px" }} />
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
