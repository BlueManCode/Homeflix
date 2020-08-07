function notFound(req, res, next) {
  res.statusCode = 404
  next(new Error('NOT Found'))
}

function errorHandler(error, req, res, next) {
  res.status(req.statusCode !== 200 ? 500 : req.statusCode)
  res.json({
    message: error.message
  })
}

module.exports = {
  notFound,
  errorHandler
}