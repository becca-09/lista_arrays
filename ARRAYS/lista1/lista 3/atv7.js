const prompt = require("prompt-sync")();
let cidade = [];

for(let i=0; i<5; i++){
    cidade.push(prompt("Digite uma cidade:"));
}
let novaCidade = prompt ("Digite uma nova ciadade:");
cidade.unshift(novaCidade);
console.log("Atualizado:");
console.log(cidade);