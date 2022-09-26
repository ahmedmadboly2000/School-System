import { Model } from "objection";
import { ClassModel } from "./class";
import { teacher_class } from "./teacher_class";
 class Teacher extends Model {
  
  static get tableName() {
    return 'teacher';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'subject'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255},
        subject: { type: 'string', minLength: 1, maxLength: 255 },
        class_id: { type: 'integer' },
       

      }
    };
}
    static get relationMappings() {
        return {
          ClassModel: {
              relation: Model.HasManyRelation,
              modelClass: ClassModel,
              join: {
                from: 'teacher.id',
                to: 'class.teacher_id',
              },
            },
          teacher_class: {
            relation: Model.HasManyRelation,
            modelClass: teacher_class,
            join: {
              from: 'teacher.id',
              to: 'teacher_class.teacher_id',
            },
          },
         
          }
        };
      }

export {Teacher}

