

import { knex } from "knex"
import { ClassModel } from "./model/class"
import { Teacher } from "./model/teacher"
// import { teacher_class } from "./model/teacher_class"
({
    client: 'mysql',
    connection: {
      user : 'root',
      password : null,
      database : 'myapp_test'
    }
  })
  
    async function createTeacher  (data:any ) {
        const row = await Teacher.query()
        .where('name', data.name).first()
            console.log(row,"is already exist","search")
            if (!row) {
              try {
                const row = await Teacher.query().insert(data)
                console.log(row,"insert")
                return {"status":"teacher created Successfuly"}

              } catch (error) {
                return error
                // console.log(error)
              }
              }
              return {"status":"teacher is already exist"}

   
            
    }
    //deleting teacher//
    const deleteTeacher=async (data:any)=> {
    //   const row = await  Teacher.query().deleteById(data.id)
    //   console.log(row)
      const row = await Teacher.query()
          .where('id', data.id).first()
              console.log(row,"is already exist","search")
              if (row) {
                try {
                  const row = await Teacher.query().delete().where('id',data.id)
                  console.log(row,"delete")
                  // return row
                  return {"status":"teacher deleted Successfuly"}
  
                } catch (error) {
                  // console.log(error)
                  return error
                }
                }
                return {"status":"not found"}
      }

      //search on teacher
     const teacherById= async ( data:any )=> {
      const row = await Teacher.query()
      .where('id', data.id).first()
      //     console.log(data,"is already exist","search")
          if (row) {
            try {
              const teacher = await Teacher.query().where('id',data.id)
              console.log(teacher,"teacher")
              return teacher

            } catch (error) {
              console.log(error)
            }
            }
            return {"status":"not found"}
    }
   const updateTeacher= async ( data:any )=>{
    const row = await Teacher.query()
        .where('id',data.id).first()
            // console.log(row,"is already exist","search")
            if (row) {
              try {
                const teacher= await Teacher.query().update(data).where('id',data.id)
                console.log(teacher,"updated")
                return {"status":"updated successfully"}

              } catch (error) {
                console.log(error)
              }
              }
              console.log(0,"updated")
              return {"status":"not found"}
    
    }
    async function allData(){
      // const row =await Teacher.query().withGraphFetched('class')
      
      // if(row){
        try{
          // const row =await Teacher.query()
          // const row = await Teacher.query().withGraphFetched('ClassModel.student')
          // const row = await ClassModel.query().withGraphFetched('teacher')
          const row = await Teacher.query().withGraphFetched('ClassModel.[teachers,student]')
          console.log(row);
          return row
          
        }catch(error){
          console.log(error);
          
          return error
        }
      // }
      return{ 'status':"not found"}



      // const row =await Teacher.query()
      
      // if(row){
      //   try{
      //     const row =await Teacher.query()
      //     console.log(row,"student");
      //     return row
          
      //   }catch(error){
      //     return error
      //   }
      // }
      // return{ 'status':"not found"}

}
    // const allData=async ()=>{
    //   // return knex
    //   // .select("*")
    //   // .from("teacher","class")
    //   // .then(([teacher]) => {
    //   //   if (!teacher) return { success: false,error:'teacher deos not exist' }
    //   //  return { success: true,teacher }
    //   // })
      
    //   // return knex('teacher','class','student').select('*')
    //   // .then((teachers: any[])=> {
    //   //   let school=[];
    //   //     teachers.forEach(teacher => {
    //   //       return school.push(teacher);
    //   //   });
    //   //   return { success: true,school}
    //   //   })

    //   //   }
    //   // }
    //   const teachers = await knex('teacher').select('*')
    //   let school: any[] = []
    //   teachers.forEach((teacher: any) => {
    //     return school.push(teacher)
    //   })
    //   return { success: true, school }
    //   } 
    // // }
    export {createTeacher,deleteTeacher,teacherById,updateTeacher,allData}

