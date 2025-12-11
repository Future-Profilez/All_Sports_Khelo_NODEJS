const validate = (schema) => (req, res, next) => {
    const data = {
        body: req.body,
        params: req.params,
        query: req.query,
    };
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
        return res.status(400).json({
            message: "Validation failed",
            error: error.details.map((d) => d.message),
        });
    }
    next();
}

module.exports = validate;  