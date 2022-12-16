const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}

]

const container = document.querySelector('.container')              //pegando a calsse do html
const div = document.createElement('div')                           //criando a div para acessar a const elemtnos


//criar o for para percorrer o array
for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];                 //fazer a desestruturação do objeto percorrendo linha a linha
    let tagCriada = document.createElement(tag); 
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);                        
}


container.appendChild(div);
