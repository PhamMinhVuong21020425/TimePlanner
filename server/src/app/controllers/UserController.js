const prisma = require("./PrismaConfig");

class UserController {
    // GET /user
    async index(req, res) {
        // const user = req.session.user;
        try {
            function exclude(user, keys) {
                for (let key of keys) {
                    delete user[key]
                }
                return user
            }

            if (req.session.user) {
                const currenUser = await prisma.user.findUnique({
                    where: {
                        id: req.session.user.userId
                    },
                })
                const userWithoutPassword = exclude(currenUser, ['password'])
                res.status(200).json(userWithoutPassword);
            }
        }
        catch (e) {
            res.status(500).json({ message: 'Internal Server Error' });
            console.log(e.code);
            throw e;
        }
    }

    // GET /user/:detail
    detail(req, res) {
        res.send('DETAIL NEWS');
    }
}

module.exports = new UserController;