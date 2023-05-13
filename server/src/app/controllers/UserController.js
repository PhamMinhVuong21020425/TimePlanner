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
                const currentUser = await prisma.user.findUnique({
                    where: {
                        id: req.session.user.userId
                    },
                })
                const userWithoutPassword = exclude(currentUser, ['password'])
                res.status(200).json(userWithoutPassword);
            }
        }
        catch (e) {
            res.status(500).json({ message: 'Internal Server Error' });
            console.log(e.code);
            throw e;
        }
    }

    // GET /user/profile
    async profile(req, res) {
        try {
            if (req.session.user) {
                const profile = await prisma.User.findUnique({
                    where: {
                        id: req.session.user.userId
                    }
                })
                res.status(200).json(profile);
            };
        }
        catch (e) {
            res.status(500).json({ message: 'Internal Server Error' });
            console.log(e.code);
            throw e;
        }
    }

    async editProfile(req, res) {
        try {
            if (req.session.user) {
                const updateProfile = await prisma.User.update({
                    where: {
                        id: req.session.user.userId
                    },
                    data: {
                        name: req.body.name,
                        age: req.body.age,
                        email: req.body.email,
                        image: req.body.image,
                        address: req.body.address,
                        job: req.body.address,
                    }
                });

                res.json({ success: 'update success!' });
            }
        }
        catch (e) {
            res.status(500).json({ message: 'Internal Server Error' });
            console.log(e.code);
            throw e;
        }
    }
}

module.exports = new UserController;