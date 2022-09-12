const knex = require('knex')({
    client: 'mysql',
    connection: {
      user : 'root',
      password : null,
      database : 'myapp_test'
    }
  })
  module.exports = {
    createClass ({ name,location,subject,session_time,teacher_id }) {
        return knex('class').insert({
          name,
          location,
          subject,
          session_time,
          teacher_id
    }).then(()=>{
        return { success: true }
    })
    },
    deleteClass({id}) {
         return knex("class")
          .del()
          .where({
            id
        }).then((data)=>{
              console.log(data);
              return { message:"class deleted successfully"}
        });
      
      },
      classById ({ id  }) {
        
        return knex('class').where({ id })
        .then(([_class]) => {
          if (!_class) return { success: false,error:'class deos not exist' }
         return { success: true,_class }
        })
    },
    updateClass ({ id,name,location,subject,session_time,teacher_id }) {
      return knex('class')
        .where('id', id)
        .then(([row]) => {
            if (!row) {
                return { success: false,error:'class deos not exist' }
             }
      return knex('class')
        .where('id', row.id)
        .update(
          {
            name,
            location,
            subject,
            session_time,
            teacher_id
         }
          ).then(()=>{
            return { success: true }
          })
    });
    },
    allClassesOfTeacher ({ teacher_id  }) {
      return knex('class')
      .where('teacher_id', teacher_id)
      .then(([row]) => {
        if (!row) {
          return { success: false,error:'class deos not exist' }
        }
        return knex('class')
        .select()
        .where('teacher_id', row.teacher_id)
        .then((classes)=> {
          let name=[];
            classes.forEach(_class => {
            return name.push(_class.name)
          });;
          return { success: true,name }
        });
      })
    } 
  }
