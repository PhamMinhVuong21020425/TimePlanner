const express = require("express");
const session = require("express-session");
// const { PrismaSessionStore } = require("@quixo3/prisma-session-store");
// const { PrismaClient } = require("@prisma/client");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const crypto = require("crypto");
const path = require("path");
const MySQLStore = require("express-mysql-session")(session);
const cors = require("cors");
const mysql = require("mysql2");
const route = require("./src/routes/index");
const multer = require("multer");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
require("dotenv").config();
// const webpack = require("webpack");
// const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();

// Passport session setup.
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// HTTP logger
app.use(morgan("tiny"));

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.CLIENT_HOST
        : process.env.CLIENT_LOCAL,
    credentials: true,
  })
);

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser());

// const config = require("./webpack.config.js");
// const compiler = webpack(config);

// // Tell express to use the webpack-dev-middleware and use the webpack.config.js
// // configuration file as a base.
// app.use(
//   webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//   })
// );

function generateSessionId(length) {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);
}
// Nếu process.env.PORT không được định nghĩa (undefined) thì sẽ lấy giá trị là 8080
const port = process.env.PORT || 8000;

// const connection = mysql.createConnection({
//   uri: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false, // tắt xác thực SSL
//   },
// });
// connection.end();
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false, // tắt xác thực SSL
  },
});

const options = {
  expiration: 3 * 3600 * 1000,
  createDatabaseTable: true,
  schema: {
    tableName: "Sessions",
    columnNames: {
      session_id: "session_id",
      expires: "expires",
      data: "data",
    },
  },
  url: process.env.DATABASE_URL,
};

const sessionStore = new MySQLStore(options, connection);

app.set("trust proxy", 1);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    unset: "destroy",
    store: sessionStore,
    name: process.env.SESSION_NAME,
    cookie: {
      secure: false,
      maxAge: 3 * 3600 * 1000, //3h
      sameSite: true,
    },
    genid: (req) => {
      // Returns a random string to be used as a session ID
      return generateSessionId(16); // tạo session ID mới cho mỗi lần yêu cầu
    },
  })
);

// SET STORAGE UPLOAD
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/'); // Thư mục để lưu trữ các file đã upload
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname); // Đặt tên file
  }
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("avatar"), (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.json({
    success: true,
    image: file.path,
  });
});

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: process.env.FACEBOOK_APP_ID,
//       clientSecret: process.env.FACEBOOK_APP_SECRET,
//       callbackURL: process.env.CALLBACK_URL,
//     },
//     function (accessToken, refreshToken, profile, done) {
//       process.nextTick(function () {
//         console.log(accessToken, refreshToken, profile, done);
//         return done(null, profile);
//       });
//     }
//   )
// );

// // app.use(session({ secret: "keyboard cat", key: "sid" }));
// app.use(passport.initialize());
// app.use(passport.session());

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

// app.get("/logout", function (req, res, next) {
//   res.clearCookie("user");

//   req.session.user = null;

//   req.session.save(function (err) {
//     if (err) next(err);

//     // regenerate the session, which is good practice to help
//     // guard against forms of session fixation
//     req.session.regenerate(function (err) {
//       if (err) next(err);
//       res.status(200).json({ success: "Log out success!" });
//     });
//   });
// });

// function ensureAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect("/login");
// }

// app.get("/account", ensureAuthenticated, function (req, res) {
//  console.log("FACEBOOK INFO: ", req.user);
//  res.status(200).json({message: "Login with FB success"});
// });

// app.get(
//   "/auth/facebook",
//   passport.authenticate("facebook", { scope: "email" })
// );
// app.get(
//   "/auth/facebook/callback",
//   passport.authenticate("facebook", {
//     successRedirect: "/login",
//     failureRedirect: "/check-login",
//   }),
//   function (req, res) {
//     res.status(200).json({ user: req.user });
//   }
// );

app.get("/logout", function (req, res, next) {
  // req.logout();
  if (req.session) {
    // delete session object
    res.clearCookie(req.session.user);
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.status(200).json({ success: "Log out success!" });
      }
    });
  }
});

//Handle routers
route(app);

app.listen(port, () => {
  console.log(`Time planner app is running on http://localhost:${port}`);
});
