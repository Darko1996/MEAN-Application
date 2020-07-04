const express = require('express');
const router = express.Router();
const ProductController = require("../controllers/products");
const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");


router.post("/api/products/:type", checkAuth, extractFile, ProductController.createProduct);

router.get("/api/products/:category", ProductController.getProduct);

router.delete('/api/products/:category/:id/', checkAuth, ProductController.deleteProduct)

module.exports = router;
