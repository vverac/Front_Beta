$(document).ready(function () {
  cargarUsuarios();
});

const submit = document.querySelector('#submit');

const savePaciente = async () => {

  let nombre = document.getElementById("nombre").value
  let rut = document.getElementById("rut").value
  let telefono = document.getElementById("telefono").value
  let direccion = document.getElementById("direccion").value
  let email = document.getElementById("email").value
  document.getElementById("myForm").reset();

  let response2 = await fetch('http://localhost:8080/paciente/save', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nombre: nombre,
      rut: rut,
      telefono: telefono,
      direccion: direccion,
      email: email
    })
  })
  console.log(response2);
}
submit.addEventListener('click', savePaciente);



async function cargarUsuarios() {
  const request = await fetch('http://localhost:8080/paciente/getPacientes', {
    method: "GET",
    header: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
  const usuarios = await request.json();

  let listadoHtml = ''
  for (let usuario of usuarios) {
    // let botonEliminar = "<a href=\"#\" onclick='eliminarUsuario(" + usuario.id + ")' class=\"btn btn-danger btn-circle btn-sm\"><i class=\"fas fa-trash\"></i></a>";


    let usuarioHtml = '  <tr><td>' + usuario.nombre + '</td><td>' + usuario.rut + '</td><td>'
      + usuario.direccion + '</td><td>' + usuario.telefono + '</td><td>' + usuario.email + '</td></tr>'

    listadoHtml += usuarioHtml
  }
  document.querySelector("#usuarios tbody").outerHTML = listadoHtml;
}


// async function eliminarUsuario(id) {
//   if (!confirm("¿Desea eliminar este usuario?")) {
//     return;
//   }
//   const request = await fetch('http://localhost:8080/paciente/getPacientes' + id, {
//     method: "DELETE",
//     //indica que el contenido es json
//     header: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     }
//   })
//   location.reload();
// }