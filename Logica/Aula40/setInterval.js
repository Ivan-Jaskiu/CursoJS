function mostraHora(){
    let date = new Date();

    return date.toLocaleString({
        hour: false
    })
}



    //fazendo com funçao
// function funcaDoInterval(){
//     console.log(mostraHora())
// }


    //Fazendo em 1 linha (loop infinito)
const timer = setInterval(function () { 
    console.log(mostraHora()); 
}, 1000)


//seta um limite de tempo q erxecuta o timer
setTimeout(function () {
    clearInterval(timer);
}, 10000);