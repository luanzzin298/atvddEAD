let prompt = require('prompt-sync')();
let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));
let opcao = parseInt(prompt("Digite 1 (soma), 2 (multiplica) ou 3 (divide): "));

if (opcao === 1) {
    console.log("Soma: " + (num1 + num2));
} else if (opcao === 2) {
    console.log("Multiplicação: " + (num1 * num2));
} else if (opcao === 3) {
    console.log("Divisão: " + (num1 / num2));
} else {
    console.log("Opção inválida.");
}
