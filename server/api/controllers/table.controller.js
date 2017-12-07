const express = require('express');
const debug = require('debug')('server: Table');
const Table = require('../models/table.model');
const Restaurant = require('../models/restaurant.model');
const Product = require('../models/product.model')
isAuthorized = (user) => {
  return (user.role == 'Owner')? true : false
}

module.exports.addNew = (req, res, next) => {
  if(!isAuthorized(req.user)) {
    res.status(401).json({ message: 'Unauthorized'})
    return
  }
  const {max_people, table_number, title, zone} = req.body;
  const theTable = new Table({
    max_people,
    table_number,
    title,
    zone,
  })
  theTable.save()
    .then( newTable => {
        Restaurant.findByIdAndUpdate(req.params.id, {$push: {tables: theTable._id}}, {new: true} )
          .then(restaurant => res.status(200).json(restaurant))
    })
    .catch(e => res.status(500).json({ message: 'Something went wrong'}))
}

module.exports.deleteTable = (req, res, next) => {
  if(!isAuthorized(req.user)) {
    res.status(401).json({ message: 'Unauthorized'})
    return
  }
  Restaurant.findById(req.params.id)
    .then(restaurant => {
      if(restaurant.owner.toString() !== req.user._id.toString()){
        res.status(401).json({message: 'Unauthorized'})
        return
      }
      Restaurant.findByIdAndUpdate(req.params.id, {$pull: {tables: req.params.table_id}}, {new: true} )
        .then(restaurant => res.status(200).json(restaurant))
    })
    .catch(e => res.status(500).json({ message: 'Something went wrong'}))
}

module.exports.listTables = (req, res, next) => {
  Restaurant.findById(req.params.id)
    .populate('tables')
    .then(restaurant => res.status(200).json(restaurant.tables))
    .catch(e => res.status(500).json({ message: 'Something went wrong'}))
}

module.exports.addOrder = (req, res, next) => {
  if(req.user.role!='Customer' && req.user.role!='Waiter'){
    res.status(401).json({ message: 'Unauthorized'})
    return
  }
  Product.findById(req.body._id)
    .then(product => {
      Table.findByIdAndUpdate(req.params.id, {$push: {orders: {
        _id: product._id,
        name: product.name,
        quantity: req.body.quantity,
        price: req.body.price,
      }}}, {new: true})
      .then(table => res.status(200).json(table))
    })
    .catch(e => res.status(500).json({ message: 'Something went wrong'}))
}
