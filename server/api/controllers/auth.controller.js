const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');

module.exports.signUp = (req, res, next) => {
  const {username, password} = req.body;

  if (!username || !password) {
    res.status(400).json({ message: 'Provide username and password' });
    return;
  }

  User.findOne({ username }, '_id')
  .then(user => {
    if (user) {
      res.status(400).json({ message: 'The username already exists' });
      return;
    }

    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const theUser = new User({
      username,
      password: hashPass
    });
    return theUser.save();
  })
  .then(newUser => {
    console.log(newUser);
    req.login(newUser, (err) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: 'Something went wrong' });
        return;
      }
      res.status(200).json(req.user);
    });
  })
  .catch(e => {
      console.log(e)
      res.status(500).json({ message: 'Something went wrong' });
  });
}
