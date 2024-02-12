import CameraCard from "../components/Cards/CameraCard";
import ReceipeCard from "../components/Cards/ReceipeCard";


export default {
    title: "Cards",
    tags: ['autodocs'],
}

const Template = args => <CameraCard {...args} />
const Template1 = args => <ReceipeCard {...args} />

export const cameracard = Template.bind({})
export const receipecard = Template1.bind({})

export const CombinedCards = () => (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', gap: '200px', alignItems: 'center' }}>
            <CameraCard />
            <ReceipeCard />
        </div>
    </div>
);
