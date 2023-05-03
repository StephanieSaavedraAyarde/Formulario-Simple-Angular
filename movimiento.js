const cancelar = document.querySelector(".btn-cancelar");
const movPag = document.querySelector(".movPag");
const btn_adelante2 = document.querySelector(".sigPag");

const btn_atras1 = document.querySelector(".volver-pag1");
const btn_adelante3 = document.querySelector(".adelante-pag3");
const btn_atras2 = document.querySelector(".volver-pag2");
const btn_adelante4 = document.querySelector(".adelante-pag4");
const btn_atras3 = document.querySelector(".volver-pag3");
const btn_final = document.querySelector(".Fin");

const progressText = document.querySelectorAll(".paso p");
const progressCheck = document.querySelectorAll(".paso .check");
const num = document.querySelectorAll(".paso .num");

//GUARDAR DATOS.
var newUser="";

let max = 4;
let cont = 1;

cancelar.addEventListener("click", function(e){
  e.preventDefault();
  
  Swal.fire({
    title: '¿Estás seguro de querer salir?',
    text: "Se perderán los datos que ingreso al formulario",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#0E2C48',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, deseo salir',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.value) {
      location.href="inicio.html"
    }
  })
});

btn_adelante2.addEventListener("click", function(e){
  
  e.preventDefault();
  var nombres = document.getElementById("nombres").value;
  var apellido1 = document.getElementById("apellido1").value;
  var apellido2 = document.getElementById("apellido2").value;
  var ci = document.getElementById("ci").value;

  if ( nombres=="" && apellido1=="" && apellido2=="" && ci==""){
    document.getElementById("nombres-error").innerHTML = "* Este campo no puede quedar vacío."
    document.getElementById("nombres").style.borderColor="#DA2A33"
    document.getElementById("apellido1-error").innerHTML = "* Este campo no puede quedar vacío."
    document.getElementById("apellido1").style.borderColor="#DA2A33"
    document.getElementById("apellido2-error").innerHTML = "* Este campo no puede quedar vacío."
    document.getElementById("apellido2").style.borderColor="#DA2A33"
    document.getElementById("ci-error").innerHTML = "* Este campo no puede quedar vacío."
    document.getElementById("ci").style.borderColor="#DA2A33"
    
  }else if ( (nombres=="" || apellido1=="" || apellido2=="")){
    
    if ( nombres=="" ){
      document.getElementById("nombres-error").innerHTML = "* Este campo no puede quedar vacío."
      document.getElementById("nombres").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("nombres-error").innerHTML = ""
      document.getElementById("nombres").style.borderColor="lightgrey"      
    }

    if ( apellido1=="" ){
      document.getElementById("apellido1-error").innerHTML = "* Este campo no puede quedar vacío."
      document.getElementById("apellido1").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("apellido1-error").innerHTML = ""
      document.getElementById("apellido1").style.borderColor="lightgrey"      
    }

    if ( apellido2=="" ){
      document.getElementById("apellido2-error").innerHTML = "* Este campo no puede quedar vacío."
      document.getElementById("apellido2").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("apellido2-error").innerHTML = ""
      document.getElementById("apellido2").style.borderColor="lightgrey"      
    }

    if ( ci=="" ){
      document.getElementById("ci-error").innerHTML = "* Este campo no puede quedar vacío."
      document.getElementById("ci").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("ci-error").innerHTML = ""
      document.getElementById("ci").style.borderColor="lightgrey"      
    }
    
  }else {

    document.getElementById("nombres-error").innerHTML = ""
    document.getElementById("nombres").style.borderColor="lightgrey"
    document.getElementById("apellido1-error").innerHTML = ""
    document.getElementById("apellido1").style.borderColor="lightgrey"
    document.getElementById("apellido2-error").innerHTML = ""
    document.getElementById("apellido2").style.borderColor="lightgrey"
    document.getElementById("ci-error").innerHTML = ""
    document.getElementById("ci").style.borderColor="lightgrey"

    movPag.style.marginLeft = "-25%";
    num[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    cont += 1;

    var aux = nombres + ", " + apellido1 + " " +apellido2+ " " +ci;
    newUser = aux.toUpperCase();

  
  }

});

btn_adelante3.addEventListener("click", function(e){

  e.preventDefault();
  
  var sintomas = document.getElementById("sintomas").value;
  var peso = document.getElementById("peso").value;
  var altura = document.getElementById("altura").value;
  var masaCorporal = document.getElementById("masaCorporal").value;

  if ( sintomas=="" && peso=="" && altura=="" && masaCorporal=="" ){
    document.getElementById("sintomas-error").innerHTML = "* Debe llenar el campo requerido."
    document.getElementById("sintomas").style.borderColor="#DA2A33"
    document.getElementById("peso-error").innerHTML = "* Debe llenar el campo requerido."
    document.getElementById("peso").style.borderColor="#DA2A33"
    document.getElementById("altura-error").innerHTML = "* Debe llenar el campo requerido."
    document.getElementById("altura").style.borderColor="#DA2A33"
    document.getElementById("masaCorporal-error").innerHTML = "* Debe llenar el campo requerido."
    document.getElementById("masaCorporal").style.borderColor="#DA2A33"
    
  }else if ( sintomas=="" || peso=="" || altura=="" || masaCorporal==""){
    
    if ( sintomas=="" ){
      document.getElementById("sintomas-error").innerHTML = "* Debe llenar el campo requerido."
      document.getElementById("sintomas").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("sintomas-error").innerHTML = ""
      document.getElementById("sintomas").style.borderColor="lightgrey"      
    }

    if ( peso=="" ){
      document.getElementById("peso-error").innerHTML = "* Debe llenar el campo requerido."
      document.getElementById("peso").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("peso-error").innerHTML = ""
      document.getElementById("peso").style.borderColor="lightgrey"      
    }

    if ( altura=="" ){
      document.getElementById("altura-error").innerHTML = "* Debe llenar el campo requerido."
      document.getElementById("altura").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("altura-error").innerHTML = ""
      document.getElementById("altura").style.borderColor="lightgrey"      
    }

    if ( masaCorporal=="" ){
      document.getElementById("masaCorporal-error").innerHTML = "* Debe llenar el campo requerido."
      document.getElementById("masaCorporal").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("masaCorporal-error").innerHTML = ""
      document.getElementById("masaCorporal").style.borderColor="lightgrey"      
    }
    
  }  else {

    document.getElementById("sintomas-error").innerHTML = ""
    document.getElementById("sintomas").style.borderColor="lightgrey"
    document.getElementById("peso-error").innerHTML = ""
    document.getElementById("peso").style.borderColor="lightgrey"
    document.getElementById("altura-error").innerHTML = ""
    document.getElementById("altura").style.borderColor="lightgrey"
    document.getElementById("masaCorporal-error").innerHTML = ""
    document.getElementById("masaCorporal").style.borderColor="lightgrey"

    movPag.style.marginLeft = "-50%";
    num[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    cont += 1;
  }

});

btn_adelante4.addEventListener("click", function(e){

  e.preventDefault();
  
  var enfermedades = document.getElementById("enfermedades").value;
  var alergias = document.getElementById("alergias").value;

  if ( enfermedades=="" && alergias=="" ){

    document.getElementById("enfermedades-error").innerHTML = "* Debe llenar el campo requerido."
    document.getElementById("enfermedades").style.borderColor="#DA2A33"
    document.getElementById("alergias-error").innerHTML = "* Debe llenar el campo requerido."
    document.getElementById("alergias").style.borderColor="#DA2A33"  

  }else if ( enfermedades=="" || alergias==""){
    
    if ( enfermedades=="" ){
      document.getElementById("enfermedades-error").innerHTML = "* Debe llenar el campo requerido."
      document.getElementById("enfermedades").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("enfermedades-error").innerHTML = ""
      document.getElementById("enfermedades").style.borderColor="lightgrey"      
    }

    if ( alergias=="" ){
      document.getElementById("alergias-error").innerHTML = "* Debe llenar el campo requerido."
      document.getElementById("alergias").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("alergias-error").innerHTML = ""
      document.getElementById("alergias").style.borderColor="lightgrey"      
    }
    
  } else {

    document.getElementById("enfermedades-error").innerHTML = ""
    document.getElementById("enfermedades").style.borderColor="lightgrey"
    document.getElementById("alergias-error").innerHTML = ""
    document.getElementById("alergias").style.borderColor="lightgrey"

    movPag.style.marginLeft = "-75%";
    num[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    cont += 1;

  }

});

let c = 0;

btn_final.addEventListener("click", function(e){

  var correo = document.getElementById("correo").value;
  var telefono = document.getElementById("telefono").value;
  var contacto = document.getElementById("contacto").value;
  var numeroContacto = document.getElementById("numeroContacto").value;

  if ( correo=="" && telefono=="" && contacto=="" && numeroContacto==""){

    document.getElementById("correo-error").innerHTML = "* Debe llenar el campo requerido."
    document.getElementById("correo").style.borderColor="#DA2A33"
    document.getElementById("telefono-error").innerHTML = "* Debe llenar el campo requerido."
    document.getElementById("telefono").style.borderColor="#DA2A33"
    document.getElementById("contacto-error").innerHTML = "* Debe llenar el campo requerido."
    document.getElementById("contacto").style.borderColor="#DA2A33"  
    document.getElementById("numeroContacto-error").innerHTML = "* Debe llenar el campo requerido."
    document.getElementById("numeroContacto").style.borderColor="#DA2A33"  

  }else if ( correo=="" || telefono=="" || contacto=="" || numeroContacto==""|| telefono.length!=8
           ){
    
    if ( correo=="" ){
      document.getElementById("correo-error").innerHTML = "* Debe llenar el campo requerido."
      document.getElementById("correo").style.borderColor="#DA2A33"      
    }else if ( !verificarCorreo(correo) ){
      document.getElementById("correo-error").innerHTML = "* Ingreso de datos inválidos."
      document.getElementById("correo").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("correo-error").innerHTML = ""
      document.getElementById("correo").style.borderColor="lightgrey"      
    }

    if ( telefono=="" ){
      document.getElementById("telefono-error").innerHTML = "* Debe llenar el campo requerido."
      document.getElementById("telefono").style.borderColor="#DA2A33"      
    }else if ( telefono.length!=9 ){
      document.getElementById("telefono-error").innerHTML = "* Debe tener 8 dígitos."
      document.getElementById("telefono").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("telefono-error").innerHTML = ""
      document.getElementById("telefono").style.borderColor="lightgrey"      
    }

    if ( contacto=="" ){
      document.getElementById("contacto-error").innerHTML = "* Debe llenar el campo requerido."
      document.getElementById("contacto").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("contacto-error").innerHTML = ""
      document.getElementById("contacto").style.borderColor="lightgrey"      
    }

    if ( numeroContacto=="" ){
      document.getElementById("numeroContacto-error").innerHTML = "* Debe llenar el campo requerido."
      document.getElementById("numeroContacto").style.borderColor="#DA2A33"      
    }else {
      document.getElementById("numeroContacto-error").innerHTML = ""
      document.getElementById("numeroContacto").style.borderColor="lightgrey"      
    }
    
  } else {

    document.getElementById("correo-error").innerHTML = ""
    document.getElementById("correo").style.borderColor="lightgrey"
    document.getElementById("telefono-error").innerHTML = ""
    document.getElementById("telefono").style.borderColor="lightgrey"
    document.getElementById("contacto-error").innerHTML = ""
    document.getElementById("contacto").style.borderColor="lightgrey"
    document.getElementById("numeroContacto-error").innerHTML = ""
    document.getElementById("numeroContacto").style.borderColor="lightgrey"

    num[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    cont += 1;

    setTimeout(function(){
    
      let timerInterval;
      Swal.fire({
  
        allowOutsideClick: false,
        allowEscapeKey: false,
        stopKeydownPropagation: false,
  
        title: 'Procesando Registro',
        timer: 1000,
        timerProgressBar: true,
        onBeforeOpen: () => {
          Swal.showLoading()
          timerInterval = setInterval(() => {
            const content = Swal.getContent()
            if (content) {
              const b = content.querySelector('b')
              if (b) {
                b.textContent = Swal.getTimerLeft()
              }
            }
          }, 100)
        },
        onClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          Swal.fire({
            title: '¡ATENCIÓN!',
            html: "Desea confirmar el registro de sus datos?",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, continuar.',
            cancelButtonText: 'Cancelar',
          }).then((result) => {
            if (result.value) {
              Swal.fire({
                icon: 'success',
                title: '¡Exito!',
      
                html: 'El usuario: <br>' +
                      '<b style="color: #0E2C48; font-size: px;";>' + 
                      newUser +'</b><br> Ha sido registrado con éxito. Usted es un paciente con riesgo',
      
                confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Aceptar',
                allowOutsideClick: false,
                allowEscapeKey: false,
                stopKeydownPropagation: false  
              }
              ).then((result) => {
                if (result.value) {
                  limpiar();
                  location.reload();            
                }
              })
            }else {
              cont -= 1;
            }
          })
        }
      });    
    });

  }

  function limpiar(){
    document.getElementById("nombres").value = "";
    document.getElementById("apellido1").value = "";
    document.getElementById("apellido2").value = "";
    document.getElementById("ci").value = "";
    document.getElementById("sintomas").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("masaCorporal").value = "";
    document.getElementById("enfermedades").value = "";
    document.getElementById("alergias").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("contacto").value = "";
    document.getElementById("numeroContacto").value = "";
  }

  function verificarCorreo($n){
    var ExpRegular_Correo = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return ExpRegular_Correo.test($n);

  }

});


btn_atras1.addEventListener("click", function(e){

  e.preventDefault();

  movPag.style.marginLeft = "0%";
  num[cont - 2].classList.remove("active");
  progressText[cont - 2].classList.remove("active");
  progressCheck[cont - 2].classList.remove("active");
  cont -= 1;
});

btn_atras2.addEventListener("click", function(e){

  e.preventDefault();

  movPag.style.marginLeft = "-25%";
  num[cont - 2].classList.remove("active");
  progressText[cont - 2].classList.remove("active");
  progressCheck[cont - 2].classList.remove("active");
  cont -= 1;
});

btn_atras3.addEventListener("click", function(e){

  e.preventDefault();

  movPag.style.marginLeft = "-50%";
  num[cont - 2].classList.remove("active");
  progressText[cont - 2].classList.remove("active");
  progressCheck[cont - 2].classList.remove("active");
  cont -= 1;
});


