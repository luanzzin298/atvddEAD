let prompt = require('prompt-sync')();
let idade = parseInt(prompt("Digite sua idade: "));
if (idade >= 18) {
    console.log("Vc é maior de idade.");
} else {
    console.log("Vc é menor de idade.");
}
