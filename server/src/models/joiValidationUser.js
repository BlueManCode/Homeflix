const Joi = require('@hapi/joi')

const schema = Joi.object({
  email: Joi.string()
    .email()
    .required(),

  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{8,20}$'))
    .required(),
}).with('email', 'password')

module.exports = schema