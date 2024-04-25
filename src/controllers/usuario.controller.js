// impotamos dependencias
import usuarioModel from "../models/usuario.model.js";



//
// ->peticiones 







// prueba final 

// logica para mostar ususario 
export const getUsuario = async(req, res) => {
    // manejo de errores con try y catach
    try{
        let usuarios = await usuarioModel.find();
        return res.send(usuarios);
    }catch(error){
        return res.json({error: "erroa al mostrar los datos" + error});
    }
}
// logica para crear ususario 
export const postUsuario = async(req, res) => {
   // manejo de errores con try y catach
   try{
    let datosUsuario = req.body;
    let nuevoUsuario = await usuarioModel.create(datosUsuario);
    return res.json(nuevoUsuario);
   }catch(error){
    return res.json({error: "error al crear usuario",
message:error.message});

   }
}
// logica para crear modificar ususario 
export const putUsuario = async(req, res) => {
    try{
let datosModificar = req.body;
let idModificar = req.params._id;
await usuarioModel.findByIdAndUpdate(idModificar,datosModificar);
return res.json({message:"usuario actualizado corectamente"});

    }catch(error){
        return res.json({error: "error al moficar usuario",
        message:error.message});
    }
}
// logica para eliminar ususario 
export const deleteUsuario = async(req, res) => {
    try{
        let idEliminar = req.params._id;
        let usuarioEliminado = await usuarioModel.findByIdAndDelete(idEliminar);

        if(usuarioEliminado){
            return res.json({message: "Usuario eliminado correctamente"});
        } else{
            return res.json({message: "Ups! no se pudo eliminar ese usuario"});
        }

    }catch(error){
        return res.json({error: "error al eliminar usuario", message:error.message});
    }
}

