const prisma = require("./PrismaConfig");
class SiteController {
  // GET "/"
  async home(req, res) {
    console.log("SESSIONID: ", req.session?.user);
    console.log("COOKIE: ", req.cookies);
    // console.log('Signed Cookies: ', req.signedCookies);
    const isLoggedIn = req.session?.user;
    if (isLoggedIn) {
      console.log("Logined");
      res.status(200).json({ message: "Logined" });
      return;
    }
    
    console.log("NotLogin");
    res.status(200).json({ message: "NotLogin" });

    // Lưu một cookie có tên 'username' với giá trị 'John'
    //res.cookie('username', 'John');

    // Trả về phản hồi HTTP
    //res.send('Cookie saved');
    //res.sendStatus(200)
    //res.status(200).send('Connect success...')
  }

  async users(req, res) {
    const pool = require("./ConnectPlane");
    const userID = req.params.userID;
    const sql = "SELECT * FROM user WHERE id = ?";
    await pool.execute(sql, [userID], function (err, results, fields) {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
        return;
      }

      // Trả về kết quả truy vấn dưới dạng JSON, bao gồm tên cột và dữ liệu
      res.status(200).json(results);
    });
  }

  async deleteUser(req, res) {
    const userID = req.body.id;
    const pool = require("./ConnectPlane");
    const sql = "DELETE FROM user WHERE id = ?";
    await pool.execute(sql, [userID], function (err, results, fields) {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
        return;
      }

      // Trả về kết quả truy vấn dưới dạng JSON, bao gồm tên cột và dữ liệu
      res.redirect("/");
    });
  }
  async testPlane(req, res) {
    const pool = require("./ConnectPlane");
    const sql = "Select * from Project";
    await pool.execute(sql, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
        return;
      }
      res.status(200).json(JSON.stringify(results));
    });
  }

  async postPlane(req, res) {
    const pool = require("./ConnectPlane");
    let {
      id,
      user_id,
      name,
      status,
      priority,
      des,
      finished_time,
      started_time,
    } = req.body;
    const sql = "INSERT INTO Project VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    await pool.execute(
      sql,
      [id, user_id, name, status, priority, des, finished_time, started_time],
      (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Internal Server Error" });
          return;
        }
        res.redirect("/plans");
      }
    );
  }

  async getIcon(req, res) {
    try {
      const icon = await prisma.Weather.findMany();
      res.status(200).json(icon);
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error" });
      console.log(e.code);
      throw e;
    }
  }
}

module.exports = new SiteController();
