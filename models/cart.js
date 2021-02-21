const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');

module.exports = class Cart {
    static addItem(id, itemPrice) {
        fs.readFile(p, (err, fileContent) => {
            let cart = { items: [], totalPrice: 0 };
            if(!err) {
                cart = JSON.parse(fileContent);
            }
            const existingItemIndex = cart.items.findIndex(item => item.id === id);
            const existingItem = cart.items[existingItemIndex];
            let updatedItem;
            if(existingItem) {
                updatedItem = { ...existingItem };
                updatedItem.qty = updatedItem.qty + 1;
                cart.items = [...cart.items];
                cart.items[existingItemIndex] = updatedItem;
            } else {
                updatedItem = { id: id, qty: 1 };
                cart.items = [...cart.items, updatedItem];
            }
            cart.totalPrice = cart.totalPrice + +itemPrice;
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            });
        });
    }
};

