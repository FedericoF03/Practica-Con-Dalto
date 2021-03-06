'use strict';

const cash = document.getElementById("amountInput")
const button = document.getElementById("amountButton")
const input = document.querySelector(".carga")
const large = document.querySelectorAll(".box__ice-cream")
input.hidden = true 

let calculate = () => {
    let value = Number(cash.value)
    let vuelto;
    input.innerHTML = "Cargando pedido..."
    setTimeout(() => input.hidden = false, 500);
    setTimeout(() => input.hidden = true ,15000); 
    if(value >= 0.6 && 1 > value ){
       vuelto = value - 0.6
       vuelto = vuelto.toFixed(2)
       setTimeout(() => input.innerHTML = "Pedido Cargado.", 6000 );
       setTimeout(() => input.innerHTML = `Tu vuelto es de: ${vuelto}` ,9000);
    } else if (value >= 1 && 1.6 > value) {
        vuelto = value - 1
        vuelto = vuelto.toFixed(2)
        setTimeout(() => input.innerHTML = "Pedido Cargado.", 6000 );
        setTimeout(() => input.innerHTML = `Tu vuelto es de: ${vuelto}` ,9000);
    } else if (value >= 1.6 && 1.7 > value) {
        vuelto = value - 1.6
        setTimeout(() => input.innerHTML = "Pedido Cargado.", 6000 );
        setTimeout(() => input.innerHTML = `Tu vuelto es de: ${vuelto}` ,9000);
    } else if (value >= 1.7 && 1.8 > value) {
        vuelto = value - 1.7
        vuelto = vuelto.toFixed(2)
        setTimeout(() => input.innerHTML = "Pedido Cargado.", 6000 );
        setTimeout(() => input.innerHTML = `Tu vuelto es de: ${vuelto}` ,9000);
    } else if (value >= 1.8 && 2.9 > value) {
        vuelto = value - 1.8
        vuelto = vuelto.toFixed(2)
        setTimeout(() => input.innerHTML = "Pedido Cargado.", 6000 );
        setTimeout(() => input.innerHTML = `Tu vuelto es de: ${vuelto}` ,9000);
    } else if (value >= 2.9 && Infinity > value) {
        vuelto = value - 2.9
        vuelto = vuelto.toFixed(2)
        setTimeout(() => input.innerHTML = "Disculpe la molestia pero hay 2 helados con el mis precio elija entre 1 de  los dos", 6000 );
    } else {
        setTimeout(() => input.innerHTML = "Lo sentimos no le alcanza nada del catalogo!", 7000 );
        setTimeout(() => input.hidden = false ,6000);
    }   
}

button.addEventListener("click", calculate)
let clickRecognize = function(dato) {
    let valueIceCream = dato.split("$")
    valueIceCream = parseFloat(valueIceCream[1])
    cash.value = valueIceCream 
}

for (let index = 0; index < large.length; index++) {
    let div = large[index]
    let text = div.innerText
    div.tabIndex = index
    div.addEventListener("click", () => clickRecognize(text)) 
}