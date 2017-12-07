const express = require('express');
const Inventory = require('../models/inventory.model');
const Restaurant = require('../models/restaurant.model');
const debug = require('debug')('server:Inventory');

isAuthorized = (user) => {
  return (user.role == 'Owner')? true : false
}

module.exports.createNew = (req, res, next) => {
  if(!isAuthorized) {
    res.status(401).json({message: 'Unauthorized'})
    return
  }
  const theInventory = new Inventory();
  theInventory.save()
    .then(inventory => {
      Restaurant.findByIdAndUpdate(req.params.id, {inventory: inventory._id}, {new: true})
        .then(restaurant => res.status(200).json(restaurant))
    })
    .catch(e => res.status(500).json({ message: 'Something went wrong'}))
}
