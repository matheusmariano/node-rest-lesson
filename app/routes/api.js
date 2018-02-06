const express = require('express');
const HomeController = require('../controllers/home');
const UserController = require('../controllers/user');

const router = express.Router();

router.get('/', HomeController.index);
router.get('/users/:id', UserController.show);

module.exports = router;
