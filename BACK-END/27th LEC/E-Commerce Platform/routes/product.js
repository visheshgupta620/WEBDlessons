//index vale app ko yha use krna hai to uske liye hota router 
const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/products', async (req, res) => {
    const products = await Product.find({});

    res.render('products/index', { products });

    // res.send('Hello from products');
});

router.get('/product/new', (req, res)=>{
    res.render('products/new');
});

router.post('/products', async (req, res)=>{
    const {name, image, price, desc} = req.body;
    await Product.create({name, image, price, desc});
    res.redirect('/products');
})



module.exports = router;