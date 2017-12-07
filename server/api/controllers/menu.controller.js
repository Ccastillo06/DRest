const express = require('express');
const Menu = require('../models/menu.model');
const Restaurant = require('../models/restaurant.model');
const Product = require('../models/product.model');
const debug = require('debug')('server:Menu');

isAuthorized = (user) => {
  return (user.role == 'Owner')? true : false
}

module.exports.createNew = (req, res, next) => {
  if(!isAuthorized) {
    res.status(401).json({message: 'Unauthorized'})
    return
  }
  const theMenu = new Menu();
  theMenu.save()
    .then(menu => {
      Restaurant.findByIdAndUpdate(req.params.id, {menu: menu._id}, {new: true})
        .then(restaurant => res.status(200).json(restaurant))
    })
    .catch(e => res.status(500).json({ message: 'Something went wrong'}))
}

module.exports.addProduct = (req, res, next) => {
  if(!isAuthorized) {
    res.status(401).json({message: 'Unauthorized'})
    return
  }
  Product.findById(req.body.id)
    .then(product => {
      Menu.findByIdAndUpdate(req.params.id, {$pull: {productArray: {_id: product._id}}})
        .then(() => {
          Menu.findByIdAndUpdate(req.params.id, {$push: {productArray: {
              _id: product._id,
              ingredients: req.body.ingredients,
              price: req.body.price
            }}}, {new: true} )
            .then(menu => res.status(200).json(menu))
        });
    })
    .catch(e => res.status(500).json({ message: 'Something went wrong'}))
}

module.exports.listMenu = (req, res, next) => {
  Restaurant.findById(req.params.id)
    .then(restaurant => {
      Menu.findById(restaurant.menu)
        .then(menu => res.status(200).json(menu.productArray))
    })  
    .catch(e => res.status(500).json({ message: 'Something went wrong'}))
}
