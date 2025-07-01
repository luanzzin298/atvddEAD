let prompt = require('prompt-sync')();

let nome = prompt("Digite o nome do aluno: ");
let n1 = parseFloat(prompt("Digite a 1° nota : "));
let n2 = parseFloat(prompt("Digite a 2° nota : "));
let n3 = parseFloat(prompt("Digite a 3° nota : "));

let media = (n1 + n2 + n3) / 3;
console.log("Aluno: " + nome);
console.log("Média: " + media.toFixed(2));
if (media >= 8) {
    console.log("Situação: Aprovado");
} else {
    console.log("Situação: Reprovado");
}
