const express = require('express');
const taskController = require('../app/controllers/TaskController');

const router = express.Router();

router.post('/', taskController.taskPost);

module.exports = router;