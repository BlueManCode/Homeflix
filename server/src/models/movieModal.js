const mongoose = require('../db/config')
const Schema = mongoose.Schema

const optionString = {
  type: String,
  required: true
}

const optionNumber = {
  type: Number,
  required: true
}

const movieSchema = new Schema({
  title: optionString,
  titlePNG: optionString,
  searchTag: optionString,
  year: optionNumber,
  rating: optionNumber,
  overview: optionString,
  genres: optionString,
  showTag: optionString,
  link: optionString
}, {
  timestamps: true
})

const Movie = mongoose.model('Movies', movieSchema)

module.exports = Movie