const express = require('express');
const router = express.Router();

const { register, login } = require('../controllers/authcontroller'); // controlador de registro de usuarios 

router.post('/register', register);
router.post('/sesion', login);

module.exports = router;