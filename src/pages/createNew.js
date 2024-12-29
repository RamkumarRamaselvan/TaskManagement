import React, { useEffect, useState } from "react";
import Input from "../Component/input.js";
import CustomDropDown from "../Component/SelectDropDown/customDropDown.js";
import { statusOption } from '../app/mockData.js';
import { getDate } from "../app/helper.js";
import Button from 'react-bootstrap/Button';
const CreateTask = (props) => {
    const { closeBtnFuc, actionType, getData, listAPICall } = props;
    const {username} = JSON.parse(localStorage.getItem("userDetails")) || {};
    const registerUser = JSON.parse(localStorage.getItem("registerUser")) || [];

    const assigneeOption = registerUser?.map((data)=>{
        return {label:data.username,
             value:data.username
         }
     });
    const [state, setState] = useState({
        "taskName": "",
        "assignee": assigneeOption[0]?.value || "",
        "status": statusOption[0]?.value || "",
    });
    const [error, setError] = useState({
        "taskName": { error: false, msg: "" },
    });
    console.log(assigneeOption);
    useEffect(() => {
        if (getData) {
            setState((prevState) => ({
                ...prevState,
                "taskName": getData?.taskName,
                "assignee": getData?.assignee,
                "status": getData?.status,
            }))
        }
    }, [getData]);
    const handleOnChange = (name, value) => {
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }))
        setError((error) => ({
            ...error,
            [name]: { error: false, msg: "" },
        }));
    }
    const handleOnDropChange = (name, value) => {
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }
    const validate = () => {
        let valid = true;
        if (state.taskName == "") {
            setError((error) => ({
                ...error,
                taskName: { error: true, msg: "Please Enter Task Name." },
            }));
            valid = false;
        }
        return valid;
    }
    const handleSave = () => {
        const { taskName, assignee, status } = state;
        const valid = validate();
        const payload = {
            taskName,
            assignee,
            status,
            reporter: username,
            created: getData ? getData.created : getDate(),
            updated: getDate(),
        }
        if (valid) {
            fetch(`http://localhost:3001/saveData${getData ? `/${getData.id}` : ''}`, {
                method: getData ? 'PUT' : 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
                .then(response => response.json())
                .then(data => {
                    alert(getData?"Task Updated Successfully":"Task Created Successfully");
                    listAPICall();
                    closeBtnFuc();
                })
                .catch(error => alert("something went wrong!"));
        }
    }
    return (
        <section>
            <h4>{actionType ? "Create" : "Update"} Task</h4>
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <Input
                            label="Task Name"
                            type="Text"
                            name="taskName"
                            error={error.taskName.error}
                            errorMessage={error.taskName.msg}
                            // customClassName="form-control"
                            id="taskName"
                            placeholder="Enter Task Name"
                            value={state.taskName}
                            onChange={(e) => handleOnChange("taskName", e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <CustomDropDown
                            label="Assignee"
                            value={state.assignee}
                            option={assigneeOption}
                            onChange={(e) => handleOnDropChange("assignee", e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <CustomDropDown
                            label="Status"
                            value={state.status}
                            option={statusOption}
                            onChange={(e) => handleOnDropChange("status", e.target.value)}
                        />
                    </div>
                </div>
                <div className="btn_Cover">
                    <Button onClick={handleSave}>Save</Button>
                    <Button onClick={closeBtnFuc}>Cancel</Button>
                </div>
            </form>
        </section>
    )
}

export default CreateTask;