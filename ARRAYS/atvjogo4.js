let numeros = [10, 20, 30, 40, 50];
let soma = 0;
let i;

for (i=0; i<5; i++){
    console.log("------");
    soma = numeros[i] + soma;
    console.log(soma);
}
media = soma/5;
console.log("Resultado final:" + soma);
console.log("Resultado final:" + media);
