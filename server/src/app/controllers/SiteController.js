
class SiteController {
    // GET /
    async home(req, res) {
        // var session = req.session;
        // console.log('SESSIONID: ', session);
        // console.log('COOKIE: ', req.cookies);
        //console.log('Signed Cookies: ', req.signedCookies);
        // const isLoggedIn = req.cookies[session.email];
        // if (!isLoggedIn) {
        //     res.redirect('/login');
        //     return;
        // }
        const pool = require('./ConnectDB');
        const sql = 'SELECT * FROM user';
        await pool.execute(sql, function (err, results, fields) {
            if (err) {
                console.log(err);
                res.status(500).json({ message: 'Internal Server Error' });
                return;
            }

            // Lấy danh sách tên cột của kết quả truy vấn
            const columnName = fields.map(field => field.name)
            const dataUser = results.map(result => result)

            // Gửu dữ liệu vừa truy vấn qua home dưới dạng JSON, 
            // bao gồm tên cột và dữ liệu
            res.json(dataUser);
            // Lưu một cookie có tên 'username' với giá trị 'John'
            //res.cookie('username', 'John');

            // Trả về phản hồi HTTP
            //res.send('Cookie saved');
        });
        //res.sendStatus(200)
        //res.status(200).send('Connect success...')
    }

    async users(req, res) {
        const pool = require('./ConnectDB');
        const userID = req.params.userID;
        const sql = 'SELECT * FROM user WHERE id = ?';
        await pool.execute(sql, [userID], function (err, results, fields) {
            if (err) {
                console.log(err);
                res.status(500).json({ message: 'Internal Server Error' });
                return;
            }

            // Trả về kết quả truy vấn dưới dạng JSON, bao gồm tên cột và dữ liệu
            res.json(results);
        });
    }

    async deleteUser(req, res) {
        const userID = req.body.id;
        const pool = require('./ConnectDB');
        const sql = 'DELETE FROM user WHERE id = ?';
        await pool.execute(sql, [userID], function (err, results, fields) {
            if (err) {
                console.log(err);
                res.status(500).json({ message: 'Internal Server Error' });
                return;
            }

            // Trả về kết quả truy vấn dưới dạng JSON, bao gồm tên cột và dữ liệu
            res.redirect('/');
        });
    }
    async testPlane(req, res) {
        const pool = require('./ConnectPlane');
        const sql = "Select * from Project";
        await pool.execute(sql, (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).send('Internal Server Error');
                return;
            }
            res.status(200).json(JSON.stringify(results));
        })
    }

    async postPlane(req, res) {
        const pool = require('./ConnectPlane');
        let { id, user_id, name, status, priority, des, finished_time, started_time } = req.body;
        const sql = 'INSERT INTO Project VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        await pool.execute(sql, [id, user_id, name, status, priority, des, finished_time, started_time], (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).json({ message: 'Internal Server Error' });
                return;
            }
            res.redirect('/plans');
        })
    }

}

module.exports = new SiteController;