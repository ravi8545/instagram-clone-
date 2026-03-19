const mongoose = require('mongoose');
const express = require("express")
const userController = require("../controllers/user.controller");
const identifyUser = require('../middlewares/auth.middlewares');
const userRouter = express.Router();



// @route Post /api/users/follow/userid
// @description follow a user
//@access Private

//api/users/
userRouter.post("/follow/:username", identifyUser, userController.followUserController)
userRouter.post("/unfollow/:username", identifyUser, userController.unfollowUserController)


// // Accept request
// userRouter.post(
//     "/follow/accept/:username",
//     identifyUser,
//     userController.acceptFollowRequest
// );

// // Reject request
// userRouter.post(
//     "/follow/reject/:username",
//     identifyUser,
//     userController.rejectFollowRequest
// );



module.exports = userRouter;
