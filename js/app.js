const submit = document.querySelector('#submit');

const savePaciente = async () => {

  let nombre = document.getElementById("nombre").value
  let rut = document.getElementById("rut").value
  let telefono = document.getElementById("telefono").value
  let direccion = document.getElementById("direccion").value
  let email = document.getElementById("email").value
  document.getElementById("myForm").reset();

  let response = await fetch('http://localhost:8080/paciente/getPacientes');
  console.log(response);

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

  // $('#exampleModalCenter').modal('toggle'); //or  $('#IDModal').modal('hide');

  // $('#exampleModal').modal('toggle'); //or  $('#IDModal').modal('hide');

  // return false;

}

submit.addEventListener('click', savePaciente);