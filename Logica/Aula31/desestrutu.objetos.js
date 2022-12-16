//fazendo um objeto
const pessoa = {
    nome: 'Luzi',
    sobrenome: 'Miranda',
    idade: 25,
    endereco: {
        rua: 'av brasil',
        numero: 200
    }
};

const nome1 = pessoa.nome;        //cria uma variavel para guardar o nome da pessoa
console.log(nome1);


//atribuicao via desestruturacao
const { nome, sobrenome } = pessoa;
console.log(nome, sobrenome);


//pegando um valor de um objeto dentro de um objeto
const { endereco: { rua } } = pessoa;
console.log(rua);