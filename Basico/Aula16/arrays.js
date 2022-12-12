const alunos = ['Luiz', 'Matheus', 'Joao']
console.log(alunos[2])  //acessa o indice certo


alunos[0] = 'Eduardo'; //modifica o valor
console.log(alunos)


alunos[3] = 'Luiza'; //adciona + 1 valor no array no fim
console.log(alunos) 
alunos[alunos.length] = 'Fabio' //adciona + 1 valor no array no fim
console.log(alunos)
alunos.push('Luiza'); //adciona + 1 valor no array no fim
console.log(alunos)


alunos.unshift('Caco') //adiciona no começo
console.log(alunos)


alunos.pop()
console.log(alunos) //remove o ultimo item de uma array


console.log(alunos.slice(0,2)) //Adiciona o item conforme local desejado
