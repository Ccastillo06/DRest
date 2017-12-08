const express = require('express');
const debug = require('debug')('server: Ticket');
const Table = require('../models/table.model');
const Restaurant = require('../models/restaurant.model');
const Ticket = require('../models/ticket.model');
const Inventory = require('../models/inventory.model');
const Product = require('../models/product.model');

isAuthorized = (user) => {
  return (user.role == 'Owner' && user.role == 'Manager')? true : false
}

module.exports.createTicket = (req, res, next) => {
  if(!isAuthorized){
    res.status(401).json({ message : 'Unauthorized'});
    return
  }
  Table.findById(req.body.table_id)
    .then(table => {
      let food = []; let quantity = []; let price = [];
      let total_price = 0;
      let order_amount = table.orders.length;
      let table_number = table.table_number;
      table.orders.forEach(e => {
        food.push(e.name);
        quantity.push(e.quantity);
        price.push(e.price);
        total_price += parseFloat(e.quantity) * parseFloat(e.price);
      })
      Restaurant.findById(req.body.res_id)
        .then(restaurant => {
          let restaurant_name = restaurant.name;
          const theTicket = new Ticket({
            restaurant_name,
            order_amount,
            table_number,
            total_price,
            food,
            quantity,
            price,
          })
          theTicket.save()
            .then(newTicket => {
              Restaurant.findByIdAndUpdate(restaurant._id, {$push: {tickets: newTicket._id}}, {new: true})
                .then(restaurant => res.status(200).json(newTicket))
            })
        })
    })
    .catch(e => res.status(500).json({ message: 'Something went wrong'}))
}

module.exports.freeOrders = (req, res, next) => {
  if(!isAuthorized){
    res.status(401).json({ message : 'Unauthorized'});
    return
  }
  Table.findByIdAndUpdate(req.body.table_id, { $set: { orders: [] }}, {new: true})
    .then(table => res.status(200).json(table))
    .catch(e => res.status(500).json({ message: 'Something went wrong'}))
}

module.exports.updateInventory = (req, res, next) => {
  if(!isAuthorized){
    res.status(401).json({ message : 'Unauthorized'});
    return
  }
  Restaurant.findById(req.body.res_id)
    .then(restaurant => {
      Inventory.findById(restaurant.inventory)
        .populate('productArray._id')
        .then(inventory => {
          Ticket.findById(req.body.ticket_id)
            .then(ticket => {
              ticket.food.forEach((x,i) => {
                inventory.productArray.forEach((y,j) => {
                  if(y.name == x.name) {
                   inventory.productArray[j].quantity = (parseInt(inventory.productArray[j].quantity) - parseInt(ticket.quantity[i])).toString();
                  }
                })
              })
              let newProductArray = [];
              let obj = {
                _id: '',
                quantity: '',
                price: '',
              }
              inventory.productArray.forEach((e,i) => {
                obj._id = e._id;
                obj.quantity = e.quantity;
                obj.price = e.price;
                newProductArray.push(obj);
              })
              Inventory.findByIdAndUpdate(inventory._id, { $set: { productArray: newProductArray}}, {new: true})
                .then( newInventory => res.status(200).json(newInventory))
            })
        })
    })
    .catch(e => res.status(500).json({ message: 'Something went wrong'}))
}
