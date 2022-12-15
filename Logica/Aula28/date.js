const tresHoras = 60 * 60 * 3 * 1000   //calcular 3 horas
const umDia = 60 * 60 * 24 * 1000      //calcular 1 dia


const data1 = new Date(2019, 3, 20, 15, 14, 27);     //pega ano/mes/dia    hora/minuto/segundo


const data2 = new Date('2019-04-20 20:20:59')        //pegar hora, jeito mais simples
console.log(data2.toString());



console.log('dia', data2.getDate());
console.log('mes', data2.getMonth());          //começa do zero
console.log('ano', data2.getFullYear());
console.log('hora', data2.getHours());
console.log('min', data2.getMinutes());
console.log('seg', data2.getSeconds());
console.log('ms', data2.getMilliseconds());
console.log('dia semana', data2.getDay());          //0 - domingo  6 - sabado


function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}


//function para pegar data atual
function formataData(data) {
    const dia = data.zeroAEsquerda(getDate());
    const mes = data.zeroAEsquerda(getMonth() + 1);
    const ano = data.zeroAEsquerda(getFullYear());
    const horas = data.zeroAEsquerda(getHours());
    const minuto = data.zeroAEsquerda(getMinutes());
    const seg = data.zeroAEsquerda(getSeconds());

    return `${dia}/${mes}/${ano} ${horas}:${minuto}:${seg}`;
}

const data = new Date()
const dataBrazil = formataData(data)
formataData(dataBrazil)