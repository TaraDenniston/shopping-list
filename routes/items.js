const express = require('express');
const router = new express.Router();
const ExpressError = require('../expressError');
const Item = require('../item');

router.get('/', (req, res, next) => {
  return res.json({ items: Item.findAll() });
});

router.post('/', (req, res, next) => {
  let newItem = new Item(req.body.name, req.body.price);
  return res.json({ added: newItem });
});

router.get('/:name', (req, res, next) => {
  req.params.name
});


module.exports = router;