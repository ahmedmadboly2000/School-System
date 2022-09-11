const knex = require('knex')({
    client: 'mysql',
    connection: {
      user : 'root',
      password : null,
      database : 'myapp_test'
    }
  })
  module.exports = {
    createClass ({ name,location,subject,session_time }) {
        return knex('class').insert({
          name,
          location,
          subject,
          session_time
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
    }
  }
