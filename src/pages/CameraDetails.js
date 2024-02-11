import { Box, Button, Typography } from "@mui/material"
import { HiOutlineArrowLeft } from "react-icons/hi";
import { ImVideoCamera } from "react-icons/im";
import { VscDebugRestart } from "react-icons/vsc";
const CameraDetails = () => {

    const style = {
        screen: {
            width: '100%',
            height: '100%',
            backgroundColor: "#FBFCFD"
        },
    }
    return (
        <Box sx={style.screen}>
            <Box sx={{ width: '1116px', margin: "auto" }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', gap: "10px" }}>
                        <Box sx={{ padding: '10px', backgroundColor: "#EFEFEF", width: '20px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                            <HiOutlineArrowLeft style={{ fontSize: "30px" }} />
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', gap: '5px' }}>
                            <Typography varient='h7'>
                                <span style={{ fontSize: '40px' }}>
                                    VMS
                                </span>
                                / Camera / Camera Details
                            </Typography>
                            <Typography sx={{ opacity: 0.7, fontSize: '15px' }} varient='h7'>Bank Entrance-front-view Camera1</Typography>
                            <Typography varient='h7'>View and manage camera details, recordings and connection details</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '8px', justifyContent: 'center', alignItems: "center" }}>
                        <Button sx={{ padding: '10px', border: '1.4px solid black', color: "black", borderRadius: '8px', textTransform: 'none' }}>Edit Camera</Button>
                        <Button sx={{ padding: '10px', border: '1.4px solid black', color: "black", borderRadius: '8px', textTransform: 'none' }}>Deactivate</Button>
                        <Button sx={{ padding: '10px', border: '1.4px solid red', color: "red", borderRadius: '8px', textTransform: 'none' }}>Delete Camera</Button>
                    </Box>
                </Box>
                <Box sx={{ backgroundColor: "#FFFFFF", width: '100%', marginTop: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", }}>
                    <Box sx={{ padding: "30px", display: 'flex', gap: '10px' }}>
                        <Button sx={{ padding: '15px', color: "black", borderRadius: '8px', textTransform: 'none', backgroundColor: '#EFEFEF', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: "10px", fontWeight: 'bold' }}>
                            <ImVideoCamera style={{ fontSize: '22px' }} />
                            <span>View Recorded Videos</span>
                        </Button>
                        <Button sx={{ padding: '15px', color: "black", borderRadius: '8px', textTransform: 'none', backgroundColor: '#EFEFEF', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: "10px", fontWeight: 'bold' }}>
                            <VscDebugRestart style={{ fontSize: '22px' }} />
                            <span>
                                Refetch Camera
                            </span>
                        </Button>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '20px', padding: '15px' }}>
                        <Box sx={{ width: '600px', height: '336px', }}>
                            <img
                                style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '12px' }}
                                src="https://s3-alpha-sig.figma.com/img/dbe5/8599/027f88064c915fe23e7da6a8db04d152?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bSzxfCbOw5HZCtZOdiqix6wwBEt~jya-NCFk8fR0IKxUO3MqQBERJTO3SEWHjwXKaSHx1nc0374YCKL7t8OhIhxYXbMeMaixZtUzZ5nkcOFN4HD5r9Y7XkIQikzQ~LTWxwAuU6VdvYvsNYZu-qj5vmYw18NOucVRurHKrG9BluUnIi4SVztUUmd5JrNFeTJ6aC5m1jTXO4pNzA0JMN7VWC3O9Ycb0wTYsZzL3h3MAeCWTRKKfTjrYhaaWufoAmk0WPAdKI~X7kbS1a4Nh9IB3DwlGsEAKYTb3I1hVUqI1lCIFXHiDEwBhOa7~XqHqZ71jzYU5a~-PuwKnVCgigC9UA__" />
                        </Box>
                        <Box sx={{ width: '436px', border: "1px solid #E5E5E5", borderRadius: '6px' }}>
                            <Box sx={{ padding: '20px' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="h5" sx={{ fontWeight: 500 }}>Camera Details</Typography>
                                    <span style={{ backgroundColor: '#00DB4A', borderRadius: '4px', color: "white", padding: '5px' }}>Active</span>
                                </Box>
                                <Box sx={{ marginTop: "20px", display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <Box sx={{ display: 'flex', gap: "10px" }}>
                                        <Typography sx={{ fontWeight: "bold", fontSize: '16px' }}>
                                            Location :
                                        </Typography>
                                        <Typography sx={{ opacity: "0.7", fontSize: '16px' }}>
                                            Coimbatore
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: "10px" }}>
                                        <Typography sx={{ fontWeight: "bold", fontSize: '16px' }}>
                                            City :
                                        </Typography>
                                        <Typography sx={{ opacity: "0.7", fontSize: '16px' }}>
                                            Coimbatore
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: "10px" }}>
                                        <Typography sx={{ fontWeight: "bold", fontSize: '16px' }}>
                                            Timezone :
                                        </Typography>
                                        <Typography sx={{ opacity: "0.7", fontSize: '16px' }}>
                                            Delhi-India
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: "10px" }}>
                                        <Typography sx={{ fontWeight: "bold", fontSize: '16px' }}>
                                            Date Added :
                                        </Typography>
                                        <Typography sx={{ opacity: "0.7", fontSize: '16px' }}>
                                            Aug 03, 2023 12:01:42 PM
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: "10px" }}>
                                        <Typography sx={{ fontWeight: "bold", fontSize: '16px' }}>
                                            Last Update :
                                        </Typography>
                                        <Typography sx={{ opacity: "0.7", fontSize: '16px' }}>
                                            Aug 03, 2023 12:01:42 PM
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: "10px" }}>
                                        <Typography sx={{ fontWeight: "bold", fontSize: '16px' }}>
                                            Manufacture details: :
                                        </Typography>
                                        <Typography sx={{ opacity: "0.7", fontSize: '16px' }}>
                                            ADT
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: "10px" }}>
                                        <Typography sx={{ fontWeight: "bold", fontSize: '16px' }}>
                                            RTSP/HLS URL :
                                        </Typography>
                                        <Typography sx={{ fontSize: '16px', color: '#0043C4', textDecoration: 'underline' }}>
                                            Copy URL
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: "column", gap: '10px', padding: '20px' }}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
                            Camera Health and Alert
                        </Typography>
                        <Box sx={{ display: 'flex', gap: '10px' }}>
                            <Box sx={{ width: '338px', height: '162px', border: "1px solid #E5E5E5", borderRadius: '6px', display: 'flex', flexDirection: 'column', gap: '10px', padding: "15px" }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>
                                    Offline Alert
                                </Typography>
                                <Typography sx={{ fontSize: "13px", opacity: "0.7" }}>
                                    If camera is continuously offline for
                                </Typography>
                                <Typography sx={{ fontWeight: 'bold', fontSize: "20px" }}>
                                    12 Minutes
                                </Typography>
                                <Typography sx={{ fontSize: "13px", opacity: "0.7" }}>
                                    Send an email to
                                </Typography>
                                <Typography sx={{ fontWeight: 'bold', fontSize: "13px" }}>
                                    email.com
                                </Typography>
                            </Box>
                            <Box sx={{ width: '338px', height: '162px', border: "1px solid #E5E5E5", borderRadius: '6px', display: 'flex', flexDirection: 'column', gap: '10px', padding: "15px" }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>
                                    Health Grade
                                </Typography>

                                <Typography sx={{ fontWeight: 'bold', fontSize: "28px" }}>
                                    96%
                                </Typography>
                                <Typography sx={{ fontSize: "13px", opacity: "0.7" }}>
                                    Cheers, this camera had no offline time in the last 30 days
                                </Typography>
                                <Typography sx={{ fontSize: "13px", color: "#4CAF50" }}>
                                    Grade A
                                </Typography>
                            </Box>
                            <Box sx={{ width: '338px', height: '162px', border: "1px solid #E5E5E5", borderRadius: '6px', display: 'flex', flexDirection: 'column', gap: '10px', padding: "15px" }}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>
                                    Health Logs
                                </Typography>
                                <Typography sx={{ fontSize: "13px", opacity: "0.7" }}>
                                    Today, 04:37 pm: Activated
                                </Typography>
                                <Typography sx={{ fontSize: "13px", opacity: "0.7" }}>
                                    23 Aug, 02:22 pm: Deactivated
                                </Typography>
                                <Typography sx={{ fontSize: "13px", opacity: "0.7" }}>
                                    21 Aug, 05:12 am: Activated
                                </Typography>
                                <Typography sx={{ fontSize: "13px", opacity: "0.7" }}>
                                    20 Aug, 02:12 am: Deactivated
                                </Typography>
                                <Typography sx={{ fontSize: "13px", opacity: "0.7" }}>
                                    19 Aug, 02:12 am: Deactivated
                                </Typography>
                            </Box>

                        </Box>
                    </Box>
                    <Box sx={{ paddingY: '30px', paddingX: '20px', display: 'flex', gap: '10px', flexDirection: 'column', }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                                Recent Recordings
                            </Typography>
                            <Typography sx={{ fontWeight: "bold", fontSize: "16px", textDecoration: 'underline' }}>
                                View All
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '10px' }}>
                            <Box sx={{ width: "254px", display: 'flex', flexDirection: 'column', gap: "5px", border: "1px solid #E5E5E5", padding: '10px', borderRadius: '5px' }}>
                                <Box sx={{ width: '100%', height: '167px' }}>
                                    <img src="https://s3-alpha-sig.figma.com/img/858f/7625/7e1bdb331fa205fba9173b96b7ca0c1b?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GC6da2z0I3NOKp3BVIhNJxvTbJeH3ogwPFxbwQBHHNUATkDZIf9RIjsp34TAu1ruMxWE1CFhns6CY5V0lDA1QQieOlMjIpCPXkDSZs3wuTXi1FALhBMNOZQR5g6HBci0O9eXBS2syx2Amt~iS8Pqq2LUNVjeZMWEe3-A-AOLTtvxB4HLc8Er40hdmtrUBowJhpfrThV7wmeGGsKpPHklzKobR8azB2igO9wgbVal1yML1l~qOgUMQna1Z4kvBHxQHfsgVrLArz6crWWFlwwCo0boBkErphulZoc5AaF3eJI0UAOex~Zn3Bcs6CYwuxLAuefQIsgJHo9aKnN5UVmO5w__"
                                        style={{ width: "100%", height: '100%', objectFit: "cover", borderRadius: '12px' }} />
                                </Box>
                                <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
                                    Recent Recordings
                                </Typography>
                                <Typography sx={{ opacity: "0.7", fontSize: "12px" }}>
                                    Today, 04:42 pm
                                </Typography>
                            </Box>

                            <Box sx={{ width: "254px", display: 'flex', flexDirection: 'column', gap: "5px", border: "1px solid #E5E5E5", padding: '10px', borderRadius: '5px' }}>
                                <Box sx={{ width: '100%', height: '167px' }}>
                                    <img src="https://s3-alpha-sig.figma.com/img/858f/7625/7e1bdb331fa205fba9173b96b7ca0c1b?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GC6da2z0I3NOKp3BVIhNJxvTbJeH3ogwPFxbwQBHHNUATkDZIf9RIjsp34TAu1ruMxWE1CFhns6CY5V0lDA1QQieOlMjIpCPXkDSZs3wuTXi1FALhBMNOZQR5g6HBci0O9eXBS2syx2Amt~iS8Pqq2LUNVjeZMWEe3-A-AOLTtvxB4HLc8Er40hdmtrUBowJhpfrThV7wmeGGsKpPHklzKobR8azB2igO9wgbVal1yML1l~qOgUMQna1Z4kvBHxQHfsgVrLArz6crWWFlwwCo0boBkErphulZoc5AaF3eJI0UAOex~Zn3Bcs6CYwuxLAuefQIsgJHo9aKnN5UVmO5w__"
                                        style={{ width: "100%", height: '100%', objectFit: "cover", borderRadius: '12px' }} />
                                </Box>
                                <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
                                    Recent Recordings
                                </Typography>
                                <Typography sx={{ opacity: "0.7", fontSize: "12px" }}>
                                    Today, 04:42 pm
                                </Typography>
                            </Box>

                            <Box sx={{ width: "254px", display: 'flex', flexDirection: 'column', gap: "5px", border: "1px solid #E5E5E5", padding: '10px', borderRadius: '5px' }}>
                                <Box sx={{ width: '100%', height: '167px' }}>
                                    <img src="https://s3-alpha-sig.figma.com/img/858f/7625/7e1bdb331fa205fba9173b96b7ca0c1b?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GC6da2z0I3NOKp3BVIhNJxvTbJeH3ogwPFxbwQBHHNUATkDZIf9RIjsp34TAu1ruMxWE1CFhns6CY5V0lDA1QQieOlMjIpCPXkDSZs3wuTXi1FALhBMNOZQR5g6HBci0O9eXBS2syx2Amt~iS8Pqq2LUNVjeZMWEe3-A-AOLTtvxB4HLc8Er40hdmtrUBowJhpfrThV7wmeGGsKpPHklzKobR8azB2igO9wgbVal1yML1l~qOgUMQna1Z4kvBHxQHfsgVrLArz6crWWFlwwCo0boBkErphulZoc5AaF3eJI0UAOex~Zn3Bcs6CYwuxLAuefQIsgJHo9aKnN5UVmO5w__"
                                        style={{ width: "100%", height: '100%', objectFit: "cover", borderRadius: '12px' }} />
                                </Box>
                                <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
                                    Recent Recordings
                                </Typography>
                                <Typography sx={{ opacity: "0.7", fontSize: "12px" }}>
                                    Today, 04:42 pm
                                </Typography>
                            </Box>

                            <Box sx={{ width: "254px", display: 'flex', flexDirection: 'column', gap: "5px", border: "1px solid #E5E5E5", padding: '10px', borderRadius: '5px' }}>
                                <Box sx={{ width: '100%', height: '167px' }}>
                                    <img src="https://s3-alpha-sig.figma.com/img/858f/7625/7e1bdb331fa205fba9173b96b7ca0c1b?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GC6da2z0I3NOKp3BVIhNJxvTbJeH3ogwPFxbwQBHHNUATkDZIf9RIjsp34TAu1ruMxWE1CFhns6CY5V0lDA1QQieOlMjIpCPXkDSZs3wuTXi1FALhBMNOZQR5g6HBci0O9eXBS2syx2Amt~iS8Pqq2LUNVjeZMWEe3-A-AOLTtvxB4HLc8Er40hdmtrUBowJhpfrThV7wmeGGsKpPHklzKobR8azB2igO9wgbVal1yML1l~qOgUMQna1Z4kvBHxQHfsgVrLArz6crWWFlwwCo0boBkErphulZoc5AaF3eJI0UAOex~Zn3Bcs6CYwuxLAuefQIsgJHo9aKnN5UVmO5w__"
                                        style={{ width: "100%", height: '100%', objectFit: "cover", borderRadius: '12px' }} />
                                </Box>
                                <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
                                    Recent Recordings
                                </Typography>
                                <Typography sx={{ opacity: "0.7", fontSize: "12px" }}>
                                    Today, 04:42 pm
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}

export default CameraDetails