const prompt = require('prompt-sync')();
let num = prompt("Введите число:");
num = Number(num);
if (num % 2 == 0) {
    console.log(num+"является чётным числом");
} else {
    console.log(num+"является нечётным числом");
}

