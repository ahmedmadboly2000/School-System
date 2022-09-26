import {Teacher} from './teacher';
import { Student } from "./student";
import {teacher_class  } from "./teacher_class";
const { Model } = require('objection');

class ClassModel extends Model {
  
  static get tableName() {
    return 'class';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name','location','subject','session_time'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        location: { type: 'string', minLength: 1, maxLength: 255 },
        subject: { type: 'string', minLength: 1, maxLength: 255 },
        session_time: { type: 'integer' },
        teacher_id: { type: 'integer' },
       

      }
    };
}


static get relationMappings() {
    return {
      teacher: {
        relation: Model.HasManyRelation,
        modelClass: Teacher, 
        join: {
          from: 'class.teacher_id',
          to: 'teacher.id',
        },
      },
      student: {
        relation: Model.HasManyRelation,
        modelClass: Student,
        join: {
          from: 'class.id',
          to: 'student.class_id',
        },
      },
       teachers: {
            relation: Model.ManyToManyRelation,
            modelClass: Teacher,
            join: {
              from: 'class.id',
             
              through: {
                
                from: 'teacher_class.teacher_id',
                to: 'teacher_class.class_id'
              },
              to: 'teacher.id'
            }
          },
    

    teacher_class: {
      relation: Model.HasManyRelation,
      modelClass: teacher_class,
      join: {
        from: 'class.teacher_id',
        to: 'teacher_class.class_id',
      },
    }
  };
}}


export {ClassModel}