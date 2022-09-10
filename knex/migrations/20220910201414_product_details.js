/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("product_details", (table) => {
        table.increments("id").primary();
        table.string("product_name", 400).notNullable();
        table.string("product_image", 500).notNullable();
        table.string("product_image1", 500).notNullable();
        table.string("product_brand", 400).notNullable();
        table.integer("price").notNullable();
        table.string("product_details", 8000).notNullable();
        table.string("product_code", 100).notNullable();
        table
            .integer("products_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("products")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("product_details");
};
