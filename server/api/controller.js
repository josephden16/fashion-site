// Use the controller to request different productsb
// based off of the categories in the routes array
const {getData} = require('../services/products');
// const mongoose = require('mongoose');


// const Fashion = getModel('Fashion');

const controller = {
    theData: function(req, res, category) {
        getData(category, (err, products) => {
            if (err) {
                console.log(err);
            } else {
                res.json(products);
            }
        });
    }
}

module.exports = controller;
