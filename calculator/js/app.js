const num1Input = document.getElementById("num1")
const num2Input = document.getElementById("num2")
const resultEl = document.getElementById("result")

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

document.getElementById("add-btn").addEventListener("click", function () {
    const num1 = Number(num1Input.value)
    const num2 = Number(num2Input.value)
    const result = add(num1, num2)
    resultEl.textContent = result
})

document.getElementById("subtract-btn").addEventListener("click", function () {
    const num1 = Number(num1Input.value)
    const num2 = Number(num2Input.value)
    const result = subtract(num1, num2)
    resultEl.textContent = result
})

document.getElementById("multiply-btn").addEventListener("click", function () {
    const num1 = Number(num1Input.value)
    const num2 = Number(num2Input.value)
    const result = multiply(num1, num2)
    resultEl.textContent = result
})

document.getElementById("divide-btn").addEventListener("click", function () {
    const num1 = Number(num1Input.value)
    const num2 = Number(num2Input.value)
    const result = divide(num1, num2)
    resultEl.textContent = result
})
