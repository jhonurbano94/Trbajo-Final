// importamos la dependecias que nesisetamos 
import mongoose from "mongoose";
//crear una funcion que nos concte la base de datos 
const conexionMongo = async() => {
    await mongoose.connect(process.env.BD_URL,{})
   // control de errores con try y cath 
   try{
    console.log("Exelente conecion");
   } 
   catch(error){
    console.log("Error de conecion:", error.message)
   }
}

// tenemos qu esportar nuestra funcio para llamarla desde nuestro servidor

export default conexionMongo;