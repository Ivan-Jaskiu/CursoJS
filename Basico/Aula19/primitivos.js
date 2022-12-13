/*

Primitivos(imutaveis) = string, number, boolean, undefined, null (bigint, symbol)


Referencia (mutaveis) = Arrays, Objetos, Função

*/


//          0123 
let nome = 'Luiz';
console.log(nome[0]);

//copia
let a = 'A'
let b = a 
console.log(a, b);

// mesmos dados
let c = [1, 2, 3]
let d = c
console.log(c, d);

//atribui um item no array
c.push(4)
console.log(c, d)

//removendo item
d.pop();
console.log(c, d)

//apontando valores
let e = [1, 2 ,3]
let f = [...e]
let g = f
console.log(e,f)

//objetos apontados
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'otavio'
};

const piu = {...pessoa}
pessoa.nome = 'well'
console.log(pessoa)
console.log(piu)