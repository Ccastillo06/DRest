const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const debug = require('debug')('server:Authentication')

module.exports.signUp = (req, res, next) => {
  const {username, password, email, role} = req.body;
  if (!username || !password || !email || !role) {
    res.status(400).json({ message: 'Provide username, password and email' });
    return;
  }

  User.findOne({ 'email' : email }, '_id')
  .then(user => {
    if (user) {
      res.status(400).json({ message: 'The email is already in use' });
      return;
    }
    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const theUser = new User({
      username,
      password: hashPass,
      email,
      role
    });

    theUser.save()
    .then(newUser => {
      req.login(newUser, (err) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: 'Something went wrong' });
          return;
        }
        debug('Sign Up Correct!')
        res.status(200).json(req.user);
      });
    })
  })
  .catch(e => {
      res.status(500).json({ message: 'Something went wrong' });
  });
}

module.exports.logIn = (req, res, next) => {
  passport.authenticate('local', (err, user, failureDetails) => {
    if (err) {
      res.status(500).json({ message: 'Something went wrong' });
      return;
    }
    console.log(user)
    if (!user) {
      res.status(401).json(failureDetails);
      return;
    }

    req.login(user, (err) => {
      if (err) {
        res.status(500).json({ message: 'Something went wrong' });
        return;
      }
      debug('Log In Correct!')
      res.status(200).json(req.user);
    });
  })(req, res, next);
}

module.exports.logOut = (req, res, next) => {
  req.logout();
  debug('Log Out Correct!')
  res.status(200).json({ message: 'Success' });
}

module.exports.loggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    debug('Logged In Correct!')
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: 'Unauthorized' });
}
