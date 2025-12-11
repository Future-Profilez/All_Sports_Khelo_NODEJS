const Joi = require('joi');

const tournament = Joi.object({
    params: Joi.object({
        slug: Joi.string().required(),
    })
})

module.exports = { tournament }