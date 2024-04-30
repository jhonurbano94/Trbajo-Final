// verificar conexion con html
console.log("holaaaaa, soy ingreso")

// crear mi funcion 
const iniciarSesion = async () => {
    // 1. obtener los valores ingresados por el usuario 
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contransena").value;
console.log(correo, contrasena);

try { 
    // 2.realizar la peticion Get a nuestra base de datos 
const respuesta = await fetch("http://localhost:9000/api/obtenerUsuario");
const usuarios = await respuesta.json();
console.log(usuarios);

if(esUsuarioRegistrado){
    // verificamos si hay admin 
    const correoAdmin = "mariagomez@gmail.com";
    if(esUsuarioRegistrado.correo == correoAdmin){
        alert("hola administrador");
        window.location.href = "./admin.html"
}else{
    alert("Ingreso exitoso");
    window.location.href = "./index2.html"
}


}else("correo o contraseña incorrecta. usuario no encontrado! vuelve a intentarlo o registrate");
}catch(error){
    console.error("error al verificar inicio de sesion:", error);
}

//3. verificar si se encontro ususario con el conrreo y la contaseña
const esUsuarioRegistrado = usuarios.find(usuario => usuario.correo == correo && usuario.contrasena == contrasena);


}