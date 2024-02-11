import { Box, Button, Typography } from '@mui/material';
import { IoLocationOutline } from "react-icons/io5";
import { MdError } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { ImVideoCamera } from "react-icons/im";
import { BiSolidBarChartSquare } from "react-icons/bi";

const CameraCard = () => {
    return (
        <Box sx={{ width: "340px", height: '412px', display: 'flex', flexDirection: 'column', gap: '10px', boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: '12px' }}>
            <Box sx={{ width: "100%", height: '241px' }}>
                <img src='https://s3-alpha-sig.figma.com/img/3579/0eaa/ffb7b894757284ab45e7f7045ffd1997?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SrPyFYsYEGdzQbZ7s-l79U1GwWtAowOZ8Dm5zKenFU5T-UxN6aQHEdGuZ0f7uth3CFJt3c5qZ3rHBpe1bAgWT7niHSXW45S1vu~JnaDYK~wFjeLZNft9hvSyck0kjQo4Ihf224AcusUCJ9tALAkT-Q~yvigp~N7pN5fvR-YjZi8a77ZRWtuWGbent0gavXFvKrJ0-cZZ3xF7xDLBbmhNar0J0PqfsHGDSkbGHEjSoyJhNQ5o6E5c4YkpXEKKhwqH4qm184Trz~Owbkqajw0W8NSWYXzFVUxbTdI0wY6sb7abOEq5~-DU4d1UksIEygnFzZcGiKs9H7oF2d3HiX4YbA__'
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}
                />
            </Box>
            <Box sx={{ paddingX: '10px', display: "flex", flexDirection: 'column', gap: '10px' }}>
                <Typography sx={{ fontSize: '16px', fontWeight: "bold", }}>
                    Bank Entrance-front-view Camera1
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: "10px" }}>
                    <IoLocationOutline />
                    <Typography sx={{ fontSize: '13px', opacity: '0.7' }}>
                        3 Recipes Added
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: "10px" }}>
                    <MdError />
                    <Typography sx={{ fontSize: '13px', opacity: '0.7' }}>
                        today, 04:45pm: Unidentified face detected
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: "10px" }}>
                    <IoLocationOutline />
                    <Typography sx={{ fontSize: '13px', opacity: '0.7' }}>
                        Coimbatore Branch
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: "10px" }}>
                    <Button sx={{ paddingY: '4px', paddingX: "8px", backgroundColor: "#00DB4A", color: "white", borderRadius: '4px', textTransform: 'none', }}>Active</Button>
                    <Box sx={{ display: 'flex', gap: '10px', fontSize: '25px' }}>
                        <MdDelete />
                        <ImVideoCamera />
                        <BiSolidBarChartSquare />
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default CameraCard