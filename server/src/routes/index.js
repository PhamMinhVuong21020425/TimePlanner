const userRouter = require("./userRouter");
const searchRouter = require("./searchRouter");
const siteRouter = require("./siteRouter");
const authRouter = require("./authRouter");
const taskRouter = require("./taskRouter");
function route(app) {
  app.use("/", siteRouter);

  app.use("/user", userRouter);

  app.use("/search", searchRouter);

  app.use("/task", taskRouter);

  app.use("/login", authRouter);

  app.get("/getcookie", (req, res) => {
    // Lấy giá trị của cookie có tên 'username'
    const username = req.cookies.username;

    // Trả về phản hồi HTTP
    res.send(`Username: ${username}`);
  });
}

module.exports = route;
