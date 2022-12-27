const displayI = document.getElementById("display-i")
const displayO = document.getElementById("display-o")

const num0 = document.getElementById("num0")
const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const num3 = document.getElementById("num3")
const num4 = document.getElementById("num4")
const num5 = document.getElementById("num5")
const num6 = document.getElementById("num6")
const num7 = document.getElementById("num7")
const num8 = document.getElementById("num8")
const num9 = document.getElementById("num9")

num1.addEventListener("click", (e) => {
    displayI.textContent += e.target.textContent
    console.log(e.target.textContent)
})
