const { fi } = require("date-fns/locale");
const prisma = require("../PrismaConfig");
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
    res.status(200).json({ user: req.user });
    // res.status(200).json({ message: "login OK" });
  }

  async logPost(req, res, next) {
    const pool = require("../ConnectPlane");
    const client = await pool.connect();
    try {
      let { email, password } = req.body;

      const que = "SELECT id, password FROM \"User\" WHERE email = $1";
      await client.query(que, [email], async (err, result) => {
        if (
          !Boolean(result.rows?.length) ||
          !result.rows[0]?.password ||
          !AuthController.comparePassword(password, result.rows[0]?.password)
        ) {
          res.status(200).json({ message: "Email or password is invalid." });
          return;
        }

        // const optionsCookie = {
        //   maxAge: 3 * 3600 * 1000,
        // };

        // res.cookie(
        //   "user",
        //   {
        //     userId: result.rows[0].id,
        //     email: req.body.email,
        //   },
        //   optionsCookie
        // );

        // res.end("Cookie is sent!");

        req.session?.regenerate(function (err) {
          if (err) next(err);

          req.session.user = {
            userId: result.rows[0].id,
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

        if (err) {
          console.log("ERROR: " + err);
          res.status(500).json({ message: "Internal Server Error" });
          return;
        }
      });
    } finally {
      if (client) client.release();
    }
  }

  // GET
  signup(req, res) {
    res.status(200).json({ message: "Sign up ok" });
  }

  async signPost(req, res) {
    let { fullname, email, password, confirmPassword } = req.body;

    console.log(req.body);

    if (!email || !password || confirmPassword != password) {
      res.status(400).json({ message: "Bad Request" });
      return;
    }

    try {
      const hashedPassword = AuthController.createHash(password);

      await prisma.User.create({
        data: {
          name: fullname,
          email: email,
          password: hashedPassword,
        },
      });

      res.status(200).json({ success: "Sign up success!!" });
    } catch (error) {
      console.log("ERROR SIGN UP: " + error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = new AuthController();
