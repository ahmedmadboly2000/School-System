/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 function DB(){

}


DB.prototype.connect = function (db:any){   
    return require('knex')({
        
              client: 'mysql',
              connection: {
                database: 'myapp_test',
                user:     'root',
                password: null,
        }
    });
};

module.exports = DB;
exports.up = function(knex:any,promise:any):any {
    return knex.schema
    .createTable('user', function (t:any) {
        t.increments('id').primary()
        t.string('username').notNullable()
        t.string('password').notNullable()
        t.string('email').notNullable()
        t.timestamps(false, true)
    })
    .createTable('teacher', function (table:any) {
        table.increments('id').primary();
        table.string('name');
        table.string('subject');
        table.integer('class_id').unsigned()
        table.foreign('class_id')
        .references('class.id');
        table.timestamps(true, true);
      })
      .createTable('student', function (table:any) {
        table.increments('id').primary();
        table.string('name');
        table.integer('class_id').unsigned()
        table.foreign('class_id')
          .references('class.id');
        table.timestamps(true, true);
      })
      .createTable('class', function (table:any) {
        table.increments('id').primary();
        table.string('name');
        table.string('location');
        table.string('subject');
        table.string('session_time');
        table.integer('teacher.id').unsigned()
        table.foreign('teacher.id')
        .references('teacher.id');
        table.timestamps(true, true);
      })
      .createTable('teacher_class', function (table:any) {
        table.increments('id').primary(),
        table.integer('teacher_id').unsigned()
        table.foreign('teacher_id')
          .references('teacher.id');
        table.integer('class_id').unsigned()
        table.foreign('class_id')
          .references('class.id');
        table.timestamps(true, true);
      })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex:any,Promise:any):any {
    return knex.schema
    .dropTableIfExists('user')
    .dropTableIfExists('teacher')
    .dropTableIfExists('student')
    .dropTableIfExists('class')
  
};
