//1. importar las dependecias que vamos hacer 

import express from "express"
import path from "path"
import dotenv, { config } from "dotenv"
import conexionMongo from "./src/config/baseDatos.js";
import usuarioRouter from "./src/routes/usuario.route.js";

//2. configurar
 const app = express ();
 const puerto = 9000;
//2.1 configurar la variable entorno 
dotenv.config();


// 2.2configurar conecion base de datos 

conexionMongo();

 // 3. establecer la conexion con nuetro foms
 const rutaPublica = path.join(process.cwd(),"public");
 app.use(express.static(rutaPublica));
 app.use(express.json());
app.use("/api",usuarioRouter);

 //especificamos que vamos abseder en index2.html 
app.get("/",(req,res)=>{
    res.sendFile(path.join(rutaPublica,"index2.html"))
});


//4. inicializamos el servidor 
app.listen(puerto, () => {
    console.log(`El servidor está escuchando en http://localhost:${puerto}`); 
});
