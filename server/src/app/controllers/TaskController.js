class TaskController {

    // POST /task
    async taskPost(req, res) {
        const { projectName, taskName, description, startTime, finishTime, priority } = req.body;
        const pool = require('./ConnectDB');
        const sql = 'INSERT INTO task(project_name, task_name, description, start_date, finish_date, priority) VALUES (?, ?, ?, ?, ?, ?)';
        await pool.execute(sql, [projectName, taskName, description, startTime, finishTime, priority], function (err, results) {
            if (err) {
                console.log(err);
                res.status(500).json({ message: 'Internal Server Error' });
                return;
            }
            res.status(200).json({ success: 'Add task success...' });

        });
    }
}

module.exports = new TaskController;