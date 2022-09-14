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
        return knex('teacher')
        .where('name', name)
        .then(([row]) => {
            if (!row) {
              return knex('teacher').insert({
                      name,
                      subject,
                      class_id
                }).then(()=>{
                    return { success: true,message:"teacher created successfully" }
                })
             }else{
              return{success: false,error:'teacher is exist' }
             }
            })
    },
    deleteTeacher({id}) {
      return knex('teacher')
      .where('id', id)
      .then(([row]) => {
          if (!row) {
              return { success: false,error:'teacher deos not exist' }
           }
         return knex("teacher")
          .del()
          .where({
            id
        }).then((data)=>{
              console.log(data);
              return { success: true,message:"teacher deleted successfully"}
        });
      })
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
