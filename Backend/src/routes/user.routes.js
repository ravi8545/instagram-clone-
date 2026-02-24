const mongoose = require('mongoose');
const express = require("express")
const userController = require("../controllers/user.controller");
const identifyUser = require('../middlewares/auth.middlewares');
const userRouter = express.Router();



// @route Post /api/users/follow/userid
// @description follow a user
//@access Private

userRouter.post("/follow/:username", identifyUser, userController.followUserController)
userRouter.post("/unfollow/:username", identifyUser, userController.unfollowUserController)






module.exports = userRouter;
