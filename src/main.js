const express = require("express");
const app = express();

// import router from projects.js
const projectsRouter = require("./routes/projects_routes.js").Router;

//simple middleware .json
app.use(express.json());

// add routes for projects
app.use("/projects", projectsRouter);

const port = 3000;
app.listen(port, () => console.log("Server started in http://localhost:3000"));