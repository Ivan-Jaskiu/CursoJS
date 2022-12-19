const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body);                         //saber qual e a cor de fundo
const backgroundColorBody = estilosBody.backgroundColor                      //pega a cor do fundo e falta variavel 


for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;                  //colocar a cor de fundo
    p.style.color = '#ffffff'                                       //colcoa a cor nas letras
}