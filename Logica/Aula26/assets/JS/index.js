const form = document.querySelector('#form');

form.addEventListener('submit', function(event) {        //evendo para n atualizar o form
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');           //pegar campo do peso no html
    const inputAltura = event.target.querySelector('#altura');       //pegar campo do altura no html


    const peso = Number(inputPeso.value);                  //converte peso para numero
    const altura = Number(inputAltura.value);               // Converte altura para numero


    if (!peso) {
        setResultado('Peso Invalido', false);        //verifica se o peso e valido
        return;
    }

    if (!altura){
        setResultado('Altura Invalida', false);              //verifica se a altura e valida
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = gerNivelImc(imc)

    const msg = `Seu nivel IMC é ${imc} ${nivelImc}`

    setResultado(msg, true);                              //seta i IMC quando clica no botao


});


function gerNivelImc (imc) {
    const nivel = ['Abaixo do Peso', 'Peso normal', 'Sobrepeso', 'Obesidade 1', 'Obesidade 2', 'Obesidade 3']

    if (imc >= 39.9) return nivel[5]
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]                                    //IF para verificar qual nivel e peso do usuaio
    if (imc >= 18.5) return nivel[1]
    if (imc <= 18.5) return nivel[0]
    
}


function getImc (peso, altura) {
    const imc = peso / (altura ** altura)             //pega o peso e a altura, e faz a conversão do IMC
    return imc.toFixed(2);  //                        //retorna com 2 casas deciamsi
}



function criaP () {
    const p = document.createElement('p');                 
    return p;

}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');           //faz aparecer a msg depois que clica nho botao
    resultado.innerHTML = '';

    
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado')
    }else {
        p.classList.add('bad')
    }


    p.innerHTML = msg;
    resultado.appendChild(p)

}
