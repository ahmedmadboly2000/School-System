import Knex from 'knex'
const  knexConfig = require('./knexfile')
import { Model } from 'objection'

// Initialize knex.
var  knex = Knex(knexConfig.development)
var knex = Knex({
    client: 'mysql',
    useNullAsDefault: true,
    connection: {
        database: 'myapp_test',
        user:     'root',
        password: "",
    }
  });
// Bind all Models to a knex instance. If you only have one database in
// your server this is all you have to do. For multi database systems, see
// the Model.bindKnex() method.
Model.knex(knex)
  

export default knex