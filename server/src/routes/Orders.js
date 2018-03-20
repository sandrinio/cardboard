const express = require('express')
const router =  express.Router()
const Company = require('../models/Company')
const Product = require('../models/Product')
const dateFormat = require('dateformat');
const now = new Date();


router.get('/new-order', (req, res) => {
		console.log('reached')
		res.send({msg: 'reached'})
})

module.exports = router