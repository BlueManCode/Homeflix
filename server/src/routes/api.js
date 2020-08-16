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

// get search movie
router.get('/getSearch/:searchterm', async (req, res) => {
	const searchterm = req.params.searchterm.split('%20').join(' ').toLowerCase()
	const movies = await Movie.find({
		search_tags: {
			$regex: `${searchterm}`
		}
	})

	const shows = await Show.find({
		search_tags: {
			$regex: `${searchterm}`
		}
	})

	const specials = await Special.find({
		search_tags: {
			$regex: `${searchterm}`
		}
	})

	if (req.userInfo.isSpecial) {
		res.send({
			movies,
			shows,
			specials
		})
	} else {
		res.send({
			movies,
			shows
		})
	}
})

module.exports = router