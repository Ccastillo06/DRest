const express = require('express');
const Product = require('../models/product.model');
const debug = require('debug')('server:Product');

isAuthorized = (user) => {
  return (user.role == 'Owner')? true : false
}

module.exports.getList = (req, res, next) => {
  if(!isAuthorized(req.user)) {
    res.status(401).json({ message: 'Unauthorized'})
    return
  }
  Product.find({"owner" : req.user._id})
    .then(products => res.status(200).json(products))
    .catch(e => res.status(500).json({ message: 'Something went wrong'}))
}

module.exports.addNew = (req, res, next) => {
  if(!isAuthorized(req.user)) {
    res.status(401).json({ message: 'Unauthorized'})
    return
  }
  const {name, classification, denomination} = req.body;
  const owner = req.user._id;
  const theProduct = new Product({
    name,
    classification,
    denomination,
    owner,
  })
  theProduct.save()
    .then( product => res.status(200).json(product))
    .catch( e => res.status(500).json({ message: 'Something went wrong' }))
}

module.exports.editProduct = (req, res, next) => {
  if(!isAuthorized(req.user)) {
    res.status(401).json({ message: 'Unauthorized'})
    return
  }
  const {name, classification, denomination, description} = req.body;
  const editProduct = {
    name,
    classification,
    denomination,
    description
  }
  Product.findByIdAndUpdate(req.params.id, editProduct, {new: true} )
    .then( product => res.status(200).json(product))
    .catch( e => res.status(500).json({ message: 'Something went wrong'}))
}
