const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

require('dotenv').config()

const User = require('../models/userModel')
const schema = require('../models/joiValidationUser')

router.post('/login', async (req, res, next) => {
  // validate the user input using joi
  const results = schema.validate(req.body)

  // if not a validation error
  if (!results.error) {
    // check if the username exist in the database
    User.findOne({
      email: req.body.email
    }).then(doc => {
      // if the username exist
      if (doc) {
        // compare the password provided and linked with the user
        bcrypt.compare(req.body.password, doc.password, function (err, result) {
          // if the password is correct 
          if (result) {
            // send back a json token
            const token = jwt.sign({
              email: doc.email,
              id: doc._id
            }, process.env.SECRET, {
              expiresIn: 60 * 60
            });
            res.send({
              token
            })
          } else {
            next(new Error('Password Incorrect'))
          }
        });
      } else {
        next(new Error('User Doesn\'t Exist'))
      }
    })
  } else {
    next(new Error(results.error.message))
  }
})

router.post('/signup', async (req, res, next) => {
  // validate the user input using joi
  const results = schema.validate(req.body)

  // if not a validation error
  if (!results.error) {
    // check if the username exist in the database
    User.findOne({
      email: req.body.email
    }).then(doc => {
      // if the username exist
      if (doc) {
        next(new Error('User Already Exist'))
      } else {
        // username doesn't exist
        bcrypt.genSalt(12, function (err, salt) {
          // hash the password and update the user object
          bcrypt.hash(req.body.password, salt, async function (err, hash) {
            const user = {
              email: req.body.email,
              password: hash,
              isSpecial: req.body.isSpecial
            }
            // add the user to the database
            const newUser = new User(user);
            await newUser.save();
            res.send('user created and added' + newUser)
          });
        });
      }
    })
  } else {
    next(new Error(results.error.message))
  }
})

module.exports = router