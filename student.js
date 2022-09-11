const knex = require('knex')({
    client: 'mysql',
    connection: {
      user : 'root',
      password : null,
      database : 'myapp_test'
    }
  })
  module.exports = {
    createStudent ({ name,class_id }) {
        return knex('student').insert({
          name,
          class_id
    }).then(()=>{
        return { success: true }
    })
    },
    deleteStudent({id}) {
         return knex("student")
          .del()
          .where({
            id
        }).then((data)=>{
              console.log(data);
              return { message:"student deleted successfully"}
        });
      
      },
      studentById ({ id  }) {
        
        return knex('student').where({ id })
        .then(([student]) => {
          if (!student) return { success: false,error:'student deos not exist' }
         return { success: true,student }
        })
    }
  }
