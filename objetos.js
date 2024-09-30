// OBJETOS em JS

/* Utilizamos objetos quando desejamos agrupar informações sobre algo em uma única variável.

Ex: Dados de uma Pessoa, de um Carro, de um Celular.

Diferente dos arrays, os objetos utilizam propriedades nomeadas ao invés de números.

Para declarar um objeto, utilizamos {} */

var objeto = {}; // Cria um objeto vazio.
console.log("Exibe o objeto vazio: ", objeto);

var garrafa = {};

garrafa.altura = 10 // Ponto permite acessar as propriedades do objeto

//Porém, também podemos utilizar os colchetes:
garrafa['cor'] = "Azul";

console.log("Exibe o objeto garrafa inteiro: ", garrafa);
console.log("Exibe apenas a altura da garrafa: ", garrafa.altura);
console.log("Exibe apenas a cor da garrafa: ", garrafa['cor']);

// As propriedades além de armazenar tipos primitivos
// Também podem aramazenar arrays e outros objetos
// Podendo criar um ciclo interno "infinito"

var aluno = {};
aluno.notas = [5, 7, 8.5]; // A propriedade notas armazena um conjunto de valores
aluno.dadosPessoais = {
    nome: "Deivide",
    idade: 21,
    cidade: "Jaú",
    estado: "SP"
}

aluno.materias = [ // Essa propriedade é uma lista de objetos
    {nome: "Estrutura de Dados", professor: "Ronan"},
    {nome: "Algoritimos", professor: "Tiago", notas: [9, 5, 7]}
];

console.log("Objeto Aluno: ", aluno);

// A propriedade nome, está dentro da propriedade dadosPessoais
// Continuamos utilizando pontos para acessar as propriedade de outras propriedades
console.log("Nome do Aluno: ", aluno.dadosPessoais);
// As notas são um array, então utilizamos um for
for (var i = 0; i < aluno.notas.length; i++){
    //Se a propriedade é um array, podemos acessar seu valor usando o indice
    console.log(`Nota[${i+1}]: `, aluno.notas[i]);
}

for (var i = 0; i < aluno.materias.length; i++){
    console.log("Matéria: ", aluno.materias[i].nome);
    console.log("Professor: ", aluno.materias[i].professor);

    if(aluno.materias[i].notas){ // Verifica se existe e propriedade notas
        for(var j = 0; j < aluno.materias[i].notas.length; j++){
            console.log(`Nota[${j+1}]:`, aluno.materias[i].notas[j]);
        }
    }
}