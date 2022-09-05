const setupDb = require('./db/db-setup');
const express = require('express');
const bodyParser = require('body-parser');
const store = require('./store')
setupDb();
const app = express();

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(express.json());
app.post('/createUser', (req, res) => {
    store
      .createUser({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password

      })
      .then(() => res.sendStatus(200))
  })
  app.post('/login', (req, res) => {
    store
      .authenticate({
        username: req.body.username,
        password: req.body.password
      })
      .then(({ success }) => {
        if (success){
            res.sendStatus(200);
            console.log("success login")
        } 
        else {
            res.sendStatus(401)
            console.log("user name or passwod incorrect")

      }})
  })

app.listen(8080, () => console.log('server is running on port 8080'));