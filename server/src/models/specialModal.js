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

const specialSchema = new Schema({
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

const Special = mongoose.model('Specials', specialSchema)

module.exports = Special