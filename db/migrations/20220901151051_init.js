/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex,promise) {
    return knex.schema.createTable('user', function (t) {
        t.increments('id').primary()
        t.string('username').notNullable()
        t.string('password').notNullable()
        t.string('email').notNullable()
        t.timestamps(false, true)
    })
    
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex,Promise) {
    return knex.schema.dropTableIfExists('user')
  
};
