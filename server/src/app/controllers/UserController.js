class UserController {
    // GET /user
    index(req, res) {
        const user = req.session.user;
        if (!user) {
            res.status(401).send('Bạn chưa đăng nhập');
            return;
        }

        res.status(200).json(user);
    }

    // GET /user/:detail
    detail(req, res) {
        res.send('DETAIL NEWS');
    }
}

module.exports = new UserController;