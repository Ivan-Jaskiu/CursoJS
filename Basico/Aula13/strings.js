
//               01234567
let umaString = 'um texto';

console.log(umaString.charAt(5)); //busca o lugar definido dentro dos []

// concat
console.log(umaString.concat(' em', ' um', ' lindo dia.'));
console.log(umaString + ' em um lindo dia');
console.log(`${umaString} em um lindo dia`);


//busca dentro da string
console.log(umaString.indexOf('texto')) // começa do indice...
console.log(umaString.indexOf('o', 3))  //busca a letra depois do indice selecionado
console.log(umaString.lastIndexOf('m', 3)) //começa do final pra frente


//expressao regular
console.log(umaString.match(/[a-z]/g)) //busca todas as letras em minusculo na expressao regular


//troca palavras
console.log(umaString.replace('um', 'Outra')) //troca a palavra por outra


//subtituir palaras por algo
console.log(umaString.replace(/t/, '#')); //troca a palavra e se  colocar o '/g' substitui todas as letras começadas..


//começa dos indices propostos
console.log(umaString.slice(2, 5)); //começa de uma string e vai ate o numero desejado em caracteres


//mexendo com caracteres
console.log(umaString.toUpperCase()); //deixa todos os caracteres em maiusculo
console.log(umaString.toLowerCase()); //deixa todos os caracteres em minusculo