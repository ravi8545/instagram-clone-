const express = require("express");
const authControllers = require("../controllers/auth.controllers");
const identifyUser = require("../middlewares/auth.middlewares")

const authRouter = express.Router();

//Post api/auth/register
authRouter.post("/register", authControllers.registerController);

//post api/auth/login
authRouter.post("/login", authControllers.loginController);



// @routes GET /api/auth/get-me
//@desc Get the currently logged in user's information
// @access Private

authRouter.get("/get-me", identifyUser, authControllers.getMeController)

module.exports = authRouter;
