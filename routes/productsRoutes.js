const router = require("express").Router();
const productsController = require("../controllers/productsController.js");

router.route("/").get(productsController.products);

module.exports = router;
