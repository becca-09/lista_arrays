const prompt = require("prompt-sync")();
let numeros = [];
let i;
for(i=0; i<5; i++){
    numeros.push(Number(prompt("Informe um número: ")));
}
for(i=0; i<5; i++){
    if(numeros[i]>0){
        console.log(numeros)
    }
}