import { Box, Button, Typography } from "@mui/material"
import { HiOutlineArrowLeft } from "react-icons/hi";
import { ImVideoCamera } from "react-icons/im";
import { VscDebugRestart } from "react-icons/vsc";
import { styles } from "./CameraDetails.style";
import PropTypes from 'prop-types'


const CameraDetails = ({ recentRecordings, cameraDetails, healthLogs }) => {

    return (
        <Box sx={styles.screen}>
            <Box sx={{ width: '1116px', margin: "auto" }}>
                <Box sx={styles.headerContainer}>
                    <Box sx={styles.leftHeaderBox}>
                        <Box sx={styles.arrowLeftBox}>
                            <HiOutlineArrowLeft style={styles.arrowLeftIcon} />
                        </Box>
                        <Box sx={styles.textContent}>
                            <Typography varient='h7'>
                                <span style={styles.vmsText}>
                                    VMS
                                </span>
                                / Camera / Camera Details
                            </Typography>
                            <Typography sx={styles.subTitle}>Bank Entrance-front-view Camera1</Typography>
                            <Typography varient='h7' sx={styles.mainTitle}>View and manage camera details, recordings, and connection details</Typography>
                        </Box>
                    </Box>
                    <Box sx={styles.rightHeaderBox}>
                        <Button sx={{ ...styles.actionButton, ...styles.editButton }}>Edit Camera</Button>
                        <Button sx={{ ...styles.actionButton, ...styles.deactivateButton }}>Deactivate</Button>
                        <Button sx={{ ...styles.actionButton, ...styles.deleteButton }}>Delete Camera</Button>
                    </Box>
                </Box>
                <Box sx={styles.container}>
                    <Box sx={styles.buttonContainer}>
                        <Button sx={styles.actionButton}>
                            <ImVideoCamera style={styles.videoCameraIcon} />
                            <span>View Recorded Videos</span>
                        </Button>
                        <Button sx={styles.actionButton}>
                            <VscDebugRestart style={styles.debugRestartIcon} />
                            <span>Refetch Camera</span>
                        </Button>
                    </Box>
                    <Box sx={styles.imageContainer}>
                        <Box sx={styles.imageBox}>
                            <img
                                style={styles.image}
                                src="https://s3-alpha-sig.figma.com/img/dbe5/8599/027f88064c915fe23e7da6a8db04d152?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bSzxfCbOw5HZCtZOdiqix6wwBEt~jya-NCFk8fR0IKxUO3MqQBERJTO3SEWHjwXKaSHx1nc0374YCKL7t8OhIhxYXbMeMaixZtUzZ5nkcOFN4HD5r9Y7XkIQikzQ~LTWxwAuU6VdvYvsNYZu-qj5vmYw18NOucVRurHKrG9BluUnIi4SVztUUmd5JrNFeTJ6aC5m1jTXO4pNzA0JMN7VWC3O9Ycb0wTYsZzL3h3MAeCWTRKKfTjrYhaaWufoAmk0WPAdKI~X7kbS1a4Nh9IB3DwlGsEAKYTb3I1hVUqI1lCIFXHiDEwBhOa7~XqHqZ71jzYU5a~-PuwKnVCgigC9UA__"
                                alt="Camera Image"
                            />
                        </Box>
                        <Box sx={styles.detailsBox}>
                            <Box sx={styles.detailsContainer}>
                                <Box sx={styles.detailsHeader}>
                                    <Typography variant="h5" sx={styles.cameraDetailsTitle}>Camera Details</Typography>
                                    <span style={styles.activeStatus}>Active</span>
                                </Box>
                                <Box sx={styles.detailsContent}>
                                    <Box sx={styles.detailItem}>
                                        <Typography sx={styles.detailLabel}>Location :</Typography>
                                        <Typography sx={styles.detailValue}>
                                            {cameraDetails.location}
                                        </Typography>
                                    </Box>
                                    <Box sx={styles.detailItem}>
                                        <Typography sx={styles.detailLabel}>City :</Typography>
                                        <Typography sx={styles.detailValue}>
                                            {cameraDetails.city}
                                        </Typography>
                                    </Box>
                                    <Box sx={styles.detailItem}>
                                        <Typography sx={styles.detailLabel}>Timezone :</Typography>
                                        <Typography sx={styles.detailValue}>{cameraDetails.timezone}</Typography>
                                    </Box>
                                    <Box sx={styles.detailItem}>
                                        <Typography sx={styles.detailLabel}>Date Added :</Typography>
                                        <Typography sx={styles.detailValue}>{cameraDetails.dateAdded}</Typography>
                                    </Box>
                                    <Box sx={styles.detailItem}>
                                        <Typography sx={styles.detailLabel}>Last Update :</Typography>
                                        <Typography sx={styles.detailValue}>{cameraDetails.lastUpdate}</Typography>
                                    </Box>
                                    <Box sx={styles.detailItem}>
                                        <Typography sx={styles.detailLabel}>Manufacture details:</Typography>
                                        <Typography sx={styles.detailValue}>{cameraDetails.manufacture}</Typography>
                                    </Box>
                                    <Box sx={styles.detailItem}>
                                        <Typography sx={styles.detailLabel}>RTSP/HLS URL :</Typography>
                                        <Typography sx={styles.detailValue} style={{ color: '#0043C4', textDecoration: 'underline' }}>
                                            Copy URL
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={styles.healthAlertBox}>
                        <Box sx={styles.healthAlertItem}>
                            <Typography sx={styles.healthAlertTitle}>Offline Alert</Typography>
                            <Typography sx={styles.healthAlertTime}>If camera is continuously offline for</Typography>
                            <Typography sx={styles.healthAlertValue}>12 Minutes</Typography>
                            <Typography sx={styles.healthAlertTime}>Send an email to</Typography>
                            <Typography sx={styles.healthAlertRecipient}>email.com</Typography>
                        </Box>
                        <Box sx={styles.healthGradeBox}>
                            <Typography sx={styles.healthGradeTitle}>Health Grade</Typography>
                            <Typography sx={styles.healthGradeValue}>96%</Typography>
                            <Typography sx={styles.healthGradeDescription}>
                                Cheers, this camera had no offline time in the last 30 days
                            </Typography>
                            <Typography sx={styles.healthGradeGrade} style={{ color: "#4CAF50" }}>
                                Grade A
                            </Typography>
                        </Box>
                        <Box sx={styles.healthLogsBox}>
                            <Typography sx={styles.healthLogsTitle}>Health Logs</Typography>
                            {healthLogs.map((log, index) => {
                                return <Typography sx={styles.healthLogsTime} key={index}>{log}</Typography>
                            })}
                        </Box>
                    </Box>
                    <Box sx={styles.recentRecordingsBox}>
                        <Box sx={styles.recentRecordingsHeader}>
                            <Typography sx={styles.recentRecordingsTitle}>Recent Recordings</Typography>
                            <Typography sx={styles.viewAllLink}>View All</Typography>
                        </Box>

                        <Box sx={styles.recentRecordingsContainer}>
                            {recentRecordings.map((recording, index) => {
                                console.log(recording)
                                return <Box sx={styles.recordingItemBox} key={index}>
                                    <Box sx={styles.recordingItemImage}>
                                        <img
                                            src={recording.imagePath}
                                            style={styles.recordingItemImage}
                                            alt="Recording Image"
                                        />
                                    </Box>
                                    <Typography sx={styles.recordingItemTitle}>{recording.name}</Typography>
                                    <Typography sx={styles.recordingItemTime}>{recording.time}</Typography>
                                </Box>
                            })}

                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}



CameraDetails.PropTypes = {
    recentRecordings: PropTypes.array,
    cameraDetails: PropTypes.object,
    healthlogs: PropTypes.array
}

export default CameraDetails