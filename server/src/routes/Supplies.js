const express = require('express')
const router =  express.Router()
const PaperSupply = require('../models/supplies/Paper')
const GlueSupply = require('../models/supplies/Glue')
const DyeSupply = require('../models/supplies/Dye')
const StarchSupply = require('../models/supplies/Starch')
const WrapperSupply = require('../models/supplies/Wrapper')
const dateFormat = require('dateformat')
const now = new Date()

router.post('/addPaper', (req, res) => {
	let data = req.body
	data.regDate = dateFormat(now, 'd-mmmm-yyyy hh:mm:ss')
		PaperSupply.create(data, function (err, result) {
				if(err) return res.send({error: err})
				res.status(200).send({data: result})
		})
})

router.get('/paperGetter', (req, res) => {
		PaperSupply.find({}, function (err, result) {
				if(err) return res.send({error: err})
				res.status(200).send({paperList: result})
		})
})

router.post('/addGlue', (req, res) => {
		let data = req.body
		data.regDate = dateFormat(now, 'd-mmmm-yyyy hh:mm:ss')
		GlueSupply.create(data, function (err, result) {
				if(err) return res.send({error: err})
				res.status(200).send({data: result})
		})
})

router.get('/glueGetter', (req, res) => {
		GlueSupply.find({}, function (err, result) {
				if(err) return res.send({error: err})
				res.status(200).send({glueList: result})
		})
})

router.post('/addDye', (req, res) => {
		let data = req.body
		data.regDate = dateFormat(now, 'd-mmmm-yyyy hh:mm:ss')
		DyeSupply.create(data, function (err, result) {
				if(err) return res.send({error: err})
				res.status(200).send({data: result})
		})
})

router.post('/addStarch', (req, res) => {
		let data = req.body
		data.regDate = dateFormat(now, 'd-mmmm-yyyy hh:mm:ss')
		StarchSupply.create(data, function (err, result) {
				if(err) return res.send({error: err})
				res.status(200).send({data: result})
		})
})
router.post('/addWrappers', (req, res) => {
		let data = req.body
		data.regDate = dateFormat(now, 'd-mmmm-yyyy hh:mm:ss')
		WrapperSupply.create(data, function (err, result) {
				if(err) return res.send({error: err})
				res.status(200).send({data: result})
		})
})

module.exports = router