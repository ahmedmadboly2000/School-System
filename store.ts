
import { knex } from "knex"

({
  client: 'mysql',
  connection: {
    user : 'root',
    password : null,
    database : 'myapp_test'
  }
})

// module.exports = {
 const createUser = (data: {password:string,username:string,email:string} ) => {
          return knex('user').insert({

      password : data.password,
      username : data.username,
      email : data.email
    })
  }
  const authenticate= async (data: {password:string,username:string}) =>{
    const [user] = await knex('user').where(data.username )
    if (!user)
      return { success: false, error: 'your username deos not exist' }
    return { success: data.password === user.password }
}

export {createUser,authenticate}



