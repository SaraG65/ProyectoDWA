// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
})()
function validarContacto() {
    if (document.getElementById("nombre").value == "" || document.getElementById("apellido").value == "" || document.getElementById("correo").value == ""||document.getElementById("slcNivel").value ==0 ) {
        alert("Debes completar los campos"); 
    } else {
    alert("Datos enviados con exito!");
    }
}
function validar() {
  if (document.getElementById("usuario").value == "" || document.getElementById("clave").value == "") {
      alert("Debes completar los campos"); 
  } else {
  alert("Datos enviados con exito!");
  }
}