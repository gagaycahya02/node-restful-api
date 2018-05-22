var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('../models/Products.js');

// Get All Products
router.get('/', (req, res, next) => {
    Product.find((err, products) => {
        if (err) return next(err);
        res.json(products);
    });
});

// Get Single Product
router.get('/:id',(req, res, next) => {
    Product.findById(req.params.id, (err,product) => {
        if (err) return next(err);
        res.json(product);
    });
});

// Save Product
router.post('/', (req, res, next) => {
    Product.create(req.body, (err, product) => {
        if (err) next(err);
        re.json(product);
    });
});

// Update Product
router.put('/:id', (req, res, next) => {
    Product.findByIdAndUpdate(req.params.id, req.body, (err, product) => {
        if (err) next(err);
        res.json(product);
    });
});

// Delete Product
router.delete('/:id', (req, res, next) => {
    Product.findByIdAndRemove(req.params.id, req.body, (err, product) => {
        if (err) next(err);
        res.json(product);
    });
});

module.exports = router;