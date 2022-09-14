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
      return knex('student')
      .where('name', name)
      .then(([row]) => {
          if (!row) {
            return knex('student').insert({
                    name,
                    class_id
              }).then(()=>{
                  return { success: true,message:"student created successfully" }
              })
           }else{
            return{success: false,error:'student is exist' }
           }
          })
    },
    deleteStudent({id}) {
      return knex('student')
      .where('id', id)
      .then(([row]) => {
          if (!row) {
              return { success: false,error:'student deos not exist' }
           }else{
            return knex("student")
           .del()
           .where({
             id
         }).then((data)=>{
               console.log(data);
               return {success:true, message:"student deleted successfully"}
         });}
       
      })
      },
      studentById ({ id  }) {
        
        return knex('student').where({ id })
        .then(([student]) => {
          if (!student) return { success: false,error:'student deos not exist' }
         return { success: true,student }
        })
    },
    updateStudent ({ id,name,class_id }) {
    return knex('student')
      .where('id', id)
      .then(([row]) => {
          if (!row) {
              return { success: false,error:'student deos not exist' }
           }
    return knex('student')
      .where('id', row.id)
      .update(
        {
          name,
        class_id
       }
        ).then(()=>{
          return { success: true }
        })
  });
  },
  studentsInClass ({ class_id  }) {
    return knex('student')
    .where('class_id', class_id)
    .then(([row]) => {
      if (!row) {
        return { success: false,error:'student deos not exist' }
      }
      return knex('student')
      .select()
      .where('class_id', row.class_id)
      .then((students)=> {
        let name=[];
          students.forEach(student => {
          return name.push(student.name)
        });;
        return { success: true,name }
      });
    })

  }
}
  
