const prompt = require("prompt-sync")();

let filmes = [];


for (let i = 0; i < 5; i++) {
    let filme = prompt(`Digite o nome do ${i + 1}º filme: `);
    filmes.push(filme);
}

let opcao;

do {
    console.log("\n=== MENU ===");
    console.log("1 - Mostrar filmes");
    console.log("2 - Adicionar filme no final");
    console.log("3 - Remover último filme");
    console.log("4 - Mostrar quantidade de filmes");
    console.log("5 - Remover primeiro filme");
    console.log("6 - Adicionar filme no início");
    console.log("7 - Verificar se filme existe");
    console.log("8 - Mostrar primeiro filme");
    console.log("9 - Mostrar último filme");
    console.log("0 - Sair");

    opcao = Number(prompt("Escolha uma opção: "));

    switch (opcao) {

        case 1:
            console.log("\nFilmes cadastrados:");
            console.log(filmes);
            break;

        case 2:
            let novoFilme = prompt("Digite o nome do filme: ");
            filmes.push(novoFilme);
            console.log("Filme adicionado!");
            break;

        case 3:
            if (filmes.length > 0) {
                let removido = filmes.pop();
                console.log(`Filme removido: ${removido}`);
            } else {
                console.log("Não há filmes para remover.");
            }
            break;

        case 4:
            console.log(`Quantidade de filmes: ${filmes.length}`);
            break;

        case 5:
            if (filmes.length > 0) {
                let removido = filmes.shift();
                console.log(`Primeiro filme removido: ${removido}`);
            } else {
                console.log("Não há filmes para remover.");
            }
            break;

        case 6:
            let filmeInicio = prompt("Digite o nome do filme: ");
            filmes.unshift(filmeInicio);
            console.log("Filme adicionado no início!");
            break;

        case 7:
            let busca = prompt("Digite o nome do filme: ");

            if (filmes.includes(busca)) {
                console.log("O filme existe na lista.");
            } else {
                console.log("O filme não existe na lista.");
            }
            break;

        case 8:
            if (filmes.length > 0) {
                console.log("Primeiro filme:", filmes[0]);
            } else {
                console.log("Lista vazia.");
            }
            break;

        case 9:
            if (filmes.length > 0) {
                console.log("Último filme:", filmes[filmes.length - 1]);
            } else {
                console.log("Lista vazia.");
            }
            break;

        case 0:
            console.log("Programa encerrado.");
            break;

        default:
            console.log("Opção inválida!");
    }

} while (opcao !== 0);