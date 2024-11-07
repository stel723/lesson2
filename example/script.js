// Задача 1: Сложение двух чисел

// const prompt = require('prompt-sync')();
// let number1 = Number(prompt('Введите первое число:'));
// let number2 = Number(prompt('Введите второе число:'));
// let sum = number1 + number2;
// console.log("Сумма:", sum);

// Задача 2: Вычитание двух чисел

// const prompt = require('prompt-sync')();
// let number1 = Number(prompt('Введите первое число:'));
// let number2 = Number(prompt('Введите второе число:'));
// let sum = number1 - number2;
// console.log("Вычитание двух чисел:", sum);

// Задача 3: Умножение двух чисел

// const prompt = require('prompt-sync')();
// let number1 = Number(prompt('Введите первое число:'));
// let number2 = Number(prompt('Введите второе число:'));
// let sum = number1 * number2;
// console.log("Умножение двух чисел:", sum);

// Задача 4: Деление двух чисел

// const prompt = require('prompt-sync')();
// let number1 = Number(prompt('Введите первое число:'));
// let number2 = Number(prompt('Введите второе число:'));
// let sum = number1 / number2;
// console.log("Деление двух чисел:", sum);

// Задача 5: Остаток от деления

// const prompt = require('prompt-sync')();
// let number1 = Number(prompt('Введите первое число:'));
// let number2 = Number(prompt('Введите второе число:'));
// let number3 = Number(prompt('Введите третье число:'));
// let delenie = number1 - (number2*number3);
// console.log('Остаток от деления:'+ delenie);

// Задача 6: Возведение в степень
// const prompt = require('prompt-sync')();
// let number1 = Number(prompt('Введите первое число:'));
// let number2 = Number(prompt('Введите второе число:'));
// let delenie = number1 ** number2;
// console.log('Возведение в степень:'+ delenie);

// Задача 7: Среднее арифметическое

// const prompt = require('prompt-sync')();
// let number1 = Number(prompt('Введите первое число:'));
// let number2 = Number(prompt('Введите второе число:'));
// let number3 = Number(prompt('Введите третье число:'));
// let delenie = (number1 + number2 + number3) / 3;
// console.log('Среднее арифметическое:'+ delenie);

// Задача 8: Максимальное из двух чисел

// const prompt = require('prompt-sync')();
// let number1 = Number(prompt('Введите первое число:'));
// let number2 = Number(prompt('Введите второе число:'));
// let max;
// if(number1>number2) {
//     max= number1
// } else {
//     max = number2
// }
// console.log('Максимальное из двух чисел:'+ max);

// Задача 9: Минимальное из трех чисел

// const prompt = require('prompt-sync')();
// let number1 = Number(prompt('Введите первое число:'));
// let number2 = Number(prompt('Введите второе число:'));
// let number3 = Number(prompt('Введите третье число:'));
// let max;
// let min;
// if(number1>number2) {
//     max = number1 
//     min = number2
// } else {
//     max = number2
//     min = number1
// }
// if(number2>number3) {
//     max = number2 
//     min = number3
// } else {
//     max = number3
//     min = number2
// }
// if(number1>number3) {
//     max = number1 
//     min = number3
// } else {
//     max = number3
//     min = number1
// }
// console.log('Минимальное из трёх чисел:'+ min);

const prompt = require('prompt-sync')();
let number1 = Number(prompt('Введите первое число:'));
let number2 = Number(prompt('Введите второе число:'));
let number3 = Number(prompt('Введите третье число:'));
let max;
let min;
if(number1<number2 && number1 < number3){
    min = number1
} else if (number2<number1 && number2 < number3){
    min = number2
}else{
    min = number3
}
console.log('Минимальное из трёх чисел:'+ min);