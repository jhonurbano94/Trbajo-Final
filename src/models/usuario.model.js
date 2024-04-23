// imporatr las independencias 
import mongoose from "mongoose";

const schema = mongoose.Schema;

// nos creamos nuestro esquema de datos lo que vamos a guardar en nuestra base de datos

const usuarioSchema = new schema({
    nombre:{
        type: String,
        require: true
    }, 
    apellido:{
        type:String,
        require: true

    }, 
    correo:{
        type:String,
        require: true
    },
    contrasena:{
        type:String,
        require: true
    }
});

// yo quiero enviar la pantilla a la base de datos 
// crear modelo 

const usuarioModel = mongoose.model("usuario",usuarioSchema);

// exportamos nuestro modelo

export default usuarioModel;