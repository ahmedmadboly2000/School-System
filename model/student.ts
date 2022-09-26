const { Model } = require('objection');

class Student extends Model {
  
    static get tableName() {
      return 'student';
    }
    static get jsonSchema() {
      return {
        type: 'object',
        required: ['name'],
  
        properties: {
          id: { type: 'integer' },
          name: { type: 'string', minLength: 1, maxLength: 255 },
          class_id: { type: 'integer' },
         
  
        }
      };
  }
  static get relationMappings() {
    const ClassModel= require('./class');
    return {
      class: {
        relation: Model.BelongsToOneRelation,
        modelClass: ClassModel,
        join: {
          from: 'student.class_id',
          to: 'class.id',
        },
      },
    };
  }
}
  export {Student}