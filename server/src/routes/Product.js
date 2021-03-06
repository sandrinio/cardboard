const express = require('express')
const router =  express.Router()
const Company = require('../models/Company')
const Product = require('../models/Product')
const dateFormat = require('dateformat');
const now = new Date();


router.get('/getCompanyList',  (req, res) => {
		Company.find({}).populate('products').exec(function (err, result) {
				if(err) return res.send({error: err})
				res.status(200).send(result)
		})
})
router.get('/getProduct/:id', (req, res) => {
		Product.findById(req.params.id, function (err, product) {
				if(err) return res.send({error: err})
				res.status(200).send(product)
		})
})

router.get('/getCompany/:id', (req, res) => {
		Company.findById(req.params.id, function (err, company) {
				if(err) return res.send({error: err})
				res.status(200).send(company)
		})
})


router.post('/newCompany', (req, res) => {
		const newCompany = {}
		newCompany.regDate = dateFormat(now, 'd-mmmm-yyyy h:MM:ss')
		newCompany.company = req.body.companyName

		Company.create(newCompany, function (err, result) {
				if(err) return res.send({error: err})
				res.send({data: result, msg: `Company ${result.company} Has been created`})
		})
})

router.post('/deleteCompany', (req, res) => {
		Company.findByIdAndRemove(req.body.id, function (err, result) {
				if(err) return res.send({error: err})
				if(result.products.length >= 0){
						result.products.forEach(function (id) {
								Product.findByIdAndRemove(id, function (err, deletedProduct) {
										if(err) return console.log(err)
										console.log(`Deleted ${deletedProduct}`)
								})
						})
				}
				res.send({data: result, msg: `Company ${result.company} Has been removed`})
		})
})

router.post('/changeProduct/:id', (req, res) => {
		console.log(req.body)
		Product.findByIdAndUpdate(req.params.id, req.body, function (err, product) {
				if(err) return res.send({error: err})
				res.status(200).send({msg: 'success'})
		})
})

router.post('/deleteProduct/:id', (req, res)=>{
		Product.findByIdAndRemove(req.params.id, function (err, result) {
				if(err) return res.send({error: err})
				res.send({data: result, msg: 'პროდუქტი წაიშალა'})
		})
})

router.post('/:id/new-product', (req, res) => {
		Company.findById(req.body.id, function (err, company) {
				if(err) return console.log(err)
				Product.create(req.body, function (err, product) {
						if(err) return console.log(err)
						company.products.push(product)
						company.save()
						res.status(200).send({msg: 'Saved'})
				})
		})
})

router.get('/productsGetter', (req, res) => {
		Product.find({}, function (err, result) {
				if(err) return console.log(err)
				res.status(200).send({products: result})
		})
})

module.exports = router