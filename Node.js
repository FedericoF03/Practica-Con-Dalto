"use strict";

const parrafo = document.getElementById("id__prueba")
const probando = "hola"
let functionPrueba = (parametro) => console.log(`${parametro} mundo!`)
const input = document.getElementsByTagName("input")
console.log(input[0])
input[0].setAttribute("type", "text" )
const see = parrafo.getAttribute("value")
console.log(see)

for (let index = 0; index < parrafo.length; index++) {
    parrafo[0].addEventListener("click", () => functionPrueba(probando))
}





