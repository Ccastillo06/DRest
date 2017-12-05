const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth.controller');

router.post('/signup', AuthController.signUp);
router.post('/login', AuthController.logIn);
router.post('/logout', AuthController.logOut);
router.post('/loggedin', AuthController.loggedIn);

module.exports = router;
