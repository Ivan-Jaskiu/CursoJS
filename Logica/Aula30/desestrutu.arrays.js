// ... rest operator       // ...spred

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, ...resto] = numeros

console.log(primeiroNumero, segundoNumero);                    //pega os 2 primeiros valores do array
console.log(resto);                                            //pega o resto do valores com     ...resto

const [um, , tres, , cinco] = numeros
console.log(um, tres, cinco)                                   //pega os numeros, pulando casas



//modo normal de pegar itens em array
const numericos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


//pegando os itens na forma desostrutural
console.log(numericos[1][2])
const [,[,,seis]] = numericos
console.log(seis)


