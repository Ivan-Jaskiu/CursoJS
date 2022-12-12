function saudacao (nome) {
    console.log(`Bom dia ${nome}`)
    return 11
}

const variavel = saudacao('Luiz')
console.log(variavel);



//funções
function soma(x, y){
    const resultado = x + y
    return resultado
}

console.log(soma(2, 2))



//classica de função
const raiz = function(n){
    return n ** 0.5;
};

console.log(raiz(9))
console.log(raiz(16))


//arrow function
const adicao = (n) => {
    return n + n;
};

console.log(adicao(16))
