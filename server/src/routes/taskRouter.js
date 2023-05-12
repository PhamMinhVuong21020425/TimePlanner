const express = require('express');
const taskController = require('../app/controllers/TaskController');

const router = express.Router();

router.post('/', taskController.taskPost);
router.get('/', taskController.getTask);
router.get('/:task_id', taskController.getCurrentTask);
router.get('/today', taskController.getTodayTask);
router.delete('/delete/:task_id', taskController.deleteTask);
router.post('/update/:task_id', taskController.updateTask);

module.exports = router;