const express = require('express');
const router = express.Router();

const {getAllProducts,getProductById} = require('../controller/productControllers');

//@desc GET all products from db
//@routes GET api/products
//@access api
router.get('/', getAllProducts)

//@desc GET a product by id from db
//@routes GET api/products/:id
//@access api
router.get('/:id', getProductById)

module.exports = router;