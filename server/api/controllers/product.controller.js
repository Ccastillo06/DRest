const express = require('express');
const Product = require('../models/product.model');
const debug = require('debug')('server:Product');

module.exports.getList = (req, res, next) => {
  if(req.user.role!='Owner') {
    res.status(401).json({ message: 'Unauthorized'})
    return
  }
  Product.find({"owner" : req.user._id})
    .then(products => res.status(200).json(products))
    .catch(e => res.status(500).json({ message: 'Something went wrong'}))
}

module.exports.addNew = (req, res, next) => {
  if(req.user.role!='Owner') {
    res.status(401).json({ message: 'Unauthorized'})
    return
  }
  const {name, description, classification, denomination} = req.body;
  const owner = req.user._id;
  const image = `${req.file.url}`;
  const theProduct = new Product({
    name,
    classification,
    denomination,
    description,
    owner,
    image,
  })
  theProduct.save()
    .then( product => res.status(200).json(product))
    .catch( e => res.status(500).json({ message: 'Something went wrong' }))
}

module.exports.editProduct = (req, res, next) => {
  if(req.user.role!='Owner') {
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

module.exports.deleteProduct = (req, res, next) => {
  if(req.user.role!='Owner') {
    res.status(401).json({ message: 'Unauthorized'})
    return
  }
  Product.findByIdAndRemove(req.params.id)
    .then(removed => res.status(200).json(removed))
    .catch(e => res.status(500).json({ message: 'Something went wrong'}))
}
