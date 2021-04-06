let formulario = document.getElementById("formulario");
let nombre:any = document.getElementById("nombre");
let apellidos:any = document.getElementById("apellidos");
let rut:any = document.getElementById("rut");
let correo:any = document.getElementById("correo");
let telefono:any = document.getElementById("telefono");
let descripcion:any = document.getElementById("descripcion");
let nivelProgr:any = document.getElementById("nivelProgr");

let resetBtn:any = document.getElementById("resetBtn");

formulario.addEventListener("submit", mostrar);
resetBtn.onclick = limpiarDatos;

function mostrar(evento){
    evento.preventDefault();
    
    if(/^\d{7,8}[-][0-9kK]{1}$/.test(rut.value)==false){
        alert("El RUT ingresado es inválido.");
        return;
    }
    if(telefono.value.length!=9){
        alert("El número de teléfono ingresado es inválido.");
        return;
    }
    let checks:any = document.querySelectorAll(".check");
    let checkFlag = false;
    for(let i=0;i<checks.length;i++){
        console.log(checks[i].checked);
        if(checks[i].checked==true){
            checkFlag = true;
        }
    }
    if(checkFlag==false){
        alert("Debe seleccionar al menos un lenguaje");
        return;
    }

    if(descripcion.value.length>300){
        alert("La descripción no debe superar los 300 caracteres.");
        return;
    }
    document.getElementById("mensaje").innerHTML="Hemos recibido sus datos, pronto nos estaremos comunicando con usted.";
    document.getElementById("mensaje").style.color="red";
    document.getElementById("mensaje").style.display="block";
    formulario.style.display = "none"; 
}

function limpiarDatos(evento){
    nombre.value=defaultStatus;
    apellidos.value=defaultStatus;
    rut.value=defaultStatus;
    correo.value=defaultStatus;
    telefono.value=defaultStatus;
    descripcion.value=defaultStatus;
    nivelProgr.value=defaultStatus;
    let checks:any = document.querySelectorAll(".check");
    let radios:any = document.querySelectorAll(".radio");
    for(let i=0;i<checks.length;i++){
        checks[i].checked = defaultStatus;
    }
    for(let i=0;i<radios.length;i++){
        radios[i].checked = defaultStatus;
    }
}
