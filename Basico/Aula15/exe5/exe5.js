const numero = Number(prompt('Digite um numero'));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;
texto.innerHTML += '';
texto.innerHTML += `<p>raiz quadrada é ${numero ** 0.5}</p>`
texto.innerHTML += `<p>é inteiro?: ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p> É NaN: ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p>Arredondado pra baixo ${Math.floor(numero)} </p>`
texto.innerHTML += `<p>Arredondado pra cima ${Math.ceil(numero)} </p>`
texto.innerHTML += `<p> Com duas cadas decimais ${numero.toFixed(2)} </p>`