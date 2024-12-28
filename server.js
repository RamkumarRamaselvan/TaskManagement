const jsonServer = require("json-server");
const auth = require("json-server-auth");
const path = require("path");

// Create the server
const server = jsonServer.create();

// Define the router and middlewares
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

// Use default middlewares (logger, static files, etc.)
server.use(middlewares);

// Use json-server-auth
server.db = router.db; // Assign the database to json-server-auth
server.use(auth);

// Use the router
server.use(router);

// Start the server
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
