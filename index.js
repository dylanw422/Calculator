let storage = []
let firstOperand = []
let secondOperand = []
let operator
let result

const display = document.querySelector('#display')
const clear = document.querySelector('#clear')
const enter = document.querySelector('#enter')

const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const zero = document.querySelector('#zero')

addition = document.querySelector('#add')
subtract = document.querySelector('#sub')
multiply = document.querySelector('#mult')
divide = document.querySelector('#div')

clear.addEventListener('click', () => {
    storage = [];
    firstOperand = [];
    secondOperand = [];
    display.textContent = '0'
})

one.addEventListener('click', () => {
    storage.push(one.textContent)
    display.textContent = storage.join('')
})

two.addEventListener('click', () => {
    storage.push(two.textContent)
    display.textContent = storage.join('')
})

three.addEventListener('click', () => {
    storage.push(three.textContent)
    display.textContent = storage.join('')
})

four.addEventListener('click', () => {
    storage.push(four.textContent)
    display.textContent = storage.join('')
})

five.addEventListener('click', () => {
    storage.push(five.textContent)
    display.textContent = storage.join('')
})

six.addEventListener('click', () => {
    storage.push(six.textContent)
    display.textContent = storage.join('')
})

seven.addEventListener('click', () => {
    storage.push(seven.textContent)
    display.textContent = storage.join('')
})

eight.addEventListener('click', () => {
    storage.push(eight.textContent)
    display.textContent = storage.join('')
})

nine.addEventListener('click', () => {
    storage.push(nine.textContent)
    display.textContent = storage.join('')
})

zero.addEventListener('click', () => {
    display.textContent = storage.join('')
})

addition.addEventListener('click', () => {
    operator = '+'
    firstOperand = storage
    storage = []
    display.textContent = 0
})

subtract.addEventListener('click', () => {
    operator = '-'
    firstOperand = storage
    storage = []
    display.textContent = 0
})

multiply.addEventListener('click', () => {
    operator = "*"
    firstOperand = storage
    storage = []
    display.textContent = 0
})

divide.addEventListener('click', () => {
    operator = "/"
    firstOperand = storage
    storage = []
    display.textContent = 0
})

enter.addEventListener('click', () => {
    secondOperand = storage
    let first = parseInt(firstOperand.join(''), 10)
    let second = parseInt(secondOperand.join(''), 10)
    if (operator === "+") {
        display.textContent = first + second;
    } else if (operator === "-") {
        display.textContent = first - second;
    } else if (operator === "*") {
        display.textContent = first * second;
    } else if (operator === "/") {
        display.textContent = first / second;
    }
})








