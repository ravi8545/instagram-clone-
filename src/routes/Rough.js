//How express internally handles handler or middlewares

const handlers = [
  upload.single("image"),
  identifyUser,
  postController.createPostController
];

let i = 0;

function next() {
  const handler = handlers[i++];
  if (handler) {
    handler(req, res, next);
  }
}

next();