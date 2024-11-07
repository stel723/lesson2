const prompt = require('prompt-sync')();
let number1 = Number(prompt('Введите первое число:'));
let number2 = Number(prompt('Введите второе число:'));
let number3 = Number(prompt('Введите третие число:'));
let delenie = number1 ** number2;
console.log('Среднее арифметическое:'+ delenie);