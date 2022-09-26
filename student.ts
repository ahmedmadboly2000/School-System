import { log } from "console";
import { knex } from "knex"
import { Student } from "./model/student";
({
    client: 'mysql',
    connection: {
      user : 'root',
      password : null,
      database : 'myapp_test'
    }
  })

     async function createStudent( data:any){
      const row = await Student.query()
      .where('name', data.name).first()
          console.log(row,"is already exist","search")
          if (!row) {
            try {
              const row = await Student.query().insert(data)
              console.log(row,"insert")
              return {"status":"student created Successfuly"}

            } catch (error) {
              return error
              // console.log(error)
            }
            }
            return {"status":"student is already exist"}
    }
    const deleteStudent=async (data:any)=> {
      
        const row = await Student.query()
            .where('id', data.id).first()
                console.log(row,"is already exist","search")
                if (row) {
                  try {
                    const row = await Student.query().delete().where('id',data.id)
                    console.log(row,"delete")
                    // return row
                    return {"status":"student deleted Successfuly"}
    
                  } catch (error) {
                    // console.log(error)
                    return error
                  }
                  }
                  return {"status":"not found"}
        }
  
      async function studentById ( data:any){
        const row =await Student.query()
        .where('id',data.id).first()
        if(row){
          try{
            const row =await Student.query().where('id',data.id)
            console.log(row,"student");
            return row
            
          }catch(error){
            return error
          }
        }
        return{ 'status':"not found"}
    }
    const updateStudent= async ( data:any )=>{
      const row = await Student.query()
          .where('id',data.id).first()
              // console.log(row,"is already exist","search")
              if (row) {
                try {
                  const student= await Student.query().update(data).where('id',data.id)
                  console.log(student,"updated")
                  return {"status":"updated successfully"}
  
                } catch (error) {
                  console.log(error)
                }
                }
                console.log(0,"updated")
                return {"status":"not found"}
      
      }
      async function studentsInClass ( data:any){
        const row =await Student.query()
        .where('class_id',data.class_id).first()
        if(row){
          try{
            const row =await Student.query().where('class_id',data.class_id)
            console.log(row,"student");
            return row
            
          }catch(error){
            return error
          }
        }
        return{ 'status':"not found"}

  }

export {createStudent,deleteStudent,updateStudent,studentById,studentsInClass}
  
