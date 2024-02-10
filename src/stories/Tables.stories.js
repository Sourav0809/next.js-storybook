import Table1 from "../components/Tables/Table1"

export default {
    title: "Tables",
    component: Table1,
    tags: ['autodocs'],
}

const Template = args => <Table1 {...args} />

export const table1 = Template.bind({})

table1.args = {
    tableData: [
        {
            name: "Peter John",
            email: "Peter@gmail.com",
            role: "Owner",
            location: "Adam Stall, Coimbatore",
            lastActive: "Sep 13, 2023 5:51 PM",
            permissions: "All Permissions",
            status: "Active",
        },

        {
            name: "Lingan",
            email: "Lin@gmail.com",
            role: "Executive",
            location: "MMDA, Coimbatore",
            lastActive: "Today, 2023 2:11 PM",
            permissions: "3 Permissions",
            status: "Active",
        },

        {
            name: "Adam",
            email: "Adam@gmail.com",
            role: "Admin",
            location: "DEO Office, Delhi",
            lastActive: "Sep 13, 2023 5:51 PM",
            permissions: "6 Permissions",
            status: "Active",
        },
        {
            name: "Smith",
            email: "Smith@gmail.com",
            role: "Supervisor",
            location: "Plot Hub, Comimbatore",
            lastActive: "Sep 13, 2023 5:51 PM",
            permissions: "5 Permissions",
            status: "Active",
        },
        {
            name: "John Abraham",
            email: "John@gmail.com",
            role: "Executive",
            location: "CA, Comimbatore",
            lastActive: "Sep 13, 2023 5:51 PM",
            permissions: "2 Permissions",
            status: "Inactive",
        },


    ],
    tableHeadings: ["Name", "Email", "Role", "Locations", "Last Active", "Permissions", "Status", "Action"],

}