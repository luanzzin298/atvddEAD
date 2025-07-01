let prompt = require('prompt-sync')();
let preco = parseFloat(prompt("Digite o preço à vista do produto: "));
let parcelas = parseInt(prompt("Digite a qtd de parcelas (3 ou 5): "));
let total, valorParcela;

if (parcelas === 3) {
    total = preco * 1.10;
} else if (parcelas === 5) {
    total = preco * 1.20;
} else {
    total = preco;
}

valorParcela = total / parcelas;

console.log("Valor total: R$ " + total.toFixed(2));
console.log("Cada parcela: R$ " + valorParcela.toFixed(2));
