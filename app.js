//1. importar las dependecias que vamos hacer 

import express from "express"
import path from "path"
import dotenv from "dotenv"
//2. configurar
 const app = express ();
 const puerto = 9000;

 // 3. 









//4. inicializamos el servidor 
app.listen(puerto, () => {
    console.log(`El servidor está escuchando en http://localhost:${puerto}`); 
});
