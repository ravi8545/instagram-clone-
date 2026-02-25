const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors")

//CORS ek browser security mechanism hai jo cross-origin requests ko control karta hai. Iska configuration backend me hota hai kyunki server hi decide karta hai kaunse origins ko access dena hai. Frontend me CORS define nahi kar sakte kyunki security server side control honi chahiye.

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials:true,
    origin:"http://localhost:5173"
}));


// require routes
const authRouter = require("./routes/auth.routes");
const postRouter = require("./routes/post.routes");
const userRouter = require("./routes/user.routes");

//using routes
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);






module.exports = app;

