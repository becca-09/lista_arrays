const prompt = require ("prompt -sync")();
let nomes = [];
let i;
for(i=0; i<5; i++){
    nomes.push(prompt("Informe o seu nome:"));
}

for(i=0; i<5; i++){
    console.log(nomes[i]);
}
