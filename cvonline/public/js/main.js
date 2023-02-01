let header = document.getElementById("header");
let navBarra = document.getElementById("barra_nav");
let btnBurger = document.getElementById("btn_burger");
let btnsNav = document.getElementById("btns_nav");
let inputNombre = document.getElementById("input_nombre");
let inputCorreo = document.getElementById("input_correoe");
let inputTel = document.getElementById("input_tel");
let inputAsunto = document.getElementById("input_asunto");
let inputMensaje = document.getElementById("mensaje_input");
let btnEnviar = document.getElementById("btn_enviar");


//Botones
let cerrarBtnBurger = btnBurger.addEventListener("click", () => {
    if (btnsNav.style.display === "flex") {
    setTimeout(() => {
        btnsNav.style.display = "none";
    }, 500);
    } else {
    setTimeout(() => {
        btnsNav.style.display = "flex";
    }, 500);
    }
});
btnEnviar.addEventListener("click", ()=>{
    validacion();
    reset();
});

//Validación de inputs
let validacion = () => {
    let nombre = inputNombre.value;
    let correo = inputCorreo.value;
    let telefono = inputTel.value;
    let asunto = inputAsunto.value;
    let mensaje = inputMensaje.value;
if (nombre != "" && correo != "" && telefono != "" && asunto != "" && mensaje != ""){
    console.log("enviado")
} else{
    alert("Hay campos sin completar")
}
};

//Función para limpiar los input
let reset = () =>{
    let nombre = inputNombre.value = "";
    let correo = inputCorreo.value = "";
    let telefono = inputTel.value = "";
    let asunto = inputAsunto.value = "";
    let mensaje = inputMensaje.value = "";
};
