const express = require('express');
const taskController = require('../app/controllers/TaskController');

const router = express.Router();

router.post('/update/:task_id', taskController.updateTask);
router.delete('/delete/:task_id', taskController.deleteTask);
router.get('/today', taskController.getTodayTask);
router.get('/:task_id', taskController.getCurrentTask);
router.post('/', taskController.taskPost);
router.get('/', taskController.getTask);


module.exports = router;