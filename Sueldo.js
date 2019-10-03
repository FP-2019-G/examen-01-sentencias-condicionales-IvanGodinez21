var trabajador = document.querySelector("#trabajador")
var clave = document.querySelector("#clave")
var horas = document.querySelector("#horas")
var sueldo = document.querySelector("#sueldo")
var btncomprobar = document.querySelector("#btnComprobar")

btncomprobar.addEventListener("click", () => {
    if (trabajador.value === "user" && clave.value === "12A34") {
        sueldo.value = Number(horas.value) * 75
    } else if (trabajador.value === "admin" && clave.value === "76Z54") {
        sueldo.value = Number(horas.value) * 125
    } else {
        alert("Usuario no identificado")
        sueldo.value = ""
    }
   })