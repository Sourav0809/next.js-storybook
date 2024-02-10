import Form from "../components/Forms/Form"

export default {
    name: "Forms",
    component: Form,
    subcomponents: { LoginScreen: Form },
}

const Template = args => <Form {...args} />

export const LoginScreen = Template.bind({})

LoginScreen.args = {
    input1Label: "Your Name",
    input2Label: "Company Name",
    input3Label: "Select Industry",
}