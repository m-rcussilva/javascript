const displayI = document.getElementById("display-i")
const displayO = document.getElementById("display-o")

const num = document.querySelectorAll("#num")

num.forEach((el) => {
    el.addEventListener("click", (e) => {
        displayI.textContent += e.target.textContent
    })
})
