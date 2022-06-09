'use strict';
const button = document.querySelector(".button")

button.addEventListener("mouseup", (e) => {
    console.log(e.target)
e.stopPropagation()
}, true)