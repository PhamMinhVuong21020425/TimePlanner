const express = require('express');
const userController = require('../app/controllers/UserController');

const router = express.Router();

router.get('/:detail', userController.detail);
router.get('/', userController.index);

module.exports = router;