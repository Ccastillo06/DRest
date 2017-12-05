const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User  = require('../models/user.model');
const bcrypt = require('bcrypt');

passport.use(new LocalStrategy((username, password, next) => {
  const email = username;
  User.findOne({ email }, (err, foundUser) => {
    if (err) {
      next(err);
      return;
    }

    if (!foundUser) {
      next(null, false, { message: 'Incorrect email or password' });
      return;
    }

    if (!bcrypt.compareSync(password, foundUser.password)) {
      next(null, false, { message: 'Incorrect email or password' });
      return;
    }

    next(null, foundUser);
  });
}));
