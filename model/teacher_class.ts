import {ClassModel} from './class';
const { Model } = require('objection');
import { Teacher } from "./teacher";
class teacher_class extends Model {
  
  static get tableName() {
    return 'teacher_class';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['teacher_id', 'class_id'],

      properties: {
        id:{type:'integer'},
        teacher_id: { type: 'integer' },
        class_id: { type: 'integer' },
       

      }
    };
}
    static get relationMappings() {
       
        return {
          // class: {
          //   relation: Model.ManyToManyRelation,
          //   modelClass: ClassModel,
          //   join: {
          //     from: 'teacher_class.id',
             
          //     through: {
                
          //       from: 'teacher_class.teacher_id',
          //       to: 'teacher_class.class_id'
          //     },
          //     to: 'teacher.id'
          //   }
          // },
          teacher: {
            relation: Model.HasManyRelation,
            modelClass: Teacher, 
            join: {
              from: 'teacher_class.teacher_id',
              to: 'teacher.id',
            },
          }
         }
        
        };
      }


export {teacher_class}