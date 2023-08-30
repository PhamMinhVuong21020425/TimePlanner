const fs = require("fs");
const express = require("express");
const session = require("express-session");
const { PrismaSessionStore } = require("@quixo3/prisma-session-store");
const { PrismaClient } = require("@prisma/client");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const crypto = require("crypto");
const cors = require("cors");
const route = require("./src/routes/index");
require("dotenv").config();

const app = express();

// HTTP logger
app.use(morgan("tiny"));

app.use(
  cors({
    origin: process.env.CLIENT_HOST,
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser());

function generateSessionId(length) {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);
}
// Nếu process.env.PORT không được định nghĩa (undefined) thì sẽ lấy giá trị là 8080
const port = process.env.PORT || 8080;

// const connection = mysql.createConnection({
//   uri: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false, // tắt xác thực SSL
//   },
// });
// connection.end();

app.set("trust proxy", 1);
app.use(
  session({
    cookie: {
      maxAge: 60 * 60 * 1000, // ms
      domain: "time-planner-toshibaacer.vercel.app",
      secure: true,
      httpOnly: true,
      sameSite: "none",
    },
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    proxy: true,
    store: new PrismaSessionStore(new PrismaClient(), {
      checkPeriod: 2 * 60 * 1000, //ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
    genid: (req) => {
      // Returns a random string to be used as a session ID
      return generateSessionId(16); // tạo session ID mới cho mỗi lần yêu cầu
    },
  })
);

// app.use(function (req, res, next) {
//   if (!req.session.views) {
//     req.session.views = {};
//   }

//   // get the url pathname
//   const pathname = parseurl(req).pathname;

//   // count the views
//   req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;
//   console.log("PAGE VIEWS: ", req.session.views[pathname]);
//   next();
// });

// // Access the session as req.session
// app.get("/session", function (req, res, next) {
//   if (req.session.views) {
//     req.session.views++;
//     res.setHeader("Content-Type", "text/html");
//     res.write("<p>views: " + req.session.views + "</p>");
//     res.write("<p>expires in: " + req.session.cookie.maxAge / 1000 + "s</p>");
//     res.end();
//   } else {
//     req.session.views = 1;
//     res.end("welcome to the session demo. refresh!");
//   }
// });

// app.get("/foo", function (req, res, next) {
//   res.send("you viewed this page " + req.session.views["/foo"] + " times");
// });

app.get("/logout", function (req, res, next) {
  // res.clearCookie("user");
  // res.status(200).json({ success: "Log out success!" });

  req.session.user = null;

  req.session.save(function (err) {
    if (err) next(err);

    // regenerate the session, which is good practice to help
    // guard against forms of session fixation
    req.session.regenerate(function (err) {
      if (err) next(err);
      res.status(200).json({ success: "Log out success!" });
    });
  });
});

//Handle routers
route(app);

const http = require("http");
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Time planner app is running on http://localhost:${port}`);
});
