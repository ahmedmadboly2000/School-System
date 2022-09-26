const { objection } = require('objection');
import { Model } from "objection";
class User extends Model {
  
  static get tableName() {
    return 'user';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['username', 'password'],

      properties: {
        id: { type: 'integer' },
        username: { type: 'string', minLength: 1, maxLength: 255 },
        password: { type: 'string', minLength: 1, maxLength: 255 },
        email: { type: 'string', minLength: 1, maxLength: 255 },
       

      }
    };

}}
export {User}