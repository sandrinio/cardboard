const express = require('express')
const router =  express.Router()
const Company = require('../models/Company')
const Product = require('../models/Product')
const Order = require('../models/Order')
const dateFormat = require('dateformat');
const now = new Date();


router.post('/new-order', (req, res) => {
		const newOrder = {
						company: req.body.company,
            product: req.body.product.productName,
            boxQuantity: req.body.boxQuantity,
            dividerQuantity: req.body.dividerQuantity,
            boxHeight: req.body.product.boxHeight,
            boxWidth: req.body.product.boxWidth,
            boxThickness: req.body.product.boxThickness,
            mDividerHeight: req.body.product.mDividerHeight,
            mDividerWidth: req.body.product.mDividerWidth,
            mDividerThickness: req.body.product.mDividerThickness,
            fDividerHeight: req.body.product.fDividerHeight,
            fDividerWidth: req.body.product.fDividerWidth,
            fDividerThickness: req.body.product.fDividerThickness,
            deadline: dateFormat(req.body.deadline, 'd-mmmm-yyyy'),
			comment: req.body.comment,
			regDate: dateFormat(now, 'd-mmmm-yyyy hh:mm:ss'),
			status: 'In-Progress'
		}
		Company.findOne({'company': newOrder.company}, function (err, result) {
				if(err) return res.send({error: err})
				if(!result.hasOwnProperty('orders') && isNaN(result.orders)){
						console.log('reached')
						result.orders = '1'
						result.save()
				}else {
					result.orders = +result.orders +1
						result.save()
						console.log(result)
				}
		})
		Order.create(newOrder, function(err, result){
			if(err) return res.send({error: err})
			res.send({msg: 'Order Created'})
		})
})
router.get('/ordersGetter', (req, res) => {
	Order.find({}).sort('-date').exec(function(err, result){
		if(err) return res.send({error: err})
		res.send({orders: result})
	})
})

router.post('/deleteOrder', (req, res) => {
		Order.findByIdAndRemove(req.body._id, function (err, result) {
				if(err) return res.send({error: err})
				res.status(200).send({success: 'Order Deleted'})
		})
		Company.findOne({'company': req.body.company}, function (err, result) {
				if(err) return res.send({error: err})
				if(!result.hasOwnProperty('orders') && isNaN(result.orders)){
						result.orders = '1'
						result.save()
				}else {
						result.orders = +result.orders -1
						result.save()
						console.log(result)
				}
		})
})

router.post('/editOrder', (req, res) => {
		let data = req.body
		const deadlineDate = req.body.deadline
		delete data.deadline
		data.deadline = dateFormat(deadlineDate, 'd-mmmm-yyyy hh:mm:ss')
		console.log(data)
		Order.findByIdAndUpdate(data._id, data, function (err, info) {
				if(err) return res.send({error: err})
				res.status(200).send({success: 'success'})
		})
})

router.get('/orderGetter/:id', (req, res) => {
		Order.findById(req.params.id, function (err, result) {
				if(err) return res.send({error: err})
				res.send({order: result})
		})
})

module.exports = router