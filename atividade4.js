let prompt = require('prompt-sync')();
let a = parseFloat(prompt("Digite o 1° número: "));
let b = parseFloat(prompt("Digite o 2° número: "));
let c = parseFloat(prompt("Digite o 3° número: "));
let media = (a + b + c) / 3;
console.log("A média é: " + media);
