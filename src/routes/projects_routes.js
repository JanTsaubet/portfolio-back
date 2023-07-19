const express = require("express");
const projectsRouter = express.Router();

const controller = require("../controllers/ctr_projects.js");
const auth_middleware = require("../middlewares/auth_middleware.js");

// get all projectss wth queries
projectsRouter.get("/", controller.getProjects);
// add project
projectsRouter.post("/", auth_middleware.authenticate, controller.insertProject);
// update project
projectsRouter.put("/:id",  auth_middleware.authenticate, controller.updateProject);
// delete project
projectsRouter.delete("/:id",  auth_middleware.authenticate, controller.deleteProject);
// get project by id
projectsRouter.get("/:id", controller.getProjectById);

module.exports = {
  Router: projectsRouter,
};
