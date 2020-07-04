const Product = require('../models/product');
const fs = require('fs'); //deleting images from folders

exports.createProduct = (req, res, next) => {
    const url = req.protocol + '://' + req.get("host");
    const product = new Product({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        productCategory: req.body.productCategory, //for url images, getting category from admin dropdown list
        name: req.file.filename,
        imagePath: url + '/images/' + req.body.productCategory + '/' + req.file.filename
    });

    product.save().then(createdProduct => {
        res.status(201).json({
            message: 'Product added succesfully',
            product: {
                title: createdProduct.title,
                description: createdProduct.description,
                price: createdProduct.price,
                id: createdProduct._id,
                productCategory: createdProduct.productCategory,
                name: createdProduct.name,
                imagePath: createdProduct.imagePath
            }
        });
    });
}

exports.getProduct = (req, res, next) => {
    // Pagination
    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;
    const urlCategory = { productCategory: req.params.category } //get category from url and passing to find func.
    const postQuery = Product.find(urlCategory);
    let fetchedProducts;
    if (pageSize && currentPage) {
        postQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
    }
    // ----------
    postQuery.then(documents => {
        fetchedProducts = documents;
        return Product.countDocuments(urlCategory);
    }).then(count => {
        res.status(200).json({
            message: "products fetched successfully!",
            products: fetchedProducts,
            maxProducts: count
        });
    });
}

exports.deleteProduct = (req, res, next) => {
    const urlID = { _id: req.params.id }

    Product.findOne(urlID).then(doc => {
        // fs.unlink('./backend/images/' + doc.productCategory + '/' + doc.name, function (err) for develop testing
        fs.unlink(__dirname + '../../images/' + doc.productCategory + '/' + doc.name, function (err) {
            if (err) {
                console.error(err);
            }
            console.log("Uspesno izbrisana slika iz foldera");
        });
    });
    Product.deleteOne(urlID).then(result => console.log(`Uspesno izbrisana slika iz baze: ${result}`));
    res.status(200).json({ message: "Product deleted!" });
}

