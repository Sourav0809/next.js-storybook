import HealthCharts from "../components/Charts/HealthCharts"

export default {
    title: "Charts",
    component: HealthCharts,
    tags: ['autodocs'],
}



const Template = args => <HealthCharts {...args} />

export const healthCharts = Template.bind({})

healthCharts.args = {
    data: ['name', 'price', 'data']
}

