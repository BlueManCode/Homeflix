const express = require('express')
const router = express.Router()

const User = require('../models/userModel')
const Show = require('../models/showModal')
const Movie = require('../models/movieModal')
const Special = require('../models/specialModal')

// GET
router.get('/', (req, res) => {
	res.json({})
})

// middelware to get userInfo from the database
router.use(async (req, res, next) => {
	const doc = await User.findOne({
		email: req.user.email
	})
	req.userInfo = doc
	next()
})

// get all content
router.get('/getContent', async (req, res) => {
	const show = await Show.find({})
	const movie = await Movie.find({})
	const special = await Special.find({})

	// if special send back special
	if (req.userInfo.isSpecial) {
		res.send({
			show,
			movie,
			special
		})
	} else {
		res.send({
			show,
			movie
		})
	}
})

module.exports = router
