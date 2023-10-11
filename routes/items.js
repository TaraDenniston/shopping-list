const express = require('express');
const router = new express.Router();
const ExpressError = require('../expressError');
const Item = require('../item');

/*******************************************************
 * Item Routes
 *******************************************************/

/*** GET / *** Return all items ************************/
router.get('/', (req, res, next) => {
  try {
    return res.json({ items: Item.findAll() });
  } catch(err) {
    return next(err);
  }
});

/*** POST / *** Add new item with name & price ********/
router.post('/', (req, res, next) => {
  try {
    let newItem = new Item(req.body.name, req.body.price);
    return res.json({ added: newItem });
  } catch (err) {
    return next(err);
  }
});

/*** GET /:name *** Find item that matches name *******/
router.get('/:name', (req, res, next) => {
  try {
    let foundItem = Item.find(req.params.name);
    return res.json({ item: foundItem });
  } catch(err) {
    return next(err);
  }
});

/*** PATCH /:name *** Update item that matches name ***/
router.patch('/:name', (req, res, next) => {
  try {
    let item = Item.update(req.params.name, req.body);
    return res.json({ updated: item });
  } catch(err) {
    return next(err);
  }
});

/*** DELETE /:name *** Delete item that matches name ***/
router.delete('/:name', (req, res, next) => {
  try {
    let item = Item.delete(req.params.name);
    return res.json('Deleted');
  } catch(err) {
    return next(err);
  }
});

module.exports = router;