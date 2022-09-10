/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("user", (table) => {
        table.increments("id").primary();
        table.string("name", 100).notNullable();
        table.string("email", 50).notNullable();
        table.string("password", 600).notNullable();
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("user");
};
