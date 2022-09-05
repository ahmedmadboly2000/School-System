const knex = require('knex')({
  client: 'mysql',
  connection: {
    user : 'root',
    password : null,
    database : 'myapp_test'
  }
})

module.exports = {
  createUser ({ username,email,password }) {
          return knex('user').insert({

      password,
      username,
      email
    })
  },
  authenticate ({ username, password }) {
      return knex('user').where({ username })
      .then(([user]) => {
        if (!user) return { success: false,error:'your username deos not exist' }
       return { success: password === user.password }
      })
  }
}

