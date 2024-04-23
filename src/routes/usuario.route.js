// importamos dependencias 

import express from "express";
import { getUsuario, postUsuario, putUsuario, deleteUsuario } from "../controllers/usuario.controller.js";


// definir una variable para nuestras rutas 
const usuarioRouter = express.Router();


// definir las rutas especificas 
// ruta para obtener usuario
usuarioRouter.get("/obtenerUsuario",getUsuario);
// ruta crear ususario 
usuarioRouter.post("/crearUsuario",postUsuario);
// ruta para modificar usuario por su ID indentifador unico
usuarioRouter.put("/modificarUsuario/:_id",putUsuario);
// ruta para eliminar usuarios por su id
usuarioRouter.delete("/elimnarUsuario/:_id",deleteUsuario);

// esportamos las rutas 
export default usuarioRouter;