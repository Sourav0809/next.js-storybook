import LoginForm from "../components/Forms/LoginForm"

export default {
    title: "Forms",
    component: LoginForm,
    tags: ['autodocs'],
}

const Template = args => <LoginForm {...args} />

export const LoginScreen = Template.bind({})

LoginScreen.args = {
    input1Label: "Your Name",
    input2Label: "Company Name",
    input3Label: "Select Industry",
}

