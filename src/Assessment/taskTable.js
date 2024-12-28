import React, { useEffect, useState } from "react";
import CreateTask from "./createNew.js";
import CustomModal from "../Component/Modal/modal.js";
import CustomTable from "../Component/Table/table.js";
import TopNavigation from "./topNav.js";
import { FiEdit, FiTrash2 } from "react-icons/fi";
const TaskTable = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [action,setAction]=useState(true);
    const [getData,setGetData]=useState({});
    useEffect(() => {
        // const getdata = localStorage.getItem("saveData");
        // console.log(getdata);
        listAPICall();
    }, []);
    const listAPICall = () => {
        fetch('http://localhost:3001/saveData', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => setTableData(data))
            .catch(error => console.error('Error fetching data:', error));
    }
    const handleCreateNew = (id,row) => {
        setOpenPopup(true);
        setGetData(row);

        setAction(id?false:true);
    }
    const handleModalBody = () => {
        return (
            <CreateTask closeBtnFuc={handleCloseModal} actionType={action} getData={getData} listAPICall={listAPICall}/>
        )
    }
    const handleCloseModal = () => {
        setOpenPopup(false);
    }
    const handleDelete = (id) =>{
        fetch(`http://localhost:3001/saveData/${id}`, { 
            method: 'DELETE'
          })
            .then(() =>{
                 console.log('User deleted')
                 listAPICall();
            })
            .catch(error => console.error('Error deleting user:', error));
          
    }
    const btnData = [
        {
            text: "Create New",
            handleonClick: handleCreateNew,
            className: "solid-btn",
        },
    ];
    const tableRows = [{
        Header: "Task Name",
        accessor: "taskName",
        Cell: ({ value, row }) => {
            return (

                value ? value : "-"
            );
        },
    },
    {
        Header: "Assignee",
        accessor: "assignee",
        Cell: ({ value, row }) => {
            return (
                value ? value : "-"
            );
        },
    },
    {
        Header: "Reporter",
        accessor: "reporter",
        Cell: ({ value, row }) => {
            return (
                value ? value : "-"
            );
        },
    },
    {
        Header: "Created",
        accessor: "created",
        Cell: ({ value, row }) => {
            return (
                value ? value : "-"
            );
        },
    },
    {
        Header: "Updated",
        accessor: "updated",
        Cell: ({ value, row }) => {
            return (
                value ? value : "-"
            );
        },
    },
    {
        Header: "Status",
        accessor: "status",
        Cell: ({ value, row }) => {
            return (
                value ? value : "-"
            );
        },
    },
    {
        Header: "Actions",
        Cell: ({ value, row }) => {
            return (
                <div className="action_div">
                    <div className="actcol">
                        <a title="Edit" >
                            <FiEdit
                                className="edit-icon"
                                onClick={() => {handleCreateNew(row.id,row)}}
                            />
                        </a>
                    </div>
                    <div className="actcol">
                        <a title="Delete" >
                            <FiTrash2
                                className="delete-icon"
                                onClick={() => { handleDelete(row.id) }}
                            />
                        </a>
                    </div>
                </div>
            );
        },
    },

    ]
    return (
        <section className="wrapper">
            <CustomTable
                columns={tableRows}
                data={tableData}
                btnData={btnData}
                isSearch={true}
            />
            <CustomModal
                modalOpen={openPopup}
                modalBody={() => handleModalBody()}
                closeBtn={true}
                closeBtnFuc={() => handleCloseModal()}
                size={"lg"}
            />
        </section>
    )
}

export default TaskTable;