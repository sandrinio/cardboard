const express = require('express')
const router =  express.Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const bcrypt = require('bcrypt')
const AuthController = require('../middleware/AuthenticationControllerPolicy')

function jwtSignUser (user) {
		const THIRTY_MIN = 1800000
		return jwt.sign(user, config.authentication.jwtSecret, {expiresIn: THIRTY_MIN})
}


router.post('/login', (req, res) => {
	User.findOne({'username': req.body.email}, function (err, user) {
			if(!user) {
					return res.send({error: 'Username or password is incorrect'})
			}else{
			const isPasswordValid = bcrypt.compareSync(req.body.password, user.password)
			if(!isPasswordValid){
					res.send({error: 'Username or password is incorrect'})
			}else{
					const userJson = user.toJSON()
					res.send({
							user: userJson,
							token: jwtSignUser(userJson)
					})
			}
			}
	})
})

router.post('/register', (req, res) => {
		const newUser = new User({
				name: req.body.name,
				surname: req.body.surname,
				permission: req.body.permission,
				password: req.body.password,
				username: req.body.email
		})
		User.createUser(newUser,  (err, user) => {
				if(err) return res.status(403).send({error: 'Username already exists'})
				const userJson = user.toJSON()
				res.send({
						user: userJson,
						token: jwtSignUser(userJson)
				})
		})
})


module.exports = router