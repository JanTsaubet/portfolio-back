const express = require("express");
const projectsRouter = express.Router();

const controller = require("../controllers/ctr_projects.js");

// get all projectss wth queries
projectsRouter.get("/", controller.getProjects);
// add project
projectsRouter.post("/", controller.insertProject);
// update project
projectsRouter.put("/:id", controller.updateProject);
// delete project
projectsRouter.delete("/:id", controller.deleteProject);
// get project by id
projectsRouter.get("/:id", controller.getProjectById);

module.exports = {
  Router: projectsRouter,
};
