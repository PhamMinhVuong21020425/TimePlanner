const prisma = require('./PrismaConfig');
class UserController {
    // GET /user
    index(req, res) {
        const user = req.session.user;
        if (!user) {
            res.status(401).send('NotLogin');
            return;
        }

        res.status(200).json(user);
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