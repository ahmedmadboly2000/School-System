
import { knex } from "knex"
import { ClassModel } from "./model/class";
// const knex = require('knex')
({
    client: 'mysql',
    connection: {
      user : 'root',
      password : null,
      database : 'myapp_test'
    }
  })
  async function createClass (data:any ) {
    const row = await ClassModel.query()
    .where('name', data.name).first()
        console.log(row,"is already exist","search")
        if (!row) {
          try {
            const row = await ClassModel.query().insert(data)
            console.log(row,"insert")
            return {"status":"class created Successfuly"}

          } catch (error) {
            return error
            // console.log(error)
          }
          }
          return {"status":"class is already exist"}


        
}
//deleting teacher//
const deleteClass=async (data:any)=> {
//   const row = await  Teacher.query().deleteById(data.id)
//   console.log(row)
  const row = await ClassModel.query()
      .where('id', data.id).first()
          console.log(row,"is already exist","search")
          if (row) {
            try {
              const row = await ClassModel.query().delete().where('id',data.id)
              console.log(row,"delete")
              // return row
              return {"status":"class deleted Successfuly"}

            } catch (error) {
              // console.log(error)
              return {error:"can not delete this class as it has students"}
            }
            }
            return {"status":"not found"}
  }

  //search on teacher
 const classById= async ( data:any )=> {
  const row = await ClassModel.query()
  .where('id', data.id).first()
  //     console.log(data,"is already exist","search")
      if (row) {
        try {
          const _class = await ClassModel.query().where('id',data.id)
          console.log(_class,"class")
          return _class

        } catch (error) {
          console.log(error)
        }
        }
        return {"status":"not found"}
}
const updateClass= async ( data:any )=>{
const row = await ClassModel.query()
    .where('id',data.id).first()
        // console.log(row,"is already exist","search")
        if (row) {
          try {
            const _class= await ClassModel.query().update(data).where('id',data.id)
            console.log(_class,"updated")
            return {"status":"updated successfully"}

          } catch (error) {
            console.log(error)
          }
          }
          console.log(0,"updated")
          return {"status":"not found"}
        }
        async function allClassesOfTeacher ( data:any){
          const row =await ClassModel.query()
          .where('teacher_id',data.teacher_id).first()
          if(row){
            try{
              const row =await ClassModel.query().where('teacher_id',data.teacher_id)
      //         let name: any[] = []
      // row.forEach((row: { name: any} ) => {
      //   return name.push(row.name)
      // })
      // return name
              console.log(row,"classes");
              return row
              
            }catch(error){
              return error
            }
          }
          return{ 'status':"not found"}
  
    }
    // const allClassesOfTeacher= async ( teacher_id:any) =>{
    //   const [row] = await knex('class')
    //     .where('teacher_id', teacher_id)
    //   if (!row) {
    //     return { success: false, error: 'class deos not exist' }
    //   }
    //   const classes = await knex('class')
    //     .select()
    //     .where('teacher_id', row.teacher_id)
    //   let name: any[] = []
    //   classes.forEach((_class: { name: any} ) => {
    //     return name.push(_class.name)
    //   })
      
    //   return { success: true, name }
    // }
    export {createClass,deleteClass,updateClass,classById,allClassesOfTeacher}
  
