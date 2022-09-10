/**
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const productsData = require("../seed_data/products_data");
const productsDetailsData = require("../seed_data/product_details_data");

exports.seed = function (knex) {
    return knex("products")
        .del()
        .then(function () {
            return knex("products").insert(productsData);
        })
        .then(() => {
            return knex("product_details").del();
        })
        .then(() => {
            return knex("product_details").insert(productsDetailsData);
        });
};
