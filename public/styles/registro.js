// 1 . verificar conexion con html 
console. log("holaaaa soy registro");


//2. crear mi funcion para registro 

const registarUsuario = async () => {
    //2.1 obtener los datos de mi formulario
    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("apellidos").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;
console.log(nombres, apellidos, correo, contrasena);

// crear un objeto con los datos del ususario
const datosUsuario = {
    nombres,
    apellidos,
    correo,
    contrasena
}
console.log(datosUsuario);

//2.3 hacer la peticion post para crear usuario en nuestra base de datos 
try{
    // aca estamos creando el usuario en la base de datos
    const respuesta = await fetch("http://localhost:9000/api/crearUsuario",
{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(datosUsuario)
}
);
const nuevoUsuario = await respuesta.json();
console.log("usuario creado exitosamente", nuevoUsuario);

// condicional para redireccionar a ingreso.html
if(nuevoUsuario){
    alert("Registro exitos");
    window.location.href = "./ingreso.html"
}else{
    alert("Error de registro, inténtelo nuevamente")
}

}catch(error){
    console.error("eroor al registar usuario", error);
}
}