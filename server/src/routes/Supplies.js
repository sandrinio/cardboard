const express = require('express')
const router =  express.Router()
const PaperSupply = require('../models/supplies/Paper')
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

module.exports = router