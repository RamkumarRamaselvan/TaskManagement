
## Installation

To get started with this project, you need to install the required dependencies. Follow the steps below:
1. **Click the URL**:
        https://github.com/RamkumarRamaselvan/Task-Management/tree/master

2. **Clone the repository**:

   git clone https://github.com/RamkumarRamaselvan/Task-Management.git

3. **Navigate into the project directory**:

    cd Task-Management-master

4. **Install the dependencies using npm**:
    npm install

### `npm start`
    This command will:

        *Start the React development server using react-scripts to run the React app.
        *Start the JSON server on port 3001 by running npx json-server --watch db.json --port 3001, which will serve the mock backend data from db.json.
        *Once both servers are running, the React app will be available at http://localhost:3000 and the JSON server at http://localhost:3001.

if you want to change the JSON server post goto package.json change the "proxy" port and also please change the  
"scripts": {
    "json-server": "npx json-server --watch db.json --port 3001"
}
this comment using to run the JSON server so need to change the port in the comment.


