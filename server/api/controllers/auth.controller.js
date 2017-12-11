const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const Restaurant = require('../models/restaurant.model');
const debug = require('debug')('server:Authentication')
const nodemailer = require('nodemailer');

module.exports.signUp = (req, res, next) => {
  const {username, password, email, role} = req.body;

  if (role=="Admin" || role=="Owner" ) {
    if(req.body.adminRegister != process.env.ADMIN_REGISTER){
      res.status(403).json({ message: 'Unauthorized' });
      return;
    }
  }

  if (role=="Waiter" || role=="Manager") {
      res.status(403).json({ message: 'Unauthorized' });
      return;
  }

  if(role=="Customer") {
    if(req.body.email == undefined) {
      res.status(400).json({ message: 'Provide email' });
      return;
    }
  }

  if (!username || !password || !role) {
    res.status(400).json({ message: 'Provide username and password' });
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
        if(newUser.role=='Owner' || newUser.role=='Customer'){
          var transporter = nodemailer.createTransport({
              service: 'Gmail',
              auth: {
                  user: `${process.env.ADMIN_MAIL}`,
                  pass: `${process.env.ADMIN_PASS}`
              }
          });
          if(newUser.role=='Owner'){
            var text = `Welcome to DRest, \n You became an ${newUser.role} with the next data: \nUsername: ${newUser.username}\nPassword: ${req.body.password}\n\nYou can now start managing your restaurant data and start using our application.\nRemember to change your password first!\n\nGreetings from the DRest team!`;
          }
          if(newUser.role=='Customer'){
            var text = `Hi ${newUser.username}, welcome to DRest! \n\nShow this community which bars and restaurants are the best!\n\n\nGreetings from the DRest team!`;
          }
          var mailOptions = {
            from: `${process.env.ADMIN_MAIL}`,
            to: newUser.email,
            subject: 'Welcome to DRest!',
            text: text
          }
          transporter.sendMail(mailOptions, (err, info) => {
            return err ? console.log(err) : console.log(info);
          });
        }
        debug('Sign Up Correct!')
        res.status(200).json(newUser);
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

// Owner can add waiter or manager.
module.exports.addWorker = (req, res, next) => {
  const {username, password, role} = req.body;
  if ((role!="Waiter" && role!="Manager") || req.user.role!='Owner') {
      res.status(403).json({ message: 'Unauthorized' });
      return;
  }
  if (!username || !password) {
    res.status(400).json({ message: 'Provide username and password' });
    return;
  }
  const salt     = bcrypt.genSaltSync(10);
  const hashPass = bcrypt.hashSync(password, salt);

  const theUser = new User({
    username,
    password: hashPass,
    role,
    works_in: req.params.id,
  });

  theUser.save()
    .then(worker => {
        debug('Sign Worker Up Correct!')
        Restaurant.findByIdAndUpdate(req.params.id, {$push: {workers: worker._id}}, {new: true})
          .then(restaurant => res.status(200).json(restaurant.workers))
      })
    .catch(e => {
        res.status(500).json({ message: 'Something went wrong' });
    });
}

module.exports.deleteWorker = (req, res, next) => {
  if (req.user.role!='Owner') {
    res.status(403).json({ message: 'Unauthorized' });
    return;
  }
  Restaurant.findById(req.params.id)
    .then(restaurant => {
      if(req.user._id.toString() != restaurant.owner.toString()){
        res.status(403).json({ message: 'Unauthorized' });
        return;
      }
      Restaurant.findByIdAndUpdate(restaurant._id, {$pull: {workers: req.params.worker_id}}, {new: true})
        .then(restaurant => res.status(200).json(restaurant))
      })
      .catch(e => {
        res.status(500).json({ message: 'Something went wrong' });
    });
}

module.exports.ownerPetition = (req, res, next) => {
  if(req.body.role == 'Owner'){
    const newOwner = {
      username: req.body.username,
      email: req.body.email,
      information: req.body.information,
    }
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: `${process.env.ADMIN_MAIL}`,
            pass: `${process.env.ADMIN_PASS}`
        }
    });
    var text = `A new Owner wants to register: \n {\n"username": "${newOwner.username}",\n"password": "1234",\n"email": "${newOwner.email}",\n"role": "Owner"\n}\nInformation given: ${newOwner.information}`;
    var mailOptions = {
      from: `${process.env.ADMIN_MAIL}`,
      to: `${process.env.ADMIN_MAIL}`,
      subject: 'New Owner wants to Sign Up!',
      text: text
    }
    transporter.sendMail(mailOptions, (err, info) => {
     return err ? console.log(err) : console.log(info);
    });
    res.status(200).json({message: 'Signed up'})
  }
}
