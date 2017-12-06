const express = require('express');
const Restaurant = require('../models/restaurant.model');
const User = require('../models/user.model');
const debug = require('debug')('server:Restaurant')

module.exports.addNew = (req, res, next) => {
  const name = req.body.name;
  const owner = req.user._id;

  if ((!name || !owner) || req.user.role !== 'Owner') {
    res.status(400).json({ message: 'Provide a name or log as an owner' });
    return;
  }

  Restaurant.findOne({ 'name' : name }, '_id')
  .then(restaurant => {
    if (restaurant) {
      res.status(400).json({ message: 'The restaurant already exists' });
      return;
    }

    const theRestaurant = new Restaurant({
      name,
      owner,
    });

    theRestaurant.save()
      .then(newRestaurant => {
          debug('Restaurant registered correctly!')
          res.status(200).json(newRestaurant);
      })
  })
  .catch(e => {
      res.status(500).json({ message: 'Something went wrong' });
  });
}
