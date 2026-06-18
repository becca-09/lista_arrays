const prompt = require("prompt-sync")();
let filmes = [];
let i;
for (let i = 0; i < 5; i++) {
    let filme = prompt(`Digite o nome do ${i + 1}º filme: `);
    filmes.push(filme);
}
 
console.log("\nPrimeiro filme cadastrado:", filmes[0]);
console.log("Último filme cadastrado:", filmes[filmes.length - 1]);
console.log("Quantidade de filmes cadastrados:", filmes.length);