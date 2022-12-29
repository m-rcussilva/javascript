const displayI = document.getElementById("display-i")
const displayO = document.getElementById("display-o")

const num = document.querySelectorAll("#num")
const equalBtn = document.querySelector(".equal-btn")
const clearBtn = document.querySelector(".clear-btn")

num.forEach((el) => {
    el.addEventListener("click", (e) => {
        displayI.textContent += e.target.textContent
    })
})

equalBtn.addEventListener("click", () => {
    if (displayI.textContent === "") {
        displayI.textContent = alert("Enter a number")
    } else {
        // O eval() é capaz de avaliar qualquer código JS válido, incluindo expressões matemáticas
        let result = eval(displayI.textContent)
        displayO.textContent = displayI.textContent
        displayO.textContent = result
    }
})

clearBtn.addEventListener("click", () => {
    displayI.textContent = ""
    displayO.textContent = ""
})
