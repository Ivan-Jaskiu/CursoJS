// ? ;

const pontuacaoUsuario = 1100;       //condiçao do ternario: A primeira mostra a verdadeira, caso contrario retorna algo falso
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario n VIP';   

const corUsuario = null;
const corPadrao = corUsuario || 'preta'      //Retorna ao usuario se caso dor nulo a 'corusuario' retorna sempre o proximo verdadeiro

console.log(nivelUsuario, corPadrao)
