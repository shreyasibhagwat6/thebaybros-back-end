const knex = require("knex")(require("../knexfile").development);

exports.productDetails = (req, res) => {
    knex("product_details")
        .where({ id: req.params.id })
        .then((data) => {
            if (!data.length) {
                return res
                    .status(404)
                    .send(`Record with id: ${req.params.id} is not found`);
            }
            res.status(200).json(data);
        })
        .catch((err) =>
            res
                .status(400)
                .send(
                    `Error retrieving product details ${req.params.id} ${err}`
                )
        );
};
