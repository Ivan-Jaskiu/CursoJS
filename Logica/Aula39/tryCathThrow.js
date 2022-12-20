//erros
try {
    console.log(NaoExisto)
} catch (err) {
    console.log('ERRO POHA')
}



// tratando o erro
function soma(x, y){
    if (
        typeof x !== 'number' ||
        typeof y !== 'number'
    ) {
        throw new ReferenceError('x e y pecisam ser validos')
    }
    return x + y
}

try {
    console.log(soma(1,2))
    console.log(soma('2',3))
} catch (err) {
    console.log('ERRO POHA')
}