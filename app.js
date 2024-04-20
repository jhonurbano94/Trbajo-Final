//1. importar las dependecias que vamos hacer 

import express from "express"
import path from "path"
import dotenv from "dotenv"
//2. configurar
 const app = express ();
 const puerto = 9000;

 // 3. establecer la conexion con nuetro foms
 const rutaPublica = path.join(process.cwd(),"public");
 app.use(express.static(rutaPublica));
 app.use(express.json());
 //especificamos que vamos abseder en index2.html 
app.get("/",(req,res)=>{
    res.sendFile(path.join(rutaPublica,"index2.html"))
});


//4. inicializamos el servidor 
app.listen(puerto, () => {
    console.log(`El servidor está escuchando en http://localhost:${puerto}`); 
});
