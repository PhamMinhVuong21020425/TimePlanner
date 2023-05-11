const express = require('express');
const taskController = require('../app/controllers/TaskController');

const router = express.Router();

router.post('/', taskController.taskPost);
router.get('/', taskController.getTask);
router.delete('/delete/:task_id', taskController.deleteTask);
router.post('/update', taskController.updateTask);

module.exports = router;