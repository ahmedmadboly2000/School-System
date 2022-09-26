// Update with your config settings.

/**
 */
 

//  var dotenv = require('dotenv');
//  dotenv.config();
//  require('dotenv').config({path: 'index/.env'});

module.exports = {

  development:  {
    client: 'mysql',
    connection: {
      database: 'myapp_test',
      user:     'root',
      password: '',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    },
}
};
