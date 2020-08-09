const mongoose = require('../db/config')
const {
  boolean
} = require('@hapi/joi')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isSpecial: {
    type: Boolean,
  }
}, {
  timestamps: true
})

const User = mongoose.model('Users', userSchema)

module.exports = User