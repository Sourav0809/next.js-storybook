import HealthCharts from "../components/Charts/HealthCharts"

export default {
    title: "Charts",
    component: HealthCharts,
    tags: ['autodocs'],
}



const Template = args => <HealthCharts {...args} />

export const healthCharts = Template.bind({})

healthCharts.args = {
    data: {
        labels: ['Super Healthy', 'Healthy', 'Warning', 'Danger'],
        datasets: [
            {
                data: [56, 35, 27, 6],
                backgroundColor: ['#19A01E', '#00DB4A', '#FB8B34', '#ED1C24'],
                borderColor: 'white',
                borderWidth: 0,
                cutout: '80%',
                NVR: 9,
                locations: 12,
                downtimeCameras: 6
            },
        ]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            },
        },
    }
};


