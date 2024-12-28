import React, { useEffect, useState } from "react";
import Input from "../Component/input.js";
import CustomDropDown from "../Component/SelectDropDown/customDropDown.js";
import {assigneeOption,statusOption,getDate} from './container.js';
import Button from 'react-bootstrap/Button';
const CreateTask = (props) => {
    const {closeBtnFuc,actionType,getData,listAPICall} = props;
    const [state,setState] = useState({
      "taskName":"",
      "assignee":assigneeOption[0]?.value || "",
      "status":statusOption[0]?.value || "",  
    });
    useEffect(()=>{
        if(getData){
            setState((prevState)=>({
                ...prevState,
                "taskName":getData.taskName,
                "assignee":getData.assignee,
                "status":getData.status,  
            }))
        }
    },[getData]);
    const handleOnChange = (name,value) => {
        setState((prevState)=>({
            ...prevState,
            [name]:value,
        }))
    }
    const handleOnDropChange = (name,value) => {
        setState((prevState)=>({
            ...prevState,
            [name]:value,
        }))
    }
    const handleSave = () => {
        const {taskName,assignee,status} = state;
        const payload = {
            taskName,
            assignee,
            status,
            reporter:"Ramkumar R",
            created: getData?getData.created:getDate(),
            updated: getDate(),
        }
        fetch(`http://localhost:3001/saveData${getData ? `/${getData.id}` : ''}`, {
            method: getData?'PUT':'POST',
            headers: {
              'Content-Type': 'application/json' 
            },
            body: JSON.stringify(payload)
          })
            .then(response => response.json())
            .then(data =>{listAPICall();
                closeBtnFuc();
            })
            .catch(error => console.error('Error adding user:', error));
    }
    return (
        <section>
            <h4>{actionType?"Create":"Update"} Task</h4>
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <Input
                            label="Task Name"
                            type="Text"
                            name="taskName"
                            customClassName="form-control"
                            id="taskName"
                            placeholder="Enter Task Name"
                            value={state.taskName}
                            onChange = {(e)=>handleOnChange("taskName",e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <CustomDropDown
                            label="Assignee"
                            value={state.assignee}
                            option={assigneeOption}
                            onChange = {(e)=>handleOnDropChange("assignee",e.target.value)}  
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <CustomDropDown
                            label="Status"
                            value={state.status}
                            option={statusOption}
                            onChange = {(e)=>handleOnDropChange("status",e.target.value)}  
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