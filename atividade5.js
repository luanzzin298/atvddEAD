let prompt = require('prompt-sync')();
let nome = prompt("Digite o nome do funcionário: ");
let salario = parseFloat(prompt("Digite o salário atual: "));
let novoSalario = salario + (salario * 0.10);
console.log(nome + ", seu novo salário é R$ " + novoSalario.toFixed(2));
