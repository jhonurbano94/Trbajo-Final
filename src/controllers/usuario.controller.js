// impotamos dependencias
import usuarioModel from "../models/usuario.model.js";



//
// ->peticiones 







// prueba final 

// logica para mostar ususario 
export const getUsuario = async(req, res) => {
    return res.send("funciona la peticion GET");
}
// logica para crear ususario 
export const postUsuario = async(req, res) => {
    return res.send("funciona la peticion POST");
}
// logica para crear modificar ususario 
export const putUsuario = async(req, res) => {
    return res.send("funciona la peticion PUT");
}
// logica para eliminar ususario 
export const deleteUsuario = async(req, res) => {
    return res.send("funciona la peticion DELETE");
}

