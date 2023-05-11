class AuthController {

    static createHash(password) {
        const bcrypt = require('bcrypt');
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
    }

    static comparePassword(password, hash) {
        const bcrypt = require('bcrypt');
        return bcrypt.compareSync(password, hash);
    }

    // GET /news
    login(req, res) {
        // mặc định tìm đến thư mục views để lấy file news.handlebars
        res.status(200).json({ message: 'login OK' })
    }

    async logPost(req, res) {
        console.log('LOGIN ID: ', req.session.id);
        const pool = require('../ConnectDB');
        let { email, password, remember = 'off' } = req.body;
        console.log(req.body);
        if (!email || !password) {
            res.status(400).json({ message: 'Bad Request' });
            return;
        }

        const que = 'SELECT id, password FROM user WHERE email = ?';
        await pool.execute(que, [email], async (err, result) => {
            if (err) {
                console.log('ERROR: ' + err);
                res.status(500).json({ message: 'Internal Server Error' });
                return;
            }

            if (result.length == 0) {
                res.status(400).json({ message: 'Dang nhap that bai!!!' });
                return;
            } else if (!result[0].password || !AuthController.comparePassword(password, result[0].password)) {
                res.status(400).json({ message: 'Dang nhap that bai!!!' });
                return;
            }

            const sql = 'UPDATE user SET remember = ? WHERE email = ?';
            await pool.execute(sql, [remember, email], (err, results) => {
                if (err) {
                    console.log('ERROR: ' + err);
                    res.status(500).json({ message: 'Internal Server Error' });
                    return;
                }
            });
            req.session.regenerate(function (err) {
                if (err) next(err)
                req.session.email = req.body.email;
                req.session.userId = result[0].userId;
                res.cookie('user', req.session.email);
                req.session.save(function (err) {
                    if (err) return next(err)
                    res.status(200).json({ success: 'Login success' })
                });
            });
        });
    }

    // GET /news/:detail
    signup(req, res) {
        res.status(200).json({ message: 'Sign up ok' });
    }

    async signPost(req, res) {
        const pool = require('../ConnectDB');

        let { fullname, email, password, confirmPassword, remember = 'off' } = req.body;

        console.log(req.body);

        if (!email || !password || (confirmPassword != password)) {
            res.status(400).json({ message: 'Bad Request' });
            return;
        }

        const sql = 'INSERT INTO user(name, email, password, remember) VALUES (?, ?, ?, ?)';
        await pool.execute(sql, [fullname, email, AuthController.createHash(password), remember], (err, results) => {
            if (err) {
                console.log('ERROR SIGN UP: ' + err);
                res.status(500).json({ message: 'Internal Server Error' });
                return;
            }
            res.status(200).json({ success: "Sign up success!!" });
        });
    }
}

module.exports = new AuthController;