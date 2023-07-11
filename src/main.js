const express = require("express");
const { config } = require("dotenv");
config();

const port = process.env.PORT;
const app = express();

// import router from projects.js
const projectsRouter = require("./routes/projects_routes.js").Router;

//simple middleware .json
app.use(express.json());

// add routes for projects
app.use("/projects", projectsRouter);

app.listen(port, () => console.log(`Server started in http://localhost:${port}`));