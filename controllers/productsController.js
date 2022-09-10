const knex = require("knex")(require("../knexfile").development);

exports.products = (_req, res) => {
    knex("products")
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) =>
            res.status(400).send(`Error retrieving products: ${err}`)
        );
};
