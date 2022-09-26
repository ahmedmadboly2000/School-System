// const setupDb = require('./db/db-setup');
// import { setupDb } from "./db/db-setup";
import express from "express";
import bodyParser from "body-parser";
import * as store from "./store";
import * as teacher from "./teacher";
import * as student from "./student";
import * as _class from "./class";
import knex from "./db/client_knex";
// import { createTeacher } from './teacher';
var DB = require("./db/migrations/20220901151051_init");
knex;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(express.json());

function userConnect(myapp_test: any) {
  var db: any = new DB();
  var knex = db.connect(myapp_test);

  app.post("/createUser", (req: any, res: any) => {
    store.createUser(req.body.data).then(() => res.sendStatus(200));
  });
  app.post("/login", (req: any, res: any) => {
    store
      .authenticate({
        username: req.body.username,
        password: req.body.password,
      })
      .then((success: any) => {
        if (success) {
          res.sendStatus(200);
          console.log("success login");
        } else {
          res.sendStatus(401);
          console.log("user name or passwod incorrect");
        }
      });
  });
  app.post("/teacher/createTeacher", (req: any, res: any) => {

    async function main() {
      const q = await teacher.createTeacher(req.body);

      res.json({ message: q });
    }
    main().catch((error: any) => {
      
      console.log(error);
    });
  });
  app.post("/teacher/index", (req: any, res: any) => {
    async function main() {
    const q = await teacher.teacherById(req.body);

    res.json({message: q});
  }
  main().catch((error: any) => {
    
    console.log(error);
  });
 
  });
  app.post("/teacher/delete", (req: any, res: any) => {
    async function main() {
      const q = await teacher.deleteTeacher(req.body);
      res.json({ message: q });
      
    }
    main().catch((error: any) => {
      
      console.log(error);
    });

  });
  app.post("/teacher/updateTeacher", (req: any, res: any) => {
    async function main() {
    const q = await teacher.updateTeacher( req.body)

    res.json({ message: q });
  }
  main().catch((error: any) => {
   
    console.log(error);
  });
    
  });
  app.post("/student/createStudent", (req: any, res: any) => {
    async function main() {
      const q = await student.createStudent(req.body);
      res.json({ message: q });
      
    }
    main().catch((error: any) => {
      
      console.log(error);
    });
  });
  app.post("/student/index", (req: any, res: any) => {
    async function main() {
      const q = await student.studentById(req.body);
      res.json({ message: q });
      
    }
    main().catch((error: any) => {
      
      console.log(error);
    });
  });
  app.post("/student/deleteStudent", (req: any, res: any) => {
    async function main() {
      const q = await student.deleteStudent(req.body);
      res.json({ message: q });
      
    }
    main().catch((error: any) => {
      
      console.log(error);
    });
  });
  app.post("/student/updateStudent", (req: any, res: any) => {
    async function main() {
      const q = await student.updateStudent(req.body);
      res.json({ message: q });
      
    }
    main().catch((error: any) => {
      
      console.log(error);
    });
  });
  app.post("/class/createClass", (req: any, res: any) => {
    async function main() {
      const q = await _class.createClass(req.body);
      res.json({ message: q });
      
    }
    main().catch((error: any) => {
      
      console.log(error);
    });
  });
  app.post("/class/index", (req: any, res: any) => {
    async function main() {
      const q = await _class.classById(req.body);
      res.json({ message: q });
      
    }
    main().catch((error: any) => {
      
      console.log(error);
    });
  });
  app.post("/class/deleteClass", (req: any, res: any) => {
    async function main() {
      const q = await _class.deleteClass(req.body);
      res.json({ message: q });
      
    }
    main().catch((error: any) => {
      
      console.log(error);
    });
  });
  app.post("/class/updateClass", (req: any, res: any) => {
    async function main() {
      const q = await _class.updateClass(req.body);
      res.json({ message: q });
      
    }
    main().catch((error: any) => {
      
      console.log(error);
    });
  });
  app.post("/student/allStudentInClass", (req: any, res: any) => {
    async function main() {
      const q = await student.studentsInClass(req.body);
      res.json({ message: q });
      
    }
    main().catch((error: any) => {
      
      console.log(error);
    });
  });
  app.post("/class/allClassesOfTeacher", (req: any, res: any) => {
    async function main() {
      const q = await _class.allClassesOfTeacher(req.body);
      res.json({ message: q });
      
    }
    main().catch((error: any) => {
      
      console.log(error);
    });
  });
  app.get("/teacher/allData", (req: any, res: any) => {
    async function main() {
      const q = await teacher.allData();
      res.json({ message: q });
      
    }
    main().catch((error: any) => {
      
      console.log(error);
    });
    // teacher
    //   .allData()
    //   .then((school: any) => {
    //     if (school) {
    //       res.status(200).json(school);
    //       console.log("success");
    //     }
    //   })
    //   .catch((error: any) => {
    //     res.status(401).json({ error });
    //     console.log(error);
    //   });
  });
}
userConnect("myapp_test");

app.listen(8080, () => console.log("server is running on port 8080...."));
  