const express = require('express')
const router =  express.Router()
const Company = require('../models/Company')
const Product = require('../models/Product')
const dateFormat = require('dateformat');
const now = new Date();

router.get('/companyGetter', (req, res) => {
		Company.find({}, function (err, result) {
				if(err) return res.send({error: err})
				res.status(200).send(result)
		})
})
router.get('/getCompany', (req, res) => {
		console.log(req.body)
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
				res.send({data: result, msg: `Company ${result.company} Has been removed`})
		})
})

router.post('/:id/new-product', (req, res) => {
		console.log(req.body)
		res.send(req.body)
})

module.exports = router