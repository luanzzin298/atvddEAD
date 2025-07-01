let prompt = require('prompt-sync')();
let sexo = prompt("Digite F para feminino ou M para masculino: ").toUpperCase();

if (sexo === "F") {
    console.log("Sexo: Feminino");
} else if (sexo === "M") {
    console.log("Sexo: Masculino");
} else {
    console.log("Sexo inválido");
}
