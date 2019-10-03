var pesos = document.querySelector("#pesos")
var divisa = document.querySelector("#divisa")
var conversion = document.querySelector("#conversion")
var btncomprobar = document.querySelector("#btnComprobar")

btncomprobar.addEventListener("click", () => {
 if ((pesos.value %2) === 0) {
     divisa.value = "Dólares"
     conversion.value = Number(pesos.value) * 0.050
 } else {
     divisa.value = "Euros"
     conversion.value = Number(pesos.value) * 0.046
 }
})