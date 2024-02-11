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
    <>
        <CameraCard />
        <ReceipeCard />
    </>
);