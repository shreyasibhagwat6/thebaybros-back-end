const router = require("express").Router();
const productsDetailsController = require("../controllers/productsDetailsController.js");

router.route("/:id").get(productsDetailsController.productDetails);

module.exports = router;
