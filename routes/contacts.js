const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const contact = require('../models/contact');

router.get('/show', (req, res, next) => {
    contact.find((err, products) => {
        if (err) return next(err);
        res.json(products);
    })
})


router.post('/create', (req, res, next) => {
    contact.create(req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
})
module.exports = router;