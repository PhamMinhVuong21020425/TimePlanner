const express = require("express");
const session = require("express-session");
const { PrismaSessionStore } = require("@quixo3/prisma-session-store");
const { PrismaClient } = require("@prisma/client");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const crypto = require("crypto");
const path = require("path");
const cors = require("cors");
const route = require("./src/routes/index");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
require("dotenv").config();

const app = express();

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
      maxAge: 3 * 3600 * 1000, // ms
      secure: false,
      httpOnly: true,
      sameSite: true,
    },
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    resave: false,
    unset: "destroy",
    saveUninitialized: true,
    store: new PrismaSessionStore(new PrismaClient(), {
      checkPeriod: 5 * 60 * 1000, //ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
    genid: (req) => {
      // Returns a random string to be used as a session ID
      return generateSessionId(16); // tạo session ID mới cho mỗi lần yêu cầu
    },
  })
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "http://localhost:3002/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      // Tại đây, bạn có thể lưu thông tin người dùng vào cơ sở dữ liệu hoặc thực hiện các thao tác khác
      return done(null, profile);
    }
  )
);

// Tạo route cho xác thực Facebook
app.get("/auth/facebook", passport.authenticate("facebook"));

app.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/check-login" }),
  function (req, res) {
    // Xác thực thành công, bạn có thể thực hiện các thao tác tiếp theo ở đây
    res.redirect("/client");
  }
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

app.get("/logout", function (req, res, next) {
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
