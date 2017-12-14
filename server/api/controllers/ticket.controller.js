const express = require('express');
const debug = require('debug')('server: Ticket');
const Table = require('../models/table.model');
const Restaurant = require('../models/restaurant.model');
const Ticket = require('../models/ticket.model');
const User = require('../models/user.model');
const Product = require('../models/product.model');

module.exports.generateTicket = (req, res, next) => {
  if(req.user.role!='Manager' || req.user.works_in != req.params.rest_id){
    res.status(401).json({ message : 'Unauthorized'});
    return
  }
  Restaurant.findById(req.params.rest_id)
    .then(restaurant => {
      if(restaurant._id.toString() != req.user.works_in.toString()){
        res.status(401).json({ message : 'Unauthorized'});
        return
      }
      Table.findById(req.params.table_id)
        .populate("orders._id")
        .then(table => {
          const table_name = `${table.title} - ${table.table_number}`
          let food_names = []; food_qty = []; food_price = [];
          table.orders.forEach(e => {
            if(food_names.indexOf(e._id.name) == -1) {
              food_names.push(e._id.name)
              food_qty.push(0)
              food_price.push(e._id.menu_price)
            }
          })
          table.orders.forEach(e => {
            food_qty[food_names.indexOf(e._id.name)] = parseInt(food_qty[food_names.indexOf(e._id.name)]) + parseInt(e.qty)
          })
          let total_price = 0;
          let total_order = [];
          food_names.forEach((e,i) => {
            total_price += parseInt(food_qty[i]) * parseInt(food_price[i]);
            total_order.push({
              name: food_names[i],
              amount: food_qty[i],
              price: food_price[i]
            })
          })
          const theticket = new Ticket ({
            total_price,
            table_name,
            total_order,
          });
          theticket.save()
            .then(ticket => {
              Restaurant.findByIdAndUpdate(restaurant._id, {$push: {tickets: ticket._id}})
                .then(restaurant => res.status(200).json(ticket))
            })
        })
    })
    .catch(e => res.status(500).json({ message: 'Something went wrong'}))
}


module.exports.freeOrders = (req, res, next) => {
  if(req.user.role!='Manager' || req.user.works_in != req.params.rest_id){
    res.status(401).json({ message : 'Unauthorized'});
    return
  }
  Table.findByIdAndUpdate(req.params.table_id, { $set: { orders: [] }}, {new: true})
    .then(table => res.status(200).json(table))
    .catch(e => res.status(500).json({ message: 'Something went wrong'}))
}

module.exports.updateInventory = (req, res, next) => {
  if(req.user.role!='Manager'){
    res.status(401).json({ message : 'Unauthorized'});
    return
  }
  Restaurant.findById(req.user.works_in)
    .then(restaurant => {
      User.findById(restaurant.owner)
        .then(boss => {
          Product.find({"owner": boss._id})
            .then(productList => {
              productList.forEach(x => {
                req.body.total_order.forEach(y => {
                  if(x.name == y.name) {
                    x.quantity = (parseInt(x.quantity) - parseInt(y.amount)).toString();
                  }
                })
                x.save();
              })
            })
          })
        })
}
