/*
    Operadores Logicos
    && -> AND -> E
    || -> OR -> OU
    ! -> NOT -> NAO
*/

// AND
console.log(true && true && true)

// OR
console.log(false || true || false)

const usuarios =  'luiz'
const senha = '123456789'
const vaiLogar = usuarios === 'luiz' && senha === '123456789'  //AND
console.log(vaiLogar)

// NOT

console.log(!false)
