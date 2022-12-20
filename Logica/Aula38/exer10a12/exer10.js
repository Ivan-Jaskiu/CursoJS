//Primeira versão
function maior(num1, num2) {

    if (num1 > num2) {
        console.log( `${num1} é maior q ${num2}`)
    } else {
        console.log(`${num2} é maior q ${num1}`)
    }

}

maior(3,2)


//segunda versão
function max(x, y){
    return x > y ? x : y

}
console.log(max(10,2))



//terceira versão
const max2 = (x, y) => x > y ? x : y;
console.log(max2(10,11))