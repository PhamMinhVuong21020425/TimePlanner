class AuthController {
  static createHash(password) {
    const bcrypt = require("bcrypt");
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
  }

  static comparePassword(password, hash) {
    const bcrypt = require("bcrypt");
    return bcrypt.compareSync(password, hash);
  }

  // GET /login
  login(req, res) {
    res.status(200).json({ message: "login OK" });
  }

  async logPost(req, res, next) {
    const pool = require("../ConnectPlane");
    let { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "Bad Request" });
      return;
    }

    const que = "SELECT id, password FROM User WHERE email = ?";
    await pool.execute(que, [email], async (err, result) => {
      if (err) {
        console.log("ERROR: " + err);
        res.status(500).json({ message: "Internal Server Error" });
        return;
      }

      if (result.length == 0) {
        res.status(200).json({ message: "Email or password is invalid." });
        return;
      } else if (
        !result[0].password ||
        !AuthController.comparePassword(password, result[0].password)
      ) {
        res.status(200).json({ message: "Email or password is invalid." });
        return;
      }

      const optionsCookie = {
        maxAge: 60 * 60 * 1000,
      };

      res.cookie(
        "user",
        {
          userId: result[0].id,
          email: req.body.email,
        },
        optionsCookie
      );

      // res.end("Cookie is sent!");

      req.session.regenerate(function (err) {
        if (err) next(err);

        req.session.user = {
          userId: result[0].id,
          email: req.body.email,
        };
        console.log("LOGIN INFO: ", req.session.user);

        // save the session before redirection to ensure page
        // load does not happen before session is saved
        req.session.save(function (err) {
          if (err) return next(err);
          res.status(200).json(req.session.user);
        });
      });
    });
  }

  // GET
  signup(req, res) {
    res.status(200).json({ message: "Sign up ok" });
  }

  async signPost(req, res) {
    const pool = require("../ConnectPlane");

    let { fullname, email, password, confirmPassword } = req.body;

    console.log(req.body);

    if (!email || !password || confirmPassword != password) {
      res.status(400).json({ message: "Bad Request" });
      return;
    }

    const sql = "INSERT INTO User(name, email, password) VALUES (?, ?, ?)";
    await pool.execute(
      sql,
      [fullname, email, AuthController.createHash(password)],
      (err, results) => {
        if (err) {
          console.log("ERROR SIGN UP: " + err);
          res.status(500).json({ message: "Internal Server Error" });
          return;
        }
        res.status(200).json({ success: "Sign up success!!" });
      }
    );
  }
}

module.exports = new AuthController();
