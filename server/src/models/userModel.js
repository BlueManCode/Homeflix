const mongoose = require('../db/config')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
}, {
  timestamps: true
})

const User = mongoose.model('MyShowList_Users', userSchema)

module.exports = User