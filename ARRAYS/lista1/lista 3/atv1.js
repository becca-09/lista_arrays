const prompt = require('prompt-sync')();
 
let numeros = [];
let positivos = 0;
 
for (let i = 0; i < 6; i++) {
    let numero = Number(prompt(`Digite o ${i + 1}º número: `));
    numeros.push(numero);
 
    if (numero > 0) {
        positivos++;
    }
}
 
console.log("Números digitados:", numeros);
console.log("Quantidade de números positivos:", positivos);