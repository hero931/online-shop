const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'item.json');

const getItemDetails = callback => {
    fs.readFile(p, (err, fileContent) => {
        if(err) {
            callback([]);
        } else {
            callback(JSON.parse(fileContent));
        }
    });
};

module.exports = class Item {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        getItemDetails(details => {
            details.push(this);
            fs.writeFile(p, JSON.stringify(details), err => {
                console.log(err);
            });
        });
    }

    static fetchAll(callback) {
        getItemDetails(callback);
    }
};