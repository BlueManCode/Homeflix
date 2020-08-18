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

const showSchema = new Schema({
  type: optionString,
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
  seasons: {
    type: Array,
    required: true
  }
}, {
  timestamps: true
})

const Show = mongoose.model('Shows', showSchema)

module.exports = Show