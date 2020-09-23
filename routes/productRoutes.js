const express = require('express');
const productController = require('../controllers/productController');
const reviewRouter = require('./reviewRoutes');

const router = express.Router({ mergeParams: true });

// GET  api/v1/products/productId/reviews
// POST api/v1/products/productId/reviews
router.use('/:tourId/reviews', reviewRouter)

// @route  api/v1/products
router.get('/', productController.getProducts);
router.get('/:id', productController.getProduct);

module.exports = router