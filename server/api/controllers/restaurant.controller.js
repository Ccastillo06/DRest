const express = require('express');
const Restaurant = require('../models/restaurant.model');
const User = require('../models/user.model');
const debug = require('debug')('server:Restaurant')

module.exports.getAll = (req, res, next) => {
  Restaurant.find()
    .then(restaurants => {
      debug(`Found Restaurants`);
      res.status(200).json(restaurants);
    })
    .catch(e => {
      res.status(500).json({ message: 'Something went wrong' })
    })
}

module.exports.getInfo = (req, res, next) => {
  Restaurant.findOne({name: req.params.name})
    .then( restaurant => {
      debug(`Found Restaurant: ${restaurant.name}`);
      res.status(200).json(restaurant);
    })
    .catch(e => {
        res.status(500).json({ message: 'Something went wrong' });
    });
}

module.exports.newRestaurant = (req, res, next) => {
  const {name, description, openTime, closeTime} = req.body;
  console.log(req.file)
  const image = `${req.file.url}`;
  const owner = req.user._id;

  if ((!name || !owner) || req.user.role != 'Owner') {
    res.status(400).json({ message: 'Provide a name or log as an owner' });
    return;
  }

  Restaurant.findOne({ name })
  .then(restaurant => {
    if (restaurant) {
      res.status(400).json({ message: 'The restaurant already exists' });
      return;
    }

    const theRestaurant = new Restaurant({
      name,
      owner,
      image,
      description,
      openTime,
      closeTime,
    });

    theRestaurant.save()
    .then(newRestaurant => {
      User.findByIdAndUpdate(req.user._id, {$push: {restaurants : {_id: newRestaurant._id}}})
      .then(() => {
        debug('Restaurant registered correctly!')
        res.status(200).json(newRestaurant);
      })
    })
  })
  .catch(e => {
      res.status(500).json({ message: 'Something went wrong' });
  });
}
