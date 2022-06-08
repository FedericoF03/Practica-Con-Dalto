"use strict";

const parrafo = document.getElementById("id__prueba")
const probando = "hola"
const input = document.getElementsByTagName("input")
let probando1 = parrafo.outerHTML
const claro = document.createDocumentFragment()
const contenedor = document.querySelector(".conteiner")

 let i = parrafo.nextElementSibling
 console.log(i)
for(let i = 0; i < 20; i++) {
    const item1 = document.createElement("DIV")
    item1.innerHTML = "probando funcionalidades"
    claro.appendChild(item1)
}
contenedor.appendChild(claro)

let pruebaa = contenedor.children
console.log(pruebaa)


















let functionPrueba = (parametro) => console.log(`${parametro} mundo!`)
for (let index = 0; index < parrafo.length; index++) {
    parrafo[0].addEventListener("click", () => functionPrueba(probando))
}





