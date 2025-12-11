const Joi = require('joi');

const tournament = Joi.object({
    params: Joi.object({
        slug: Joi.string().required(),
    }),
    query: Joi.object({
        includeContents: Joi.string().valid("true","false").optional(),
    }),
})

module.exports = { tournament }