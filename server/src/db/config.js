const mongoose = require('mongoose')

try {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log('mongo database connected')

} catch (error) {
  console.log('couldn\'t connect to the database')
}

module.exports = mongoose