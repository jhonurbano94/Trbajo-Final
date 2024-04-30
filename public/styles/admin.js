///verificar conexion con html
console.log("holaaaa soy administrador");


// funcion para obtener los datos de mi base de datos 
const mostrarUsuarios = async () => {
    try{
const respuesta = await fetch("http://localhost:9000/api/obtenerUsuario");
const usuarios = await respuesta.json();
console.log(usuarios);
mostrartTabla(usuarios);
    }catch(error){
        console.error("error al ontener los usuarios", error);
    }
}

function mostrartTabla(usuarios){
const tabla = document.getElementById("miTabla");
tabla.innerHTML = "";

usuarios.forEach(usuario => {
    //por cada usuario me va a crear una fila en la tabla

    tabla.innerHTML += `
    <tr>
        <th scope="row">1</th>
        <td>${usuario.nombre}</td>
        <td>${usuario.apellido}</td>
        <td>${usuario.correo}</td>
        <td><button type="button" class="btn btn-danger"
          id="${usuario._id}" onclick="eliminarUsuario(event)" 
          ><i class="bi bi-trash"></i>Eliminar</button>

        </td>
      </tr>
    `
});

}
mostrarUsuarios();

//funcion para eliminar usuario por id
function eliminarUsuario(event){
    console.log("Eliminar");
    const idUsuarioEliminar = event.target.id;
    console.log("idUsuarioEliminar");

fetch(`http://localhost:9000/api/eliminarUsuario/${
    idUsuarioEliminar}`,{method:"DELETE"}).then(
        response => {
if(!response.ok){
console.error("error! no se pudo eliminar usuario")
} else{
alert("usuario eliminado correctamente");
mostrarUsuarios();
}

        }).catch(error => {
        console.log("Error al eliminar usuario", error);
        });

}


