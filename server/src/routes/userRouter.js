const express = require('express');
const userController = require('../app/controllers/UserController');

const router = express.Router();

router.get('/profile', userController.profile);
router.put('/editProfile', userController.editProfile);
router.get('/getAllUser', userController.getAllUser);
router.get('/', userController.index);

module.exports = router;