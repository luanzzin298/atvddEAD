let prompt = require('prompt-sync')();
let A = parseInt(prompt("Digite o valor de A: "));
let B = parseInt(prompt("Digite o valor de B: "));
let C;
if (A === B) {
    C = A + B;
} else {
    C = A * B;
}
console.log("Resultado: " + C);
