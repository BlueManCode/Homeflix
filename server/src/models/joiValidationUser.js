const Joi = require('@hapi/joi')

const schema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(20)
    .required(),

  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{8,20}$'))
    .required(),
}).with('username', 'password')

module.exports = schema