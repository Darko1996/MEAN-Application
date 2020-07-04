const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: { type: String },
    description: { type: String, requred: true },
    price: { type: String, requred: true },
    productCategory: { type: String, requred: true },
    imagePath: { type: String, requred: true },
    name: { type: String }
});

module.exports = mongoose.model('Product', productSchema);
