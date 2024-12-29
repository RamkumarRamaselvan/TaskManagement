
## Installation

To get started with this project, you need to install the required dependencies. Follow the steps below:
1. **Click the URL**:
        https://github.com/RamkumarRamaselvan/TaskManagement

2. **Clone the repository**:

   git clone https://github.com/RamkumarRamaselvan/TaskManagement.git

3. **Navigate into the project directory**:

    cd Task-Management-master

4. **Install the dependencies using npm**:
    npm install

### `npm start`
    This command will:

        *Start the React development server using react-scripts to run the React app.
        *Start the JSON server on port 3001 by running npx json-server --watch db.json --port 3001, which will serve the mock backend data from db.json.
        *Once both servers are running, the React app will be available at http://localhost:3000 and the JSON server at http://localhost:3001.

if you want to change the JSON server post goto package.json change the "proxy":"http://localhost:3001" port and also please change the  
"scripts": {
    "json-server": "npx json-server --watch db.json --port 3001"
}
this comment using to run the JSON server so need to change the port in the comment.

**Login**
default username : user123
        password : user123

### API Used in the Project

    In this project used a JSON server as a Backend

    1.Login API
        http://localhost:3001/users?username={username}
        Request method GET
        need to pass the username in the API
        useage: get the user login

    2.Get register User list
        http://localhost:3001/users
        Request method GET
        useage: get the list of registed User

    3.Register a User 

        http://localhost:3001/users
        Request method POST
        useage: Save a new user to the Register
        should be give a pass the data
        Payload: {
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                email: '',
                mobile: '',
            }
    
    4.List the task
        
        http://localhost:3001/saveData
        Request method : GET
        useage : list the saved task
    5.Delete the Task
        http://localhost:3001/saveData/{id}
        Request method : DELETE
        useage: To delete the task in the saved list
        should pass the task id to the API
    6.Save API for TASK
        http://localhost:3001/saveData
        Request method : POST
        useage : To save the new Task 
        should be pass a payload
        payload = {
            taskName:"",
            assignee:"",
            status:"",
            reporter: "",
            created: "",
            updated: "",
        }
    7.Update API for Task
        http://localhost:3001/saveData/{id}
         Request method : PUT
        useage : To Update the Existing Task using the task id
        should be pass a payload and pass the task id
        payload = {
            taskName:"",
            assignee:"",
            status:"",
            reporter: "",
            created: "",
            updated: "",
        }
