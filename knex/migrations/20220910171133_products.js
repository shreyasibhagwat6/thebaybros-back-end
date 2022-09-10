/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("products", (table) => {
        table.increments("id").primary();
        table.string("product_name", 400).notNullable();
        table.string("product_image", 500).notNullable();
        table.string("product_brand", 400).notNullable();
        table.integer("price").notNullable();
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("products");
};
