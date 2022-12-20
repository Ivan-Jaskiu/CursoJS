
// fazendo a função para pegar o relogio em 0 (ajustado com a data) e criar hora em segundos
function criahoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'GMT',
    })
}

//pega no html, todos os parametros q precisa
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0
let timer;

// função para inicar o relogio;
function iniciaRelogio(){
    timer = setInterval(function() {                                   //set interval para somar +1 seg em loop
        segundos++;
        relogio.innerHTML = criahoraDosSegundos(segundos)
    }, 1000);
}

//iniciar
iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado')
    clearInterval(timer)
    iniciaRelogio()
});

//pausar
pausar.addEventListener('click', function(event) {
    clearInterval(timer)
    relogio.classList.add('pausado')
});

//zerar
zerar.addEventListener('click', function(event) {
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    segundos = 0;
});