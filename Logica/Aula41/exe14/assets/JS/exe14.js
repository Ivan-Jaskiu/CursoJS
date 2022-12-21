const inputTarefas = document.querySelector('.input-tarefa');
const btnTarefas = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefa');


//cria os filhos do UL. criando um pra cada atividade mandada
function criaLi() {
    const li = document.createElement('li');
    return li;
}

//pera tecla selecionada
inputTarefas.addEventListener('keypress', function(e) {
    if (e.keyCode === 13){
        if (!inputTarefas.value) return;
        criaTarefa(inputTarefas.value)  
    }
});


//cria um função para limpar o inout
function limpaInout() {
    inputTarefas.value = '';
    inputTarefas.focus()
}


//funçao para criar um botao de apagar linha
function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'Apagar essa tarefas');
    li.appendChild(botaoApagar)
}


//cria função para pegar o valor q tem dentro do inpuText
function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput
    tarefas.appendChild(li)
    limpaInout()
    criaBotaoApagar(li)
    salvarTarefa()
}


//cria evento para quando ao clicar ele n salva elemento vazio
btnTarefas.addEventListener('click', function() {
    if (!inputTarefas.value) return;
    criaTarefa(inputTarefas.value)
})

//pega o elemento e apaga a alinha
document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')){
        el.parentElement.remove();                                      //verifica o pai do elemento que nesse caso e o LI e remove
        salvarTarefa()                                                  //faz com que quando apaga, ele apaga no Storage tambem
    }
})


//função para pegar todos os 'li'
function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []
    
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;                                    //cria uma variavel q pega o texto dentro do 'input'
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()                      //cria a variavel dela msm para n aparecer mais o campo 'apagar
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefaJSON = JSON.stringify(listaDeTarefas)                          //cria um json para salvar as listas de tarefas
    localStorage.setItem('tarefa', tarefaJSON)                                 //salva do navegador todo o array de tarefa

}


function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefa');
    const listaDeTarefas = JSON.parse(tarefas);                            //.parse converte novamente o JSON para um array

    for(let tarefa of listaDeTarefas) {                                    //faz um for percorrendo todas as listas do array
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas()
