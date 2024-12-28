export const assigneeOption = [
    {
        "label": "Ramkumar R",
        "value": "Ramkumar R"
    },
    {
        "label": "Navin L",
        "value": "Navin L"
    }
]
export const statusOption = [
    {
        "label": "Pending",
        "value": "Pending"
    },
    {
        "label": "In Progress",
        "value": "In Progress"
    },
    {
        "label": "Completed",
        "value": "Completed"
    }
]

export const tableData = [
    {
        taskName: "Develop Login Page",
        assignee: "Alice",
        reporter: "Bob",
        created: "2024-12-20",
        updated: "2024-12-22",
        status: "In Progress",
    },
    {
        taskName: "Fix Bug #1234",
        assignee: "Charlie",
        reporter: "Alice",
        created: "2024-12-21",
        updated: "2024-12-23",
        status: "Completed",
    },
    {
        taskName: "Implement Dashboard",
        assignee: "",
        reporter: "Charlie",
        created: "2024-12-19",
        updated: "2024-12-24",
        status: "Pending",
    },
];

export const registerInput = [
    {
        name:"firstName",
        lable:"First Name",
        type:"text",
    },
    {
        name:"lastName",
        lable:"Last Name",
        type:"text",
    },
    {
        name:"username",
        lable:"Username",
        type:"text",
    },
    {
        name:"password",
        lable:"Password",
        type:"password",
    },
    {
        name:"email",
        lable:"Email",
        type:"text",
    },
    {
        name:"mobile",
        lable:"Mobile Number",
        type:"text",
    }
]

export const getDate = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = currentDate.getFullYear();

    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");
    const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    return formattedDateTime;

}