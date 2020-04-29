"use strict"
"use strict"

//1

let name = prompt('What is your name?', '')
alert(`Hello, ${name}`)

//2
const currentYear = 2020;
let age = prompt('Write your year of birth', '')
alert(`Your age is ${currentYear - age}`)

//3
let length = prompt('Write the side length of the square', '')
alert(`The area of the square is ${length * 4}`)

//4
let radius = prompt('Write the radius length', '')
alert(`The area of circle ${radius} is ${Math.PI * (radius ** 2)}`)

//5
let distance = prompt('What is the distance (km)?', ''), time = prompt('How much time do you need (h)?', '')
alert(`You need to move with the speed ${distance / time} km/h`)

//6
const coefficient = 0.92
let dollar = prompt('Write your amount of dollars', '')
alert(`Your amount of money in euros is ${dollar * 0.92} euros`)

//7
const file = 820;
let size = prompt('Write the size of your flash drive (GB)', '')
alert(`You could download ${(size / file)} files 820MB size on this flash drive`)

//8
let money = prompt('How much money do you have?', '')
let price = prompt('What is the price of 1 chocolate?', '')
alert(`You could by ${(money - money % price) / price} chocolates. Your change is ${money % price}`)

//9
let number0 = prompt('Write three-digit number', '')
function numReverse(num) {
    let a = (num - num % 100) / 100
    let b = (num - 100 * a)
    b = (b - b % 10) / 10
    let c = num - 100 * a - 10 * b
    return 100 * c + 10 * b + a
}
alert(`The result is ${numReverse(number0)}`)

//10
const month = 2, percent = 5;
let sum = prompt('Введите сумму вклада', '');
alert(`Cумма начисленых процентов равна ${(sum * (month / 12) * (percent / 100)).toFixed(2)}.`)



