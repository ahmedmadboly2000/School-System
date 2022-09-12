const setupDb = require('./db/db-setup');
const express = require('express');
const bodyParser = require('body-parser');
const store = require('./store')
const teacher = require('./teacher');
const student = require('./student');
const _class = require('./class');
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
  app.post('/teacher/createTeacher', (req, res) => {
   
    teacher
      .createTeacher({
        name: req.body.name,
        subject: req.body.subject,
        class_id:req.body.class_id
      })
      .then(({success}) => {
        if (success){
            res.sendStatus(200);
            console.log("success add")
        } 
        else {
            res.sendStatus(401)
            console.log(err)

      }
    })
  })
  app.post('/teacher/index', (req, res) => {
   
    teacher
      .teacherById({
        id: req.body.id
      }
      )
      .then(({success,error,teacher}) => {
        if (success){
            
            res.status(200).json(teacher);
            console.log("success")
        } 
        else {
            res.status(401).json({error})
            console.log(error)
      }
    })
  })
  app.post('/teacher/delete', (req, res) => {
   
    teacher
      .deleteTeacher({
        id: req.body.id
      }
      )
      .then(({message}) => {
        
            res.status(200).json({message});
            console.log("success")
    })
  })
  app.post('/teacher/updateTeacher', (req, res) => {
   
    teacher
      .updateTeacher({
        id: req.body.id,
        name: req.body.name,
        subject: req.body.subject,
        class_id:req.body.class_id
      })
      .then(({success,err}) => {
        if (success){
            res.status(200).json({message:"updated successfully"});
            console.log("success update")
        } 
        else {
            res.status(401).json({message:"teacher is not found"});
            console.log(err)

      }
    })
  })
  app.post('/student/createStudent', (req, res) => {
   
    student
      .createStudent({
        name: req.body.name,
        class_id:req.body.class_id
      })
      .then(({success}) => {
        if (success){
            res.sendStatus(200);
            console.log("success add")
        } 
        else {
            res.sendStatus(401)
            console.log(err)

      }
    })
     

  })
  app.post('/student/index', (req, res) => {
   
    student
      .studentById({
        id: req.body.id
      }
      )
      .then(({success,error,student}) => {
        if (success){
            
            res.status(200).json(student);
            console.log("success")
        } 
        else {
            res.status(401).json({error})
            console.log(error)
      }
    })
  })
  app.post('/student/deleteStudent', (req, res) => {
   
    student
      .deleteStudent({
        id: req.body.id
      }
      )
      .then(({message}) => {

            res.status(200).json({message});
            console.log("success")
    })
  })
  app.post('/student/updateStudent', (req, res) => {
   
    student
      .updateStudent({
        id: req.body.id,
        name: req.body.name,
        class_id:req.body.class_id
      })
      .then(({success,err}) => {
        if (success){
            res.status(200).json({message:"updated successfully"});
            console.log("success update")
        } 
        else {
            res.status(401).json({message:"student is not found"});
            console.log(err)

      }
    })
  })
  app.post('/class/createClass', (req, res) => {
   
    _class
      .createClass({
        name: req.body.name,
        location:req.body.location,
        subject: req.body.subject,
        session_time:req.body.session_time,
        teacher_id:req.body.teacher_id
      })
      .then(({success}) => {
        if (success){
            res.sendStatus(200);
            console.log("success add")
        } 
        else {
            res.sendStatus(401)
            console.log(err)

      }
    })
  })
  app.post('/class/index', (req, res) => {
   
    _class
      .classById({
        id: req.body.id
      }
      )
      .then(({success,error,_class}) => {
        if (success){
            
            res.status(200).json(_class);
            console.log("success")
        } 
        else {
            res.status(401).json({error})
            console.log(error)
      }
    })
  })
  app.post('/class/deleteClass', (req, res) => {
   
    _class
      .deleteClass({
        id: req.body.id
      }
      )
      .then(({message}) => {
        
            res.status(200).json({message});
            console.log("success")
    })
  })
  app.post('/class/updateClass', (req, res) => {
   
    _class
      .updateClass({
        id: req.body.id,
        name: req.body.name,
        location:req.body.location,
        subject: req.body.subject,
        session_time:req.body.session_time,
        teacher_id:req.body.teacher_id
      })
      .then(({success,err}) => {
        if (success){
            res.status(200).json({message:"updated successfully"});
            console.log("success update")
        } 
        else {
            res.status(401).json({message:"class is not found"});
            console.log(err)

      }
    })
  })
  app.post('/student/allStudentInClass', (req, res) => {
   
    student
      .studentsInClass({
        class_id: req.body.class_id
      }
      )
      .then(({success,error,name}) => {
        if (success){
            
            res.status(200).json({name});
            console.log("success")
        } 
        else {
            res.status(401).json({error})
            console.log(error)
      }
    })
  })
  app.post('/class/allClassesOfTeacher', (req, res) => {
   
    _class
      .allClassesOfTeacher({
        teacher_id: req.body.teacher_id
      }
      )
      .then(({success,error,name}) => {
        if (success){
            
            res.status(200).json({name});
            console.log("success")
        } 
        else {
            res.status(401).json({error})
            console.log(error)
      }
    })
  })

app.listen(8080, () => console.log('server is running on port 8080'));