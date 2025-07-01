let prompt = require('prompt-sync')();
let a = parseFloat(prompt("Digite o primeiro número: "));
let b = parseFloat(prompt("Digite o segundo número: "));

if (a > b) {
    console.log("O maior número é: " + a);
} else if (b > a) {
    console.log("O maior número é: " + b);
} else {
    console.log("Os dois são iguais.");
}
