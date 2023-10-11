const items = require('./fakeDb');

class Item {
  constructor(name, price) {
    debugger
    this.name = name;
    this.price = price;
    items.push(this);
  }
  
  static findAll(){
    return items;
  }

  static find(name) {
    const item = items.find(ele => ele.name === name);
    if (item === undefined) {
      throw {message: 'Item not found', status: 404}
    }
    return item;
  }

  static update(name, data) {
    const item = Item.find(name);
    if (item === undefined) {
      throw {message: 'Item not found', status: 404}
    }
    item.name = data.name;
    item.price = data.price;
    return item;
  }

  static delete(name) {
    const index = items.findIndex(ele => ele.name === name);
    if (index === -1) {
      throw {message: 'Item not found', status: 404}
    }
    items.splice(index, 1);
  }
}

module.exports = Item;