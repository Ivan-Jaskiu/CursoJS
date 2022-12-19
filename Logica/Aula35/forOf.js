const nome = ['luiz', 'kasla']


    //primeira forma de fazer(tradicional)
// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }


    //Segunda forma utilizando o FOR IN
// for (let i in nome) {
//     console.log(nome[i]);
// }


    //Terceira forma utlizando o FOR OF
// for (let valor of nome) {
//     console.log(valor);
// }


    //Quanrta forma e o forEach
nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});

