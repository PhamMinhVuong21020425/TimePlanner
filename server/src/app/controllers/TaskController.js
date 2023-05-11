class TaskController {

    // POST /task
    async taskPost(req, res) {
        const { taskName, description, startTime, finishTime, priority } = req.body;
        const pool = require('./ConnectPlane');
        const sql = 'INSERT INTO task(task_name, description, started_date, finished_date, priority) VALUES (?, ?, ?, ?, ?)';
        await pool.execute(sql, [taskName, description, startTime, finishTime, priority], function (err, results) {
            if (err) {
                console.log(err);
                res.status(500).json({ message: 'Failed' });
                return;
            }
            res.status(200).json({ success: 'Add task success...' });
        });
    }
}

module.exports = new TaskController;