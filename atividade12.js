let prompt = require('prompt-sync')();
let nota1 = parseFloat(prompt("Digite a 1° nota: "));
let nota2 = parseFloat(prompt("Digite a 2° nota: "));
let media = (nota1 + nota2) / 2;

if (media === 10) {
    console.log("Aprovado com Distinção");
} else if (media >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
