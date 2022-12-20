//primeira versão
function ePaisagem(altura, largura) {
    if (altura > largura) {
        console.log("True")
    } else {
        console.log("False")
    }
}
ePaisagem(1080, 1920)


//segunda versão
const ePaisagem1 = (altura1, largura1) => altura1 > largura1 ? 'True' : 'False'
ePaisagem(1820,1080)
