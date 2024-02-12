import { Box } from "@mui/material";
import CameraCard from "../components/Cards/CameraCard/CameraCard";
import ReceipeCard from "../components/Cards/ReceipeCard/ReceipeCard";

const cameraCardData = {
    imagePath: 'https://s3-alpha-sig.figma.com/img/3579/0eaa/ffb7b894757284ab45e7f7045ffd1997?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6Mej4Fuqe1iguym4AbJ-G-QhWqVosMtLGr~4J9N8u4~fn8Q1ob9NpvmpUxBraT0PmtloHraCUTkGvkw7t2zK~R2dNO68w8ybV6jiqH8WhH2V-xApbHj9nfmON-2Sbeqo7ybkROA62zLVAhzJTX45j4NOuCBxihn20Fb25JrxDvUhA3FK6AUrtYaEHf9rR2SRwdBQCASIfdSD9DywkGMURiZNWlJmCpGT~WJqKbWmwX1glEH87jziix6raWwo0i5O~lwEJyhBYHZ4I2VK638QipMPwm-KksBVQzn5jVv3ZF5kjCAIalsizf7RYRdEuYh098h0YPbht38BVAUtAKQUA__',
    cameraName: "Bank Entrance-front-view Camera1",
    receipeAdded: 3,
    fetchStatus: "today, 04:45pm: Unidentified face detected",
    branch: "Coimbatore branch",
    status: "Active"
}

const receipeCardData = { name: 'Recipe Management' }

export default {
    title: "Cards",
    tags: ['autodocs'],
}

const Template = args => <CameraCard {...args} />;
const Template1 = args => <ReceipeCard {...args} />;

export const cameracard = Template.bind({});
export const receipecard = Template1.bind({});

cameracard.args = cameraCardData
receipecard.args = receipeCardData


export const CombinedCards = () => (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: "center", alignItems: 'center' }}>
        <Box sx={{ display: 'flex', gap: '200px', alignItems: 'center' }}>
            {cameracard(cameraCardData)}
            {receipecard(receipeCardData)}
        </Box>
    </Box>
);
