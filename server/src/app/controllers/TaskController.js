const prisma = require('./PrismaConfig');

class TaskController {

    // POST /task
    async taskPost(req, res) {
        // const { taskName, description, startTime, finishTime, priority, type } = req.body;
        // const pool = require('./ConnectPlane');
        // const sql = 'INSERT INTO Task(task_name, description, started_time, finished_time, priority, type) VALUES (?, ?, ?, ?, ?, ?)';
        // await pool.execute(sql, [taskName, description, startTime, finishTime, priority, type], function (err, results) {
        //     if (err) {
        //         console.log(err);
        //         res.status(500).json({ message: 'Internal Server Error' });
        //         return;
        //     }
        //     res.status(200).json({ success: 'Add task success...' });

        // });
        try {
            await prisma.task.create({
                data: {
                    task_name: req.body.taskName,
                    description: req.body.description,
                    // location: req.body.location,
                    started_time: new Date(req.body.startTime),
                    finished_time: new Date(req.body.finishTime),
                    priority: req.body.priority,
                    type: req.body.type,
                }
            })
            res.status(200).send("success");
        }
        catch (e) {
            res.status(500).json({ message: 'Internal Server Error' });
            console.log(e.code);
            throw e;
        }
    }

    async getTask(req, res) {
        try {
            // if (req.session.user) {
            // const tasks = await prisma.task.findMany({
            //     where: {
            //         user_id: req.session.userId
            //     }
            // })
            // };
            const tasks = await prisma.task.findMany();
            res.status(200).json(tasks);
        }
        catch (e) {
            res.status(500).json({ message: 'Internal Server Error' });
            console.log(e.code);
            throw e;
        }
    }

    async getCurrentTask(req, res) {
        try {
            // if (req.session.user) {
            // const tasks = await prisma.task.findMany({
            //     where: {
            //         user_id: req.session.userId
            //     }
            // })
            // };
            const task = await prisma.task.findUnique({
                where: {
                    task_id: req.params.task_id
                }
            });
            res.status(200).json(task);
        }
        catch (e) {
            res.status(500).json({ message: 'Internal Server Error' });
            console.log(e.code);
            throw e;
        }
    }

    async getTodayTask(req, res) {
        var currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        // Get the current date
        var tomorrow = new Date();
        tomorrow.setDate(currentDate.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);

        try {
            const tasks = await prisma.task.findMany({
                where: {
                    started_time: {
                        gte: currentDate,
                        lt: tomorrow,
                    }
                },
                orderBy: {
                    started_time: 'asc'
                }

            });
            res.status(200).json(tasks);
        }
        catch (e) {
            res.status(500).json({ message: 'Internal Server Error' });
            console.log(e.code);
            throw e;
        }

    }

    async deleteTask(req, res) {
        try {
           // if (req.session.userId) {
                await prisma.task.delete({
                    where: {
                        //user_id: req.session.userId,
                        task_id: req.params.task_id
                    }
                })
                res.status(200).json({success: 'Delete success!'});
           // }
        }
        catch (e) {
            res.status(500).json({ message: 'Internal Server Error' });
            console.log(e.code);
            throw e;
        }
    }

    async updateTask(req, res) {
        try {
            // if (req.session.userId) {
            await prisma.task.update({
                where: {
                    //user_id: req.session.userId,
                    task_id: req.params.task_id
                },
                data: {
                    task_name: req.body.task_name,
                    description: req.body.description,
                    //location: req.body.location,
                    started_time: new Date(req.body.started_time),
                    finished_time: new Date(req.body.finished_time),
                    status: req.body.status,
                    priority: req.body.priority,
                    type: req.body.type,
                }
            })

            res.json({ success: 'update success!' });
            //}
        }
        catch (e) {
            res.status(500).json({ message: 'Internal Server Error' });
            console.log(e.code);
            throw e;
        }

    }
}

module.exports = new TaskController;