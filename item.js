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
    return foundItem;
  }
}


module.exports = Item;