/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex,promise) {
    return knex.schema
    .createTable('user', function (t) {
        t.increments('id').primary()
        t.string('username').notNullable()
        t.string('password').notNullable()
        t.string('email').notNullable()
        t.timestamps(false, true)
    })
    .createTable('teacher', function (table) {
        table.increments('id').primary();
        table.string('name');
        table.string('subject');
        table.integer('class_id').unsigned()
        table.foreign('class_id')
        .references('class.id');
        table.timestamps(true, true);
      })
      .createTable('student', function (table) {
        table.increments('id').primary();
        table.string('name');
        table.integer('class_id').unsigned()
        table.foreign('class_id')
          .references('class.id');
  
        table.timestamps(true, true);
      })
      .createTable('class', function (table) {
        table.increments('id').primary();
        table.string('name');
        table.string('location');
        table.string('subject');
        table.string('session_time');
        table.timestamps(true, true);
      })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex,Promise) {
    return knex.schema
    .dropTableIfExists('user')
    .dropTableIfExists('teacher')
    .dropTableIfExists('student')
    .dropTableIfExists('class')
  
};
