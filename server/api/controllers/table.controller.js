const express = require('express');
const debug = require('debug')('server: Table');
const Table = require('../models/table.model');
const Restaurant = require('../models/restaurant.model');
const Product = require('../models/product.model')

module.exports.getOne = (req, res, next) => {
  console.log(req.params)
  Table.findById(req.params.id)
    .then(table => res.status(200).json(table))
    .catch(e => res.status(500).json({ message: 'Something went wrong'}))
}

module.exports.addNew = (req, res, next) => {
  if(req.user.role!='Owner') {
    res.status(401).json({ message: 'Unauthorized'})
    return
  }
  const {table_number, title, zone} = req.body;
  const theTable = new Table({
    table_number,
    title,
    zone,
  })
  theTable.save()
    .then( newTable => {
        Restaurant.findByIdAndUpdate(req.params.id, {$push: {tables: theTable._id}}, {new: true} )
          .populate("tables")
          .then(restaurant => {console.log(restaurant);res.status(200).json(restaurant)})
    })
    .catch(e => res.status(500).json({ message: 'Something went wrong'}))
}

module.exports.deleteTable = (req, res, next) => {
  if(req.user.role!='Owner') {
    res.status(401).json({ message: 'Unauthorized'})
    return
  }
  Restaurant.findById(req.params.id)
    .then(restaurant => {
      if(restaurant.owner.toString() !== req.user._id.toString()){
        res.status(401).json({message: 'Unauthorized'})
        return
      }
      Table.findById(req.params.table_id)
        .then(table => {
          console.log(table)
          Restaurant.findByIdAndUpdate(restaurant._id, {$pull: {tables: table._id}}, {new: true} )
            .populate("tables")
            .then(restaurant => {console.log(restaurant);res.status(200).json(restaurant)})
        })
    })
    .catch(e => res.status(500).json({ message: 'Something went wrong'}))
}

module.exports.addOrder = (req, res, next) => {
  if(req.user.role!='Customer' && req.user.role!='Waiter' && req.user.role!='Manager'){
    res.status(401).json({ message: 'Unauthorized'})
    return
  }
  Product.findById(req.params.obj_id)
    .then(product => {
      Table.findByIdAndUpdate(req.params.table_id, {$push: {orders: {
        _id: product._id,
        qty: 1,
      }}}, {new: true})
      .then(table => res.status(200).json(table))
    })
    .catch(e => res.status(500).json({ message: 'Something went wrong'}))
}

module.exports.quitOrder = (req, res, next) => {
  if(req.user.role!='Customer' && req.user.role!='Waiter' && req.user.role!='Manager'){
    res.status(401).json({ message: 'Unauthorized'})
    return
  }
  Product.findById(req.params.obj_id)
    .then(product => {
      Table.findByIdAndUpdate(req.params.table_id, {$push: {orders: {
        _id: product._id,
        qty: -1,
      }}}, {new: true})
      .then(table => res.status(200).json(table))
    })
    .catch(e => res.status(500).json({ message: 'Something went wrong'}))
}
