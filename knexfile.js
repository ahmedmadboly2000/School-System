// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 
 const { knexSnakeCaseMappers } = require('objection');
 var dotenv = require('dotenv');
 dotenv.config();
 require('dotenv').config({path: 'index/.env'});

module.exports = {

  development:  {
    client: 'mysql',
    connection: {
      database: 'myapp_test',
      user:     'root',
      password: null,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds',
    },
    ...knexSnakeCaseMappers(),
}
};
