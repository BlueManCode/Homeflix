const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

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
	const searchOption = {
		search_tags: {
			$regex: `${searchterm}`
		}
	}
	const movies = await Movie.find(searchOption)
	const shows = await Show.find(searchOption)
	const specials = await Special.find(searchOption)

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

// get the requested media for the player
router.get('/getPlayerData/movie/:id', async (req, res, next) => {
	const id = req.params.id
	await Movie.findById(id).then((doc, error) => {
		if (!error) {
			res.send(doc)
		} else {
			next(new Error('NOT FOUND'))
		}
	})
})

router.get('/getPlayerData/show/:id', async (req, res, next) => {
	const id = req.params.id
	await Show.findById(id).then((doc, error) => {
		if (!error) {
			res.send(doc)
		} else {
			next(new Error('NOT FOUND'))
		}
	})
})

router.get('/getPlayerData/special/:id', async (req, res, next) => {
	const id = req.params.id
	if (req.userInfo.isSpecial) {
		await Special.findById(id).then((doc, error) => {
			if (!error) {
				res.send(doc)
			} else {
				next(new Error('NOT FOUND'))
			}
		})
	} else {
		next(new Error('Permission Denied'))
	}
})


module.exports = router