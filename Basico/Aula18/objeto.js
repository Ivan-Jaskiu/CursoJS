const pessoa1 = {
    nome: 'Ivan',
    idade: 25,
    sobrenome: 'Iaski',

    fala() {
        //console.log(`${this.nome} ${this.sobrenome} esta falando oi..`);
        console.log(`Minha idade ${this.idade}`)
    },

    incremetIdade(){
        this.idade++;
    }
};
pessoa1.fala()
pessoa1.incremetIdade()
pessoa1.fala()
//console.log(pessoa1.nome);


// função para criar varias pessoas
function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade }
}

const pessos = criaPessoa('jara', 'paul', 20);
const pessos1 = criaPessoa('Jao', 'paulo', 20);
const pessos2 = criaPessoa('jairo', 'paula', 20);
const pessos3 = criaPessoa('jamil', 'palin', 20);
const pessos4 = criaPessoa('joelsio', 'pats', 20);
console.log(pessos.nome, pessos1.sobrenome);