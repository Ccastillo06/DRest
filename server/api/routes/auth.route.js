const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth.controller');

router.post('/signup', AuthController.signUp);
router.post('/login', AuthController.logIn);
router.post('/owner', AuthController.ownerPetition);
router.post('/worker/:id', AuthController.addWorker);
router.post('/deleteworker/:id/:worker_id', AuthController.deleteWorker);
router.get('/userdata', AuthController.userData);
router.get('/logout', AuthController.logOut);
router.get('/loggedin', AuthController.loggedIn);

module.exports = router;
