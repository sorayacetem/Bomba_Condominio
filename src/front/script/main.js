const estadoSpan = document.getElementById('estado')
const velocidadeSpan = document.getElementById('velocidade')
const ligarBombaButton = document.getElementById('ligar-bomba')
const nivelBaixo = document.querySelectorAll('nivelBaixo')    
const nivelMedio = document.querySelectorAll('nivelMedio')    
const nivelAlto = document.querySelectorAll('nivelAlto')  

// Recebe os dados da aplicação
window.bridge.data((_, {type, payload}) => {
    // Type é o tipo do dado e payload é o valor
    if (type === 'estadoBomba') {
        estadoSpan.innerText = payload === 1 ? 'Ligada' : 'Desligada'
    }

    if (type === 'velocidade') {
         velocidadeSpan.innerText =`${payload} rpm`
    }

})

// function handleNivelBaixo(){
//     if(nivelBaixo === 1){
//         nivelBaixo.classList.add('on')
//     }else{
        
//     }
// }
// function handleNivelMedio(){
//     if(nivelMedio === 1){
//         nivelMedio.classList.add('on')
//     }else{
        
//     }
// }
// function handleNivelAlto(){
//     if(nivelAlto === 1){
//         nivelAlto.classList.add('on')
//     }else{
        
//     }
// }

// ligarBombaButton.onclick = () => {
//     estadoSpan.innerText = 'Ligando...'

//     // Enviando para a aplicação o clique do botão
//     // window.bridge.events envia eventos da tela para aplicação
//     // event é o tipo do evento e values é o valor gerado do evento
//     window.bridge.events({
//         event: 'ligarBomba',
//         values: []
//     })
// }
