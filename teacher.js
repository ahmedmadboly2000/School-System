const knex = require('knex')({
    client: 'mysql',
    connection: {
      user : 'root',
      password : null,
      database : 'myapp_test'
    }
  })
  module.exports = {
    createTeacher ({ name,subject,class_id }) {
        return knex('teacher').insert({
          name,
          subject,
          class_id
    }).then(()=>{
        return { success: true }
    })
    },
    deleteTeacher({id}) {
         return knex("teacher")
          .del()
          .where({
            id
        }).then((data)=>{
              console.log(data);
              return { message:"teacher deleted successfully"}
        });
      
      },
      teacherById ({ id  }) {
        
        return knex('teacher').where({ id })
        .then(([teacher]) => {
          if (!teacher) return { success: false,error:'teacher deos not exist' }
         return { success: true,teacher }
        })
    },
    updateTeacher ({ id,name,subject,class_id }) {
      return knex('teacher')
        .where('id', id)
        .then(([row]) => {
            if (!row) {
                return { success: false,error:'teacher deos not exist' }
             }
      return knex('teacher')
        .where('id', row.id)
        .update(
          {
            name,
            subject,
            class_id
         }
          ).then(()=>{
            return { success: true }
          })
    });
    } 
}
