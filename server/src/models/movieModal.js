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
  preview_poster: optionString,
  card_poster: optionString,
  title: optionString,
  titlePNG: optionString,
  search_tags: optionString,
  year: optionNumber,
  rating: optionNumber,
  length: optionNumber,
  overview: optionString,
  genres: optionString,
  show_warning: optionString,
  link: optionString
}, {
  timestamps: true
})

const Movie = mongoose.model('Movies', movieSchema)

module.exports = Movie