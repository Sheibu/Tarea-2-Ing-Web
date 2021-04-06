var formulario = document.getElementById("formulario");
var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");
var rut = document.getElementById("rut");
var correo = document.getElementById("correo");
var telefono = document.getElementById("telefono");
var descripcion = document.getElementById("descripcion");
var nivelProgr = document.getElementById("nivelProgr");
var resetBtn = document.getElementById("resetBtn");
formulario.addEventListener("submit", mostrar);
resetBtn.onclick = limpiarDatos;
function mostrar(evento) {
    evento.preventDefault();
    if (/^\d{7,8}[-][0-9kK]{1}$/.test(rut.value) == false) {
        alert("El RUT ingresado es inválido.");
        return;
    }
    if (telefono.value.length != 9) {
        alert("El número de teléfono ingresado es inválido.");
        return;
    }
    var checks = document.querySelectorAll(".check");
    var checkFlag = false;
    for (var i = 0; i < checks.length; i++) {
        console.log(checks[i].checked);
        if (checks[i].checked == true) {
            checkFlag = true;
        }
    }
    if (checkFlag == false) {
        alert("Debe seleccionar al menos un lenguaje");
        return;
    }
    if (descripcion.value.length > 300) {
        alert("La descripción no debe superar los 300 caracteres.");
        return;
    }
    document.getElementById("mensaje").innerHTML = "Hemos recibido sus datos, pronto nos estaremos comunicando con usted.";
    document.getElementById("mensaje").style.color = "red";
    document.getElementById("mensaje").style.display = "block";
    formulario.style.display = "none";
}
function limpiarDatos(evento) {
    nombre.value = defaultStatus;
    apellidos.value = defaultStatus;
    rut.value = defaultStatus;
    correo.value = defaultStatus;
    telefono.value = defaultStatus;
    descripcion.value = defaultStatus;
    nivelProgr.value = defaultStatus;
    var checks = document.querySelectorAll(".check");
    var radios = document.querySelectorAll(".radio");
    for (var i = 0; i < checks.length; i++) {
        checks[i].checked = defaultStatus;
    }
    for (var i = 0; i < radios.length; i++) {
        radios[i].checked = defaultStatus;
    }
}
