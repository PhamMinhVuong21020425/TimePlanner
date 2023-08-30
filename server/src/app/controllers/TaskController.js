const prisma = require("./PrismaConfig");

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
      if (req.session.user) {
        await prisma.Task.create({
          data: {
            user_id: req.session.user.userId,
            parent_task_id: req.body.parent_task_id,
            task_name: req.body.taskName,
            description: req.body.description,
            // location: req.body.location,
            started_time: new Date(req.body.startTime),
            finished_time: new Date(req.body.finishTime),
            priority: req.body.priority,
            type: req.body.type,
          },
        });
        res.status(200).send({ success: "add task success" });
      }
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error" });
      console.log(e.code);
      throw e;
    }
  }

  async getTask(req, res) {
    try {
      if (req.session.user) {
        const tasks = await prisma.Task.findMany({
          where: {
            user_id: req.session.user.userId,
            parent_task_id: null,
          },
        });
        res.status(200).json(tasks);
      }
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error" });
      console.log(e.code);
      throw e;
    }
  }

  async getCurrentTask(req, res) {
    try {
      if (req.session.user) {
        const task = await prisma.Task.findUnique({
          where: {
            task_id: req.params.task_id,
          },
        });
        res.status(200).json(task);
      }
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error" });
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
      if (req.session.user) {
        const tasks = await prisma.Task.findMany({
          where: {
            user_id: req.session.user.userId,
            started_time: {
              gte: currentDate,
              lt: tomorrow,
            },
          },
          orderBy: {
            started_time: "asc",
          },
        });
        res.status(200).json(tasks);
      }
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error" });
      console.log(e.code);
      throw e;
    }
  }

  async getChildTask(req, res) {
    try {
      if (req.session.user) {
        const tasks = await prisma.Task.findMany({
          where: {
            parent_task_id: req.params.parent_task_id,
          },
        });
        res.status(200).json(tasks);
      }
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error" });
      console.log(e.code);
      throw e;
    }
  }

  async deleteTask(req, res) {
    try {
      if (req.session.user) {
        await prisma.Task.deleteMany({
          where: {
            OR: [
              {
                task_id: req.params.task_id,
              },
              {
                parent_task_id: req.params.task_id,
              },
            ],
          },
        });
        res.status(200).json({ success: "Delete success!" });
      }
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error" });
      console.log(e.code);
      throw e;
    }
  }

  async updateTask(req, res) {
    try {
      if (req.session.user) {
        const updateTask = await prisma.Task.update({
          where: {
            task_id: req.params.task_id,
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
          },
        });

        res.json({ success: "update success!" });
      }
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error" });
      console.log(e.code);
      throw e;
    }
  }

  async getTypeTask(req, res) {
    const pool = require("./ConnectPlane");
    const sql =
      "SELECT type, COUNT(*) as count FROM Task WHERE type IS NOT NULL AND user_id = ? GROUP BY type ORDER BY type";
    await pool.execute(sql, [req.session.user.userId], (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
        return;
      }
      res.status(200).json(results);
    });
  }

  async getPriorityTask(req, res) {
    const pool = require("./ConnectPlane");
    const sql =
      "SELECT priority, COUNT(*) as count FROM Task WHERE priority IS NOT NULL AND user_id = ? AND status = ? GROUP BY priority";
    await pool.execute(
      sql,
      [req.session.user.userId, "STOPPED"],
      (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send("Internal Server Error");
          return;
        }
        res.status(200).json(results);
      }
    );
  }
}

module.exports = new TaskController();
