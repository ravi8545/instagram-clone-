const express = require("express");
const postRouter = express.Router();
const postController = require("../controllers/post.controller");
const multer = require("multer");
const identifyUser = require("../middlewares/auth.middlewares")
const upload = multer({ storage: multer.memoryStorage() });

/*
 POST
/api/posts/ [protected]
req.body = { caption, image-file}
 */
postRouter.post(
  "/",
  upload.single("image"), identifyUser,
  postController.createPostController,
);

/* 
GET 
/api/posts/ [protected] */
postRouter.get("/", identifyUser, postController.getPostController);

/*
GET /api/posts/details/:postid
returns a deatil about specific post with the id also check whether the post 
belongs to the user that request come from */
postRouter.get("/details/:postId",identifyUser, postController.getPostDetailsController);


/*
@route  Post /api/posts/like/:getPostDetailsController
@description like a post with the id provided in thr request params
*/
postRouter.post("/like/:postId", identifyUser, postController.likePostController);
postRouter.post("/unlike/:postId", identifyUser, postController.unlikePostController)




/*
@route GET /api/posts/feed
@description get all the post created in the DB
@access private
*/

postRouter.get("/feed", identifyUser, postController.getFeedController);


module.exports = postRouter;
