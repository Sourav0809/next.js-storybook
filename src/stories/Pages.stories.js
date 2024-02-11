import CameraDetails from "../pages/CameraDetails"

export default {
    title: "Pages",
    component: CameraDetails,
    tags: ['autodocs'],
}

const Template = args => <CameraDetails {...args} />

export const cameradetails = Template.bind({})

cameradetails.args = {
}

