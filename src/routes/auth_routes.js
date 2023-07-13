const express = require("express");
const AuthRouter = express.Router();

const controller = require("../controllers/ctr_auth.js");

AuthRouter.post("/login", controller.login);

module.exports = {
  Router: AuthRouter,
};
