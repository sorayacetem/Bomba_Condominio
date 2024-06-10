// const ligarBombas = document.querySelectorAll('[role=ligar-bomba]')
// const desligarBombas = document.querySelectorAll('[role=desligar-bomba]')





// ligarBombas.forEach(bomba => {
//     const bNome = bomba.name
//     bomba.onclick = () => {
//         window.bridge.events({
//             event: 'setBomba',
//             values: [
//                 bNome,
//                 1
//             ]
            
//         })
//     }
    
// })

// desligarBombas.forEach(bomba => {
//     const bNome = bomba.name
//     bomba.onclick = () => {
//         window.bridge.events({
//             event: 'setBomba',
//             values: [
//                 bNome,
//                 0
//             ]
//         })
//     }
// })


// // Adicione um identificador para os botões
// const ligarBotoes = document.querySelectorAll('[role="ligar-bomba"]');
// const desligarBotoes = document.querySelectorAll('[role="desligar-bomba"]');

// ligarBotoes.forEach(ligarBotao => {
//     ligarBotao.addEventListener('click', () => {
//         const nomeBomba = ligarBotao.getAttribute('name');
        
//         // Atualize o estado do botão de ligar
//         ligarBotao.classList.remove('Off');
//         ligarBotao.classList.add('On');

//         // Encontre o botão de desligar correspondente e atualize seu estado
//         const desligarBotaoCorrespondente = document.querySelector(`[role="desligar-bomba"][name="${nomeBomba}"]`);
//         desligarBotaoCorrespondente.classList.remove('offRed');
//         desligarBotaoCorrespondente.classList.add('Off');
        
//         // Aqui você pode adicionar a lógica adicional para o estado "Ligar"
//     });
// });

// // Adicione um evento de clique para cada botão de desligar
// desligarBotoes.forEach(desligarBotao => {
//     desligarBotao.addEventListener('click', () => {
//         const nomeBomba = desligarBotao.getAttribute('name');
        
//         // Atualize o estado do botão de desligar
//         desligarBotao.classList.remove('Off');
//         desligarBotao.classList.add('offRed');

//         // Encontre o botão de ligar correspondente e atualize seu estado
//         const ligarBotaoCorrespondente = document.querySelector(`[role="ligar-bomba"][name="${nomeBomba}"]`);
//         ligarBotaoCorrespondente.classList.remove('On');
//         ligarBotaoCorrespondente.classList.add('Off');
        
//         // Aqui você pode adicionar a lógica adicional para o estado "Desligar"
//     });
// });

//     function handleNivelBomba(nivel) {
//         for (let i = 1; i <= 6; i++) {
//             const nivelBaixo = nivel[`nivelBaixo_b${i}`];
//             const nivelMedio = nivel[`nivelMedio_b${i}`];
//             const nivelAlto = nivel[`nivelAlto_b${i}`];
    
//             const elementoBaixo = document.querySelector(`#nivelBaixo_b${i}`);
//             const elementoMedio = document.querySelector(`#nivelMedio_b${i}`);
//             const elementoAlto = document.querySelector(`#nivelAlto_b${i}`);
    
//             if (nivelBaixo === 1) {
//                 elementoBaixo.classList.add('On');
//             } else {
//                 elementoBaixo.classList.remove('On');
//             }
    
//             if (nivelMedio === 1) {
//                 elementoMedio.classList.add('On');
//             } else {
//                 elementoMedio.classList.remove('On');
//             }
    
//             if (nivelAlto === 1) {
//                 elementoAlto.classList.add('On');
//             } else {
//                 elementoAlto.classList.remove('On');
//             }
//         }
//     }

//const cmdbomba_1 = document.getElementById("cmdbomba_1");
// cmdbomba_1.onclick = () => {
//     window.bridge.events({
//         event: 'cmdBomba',
//         values: []
//     })  
// }

let btname
const popup = document.getElementById('popup_cmd_bomba');
const botaoBomba = document.querySelectorAll('.botaoBomba');
botaoBomba.forEach(botao => {
    botao.onclick = () => {
        popup.classList.remove('popup')
        popup.classList.add('popup2')   
        btname = botao.name
    }
   
})
const sim = document.getElementById('sim');
const nao = document.getElementById('nao');
sim.onclick = () => {
     window.bridge.events({
        event: 'cmdBomba',
        values: ['clp_1', btname, 1]
        
    }) 
    popup.classList.remove('popup2')
    popup.classList.add('popup') 
}
nao.onclick = () => {
    popup.classList.remove('popup2')
    popup.classList.add('popup') 
}

function handlebomba(bomba, valor) {
        const status = document.getElementById(`${bomba}_status`);
        const rele = document.getElementById(`${bomba}_rele`);
        const nivel = document.getElementById(`${bomba}_nivel`);
        

        if(status === null) return;
        if(rele === null) return;
       
        
        if (valor.STATUS === 1 && valor.TERMICO === 0) {
            status.classList.remove('imgVermelho');
            status.classList.add('imgVerde');

        }else if(valor.TERMICO === 1){
            status.classList.remove('imgVerde');
            status.classList.remove('imgCinza');
            status.classList.add('imgVermelho');
        }
        else{
            status.classList.remove('imgVermelho');
            status.classList.remove('imgVerde');
            status.classList.add('imgCinza');
        }
       
        
        if(valor.RELE === 1){
            rele.innerText = "FALTA DE FASE";
            rele.classList.add("corVermelha");

        }else{
            rele.innerText = "STATUS OK";
            rele.classList.remove("corVermelha");
        }

        if(valor.NIVEL_ALTO === 1){
            nivel.classList.remove("nivelBaixo");
            nivel.classList.add("nivelAlto");
            
        }else if(valor.NIVEL_ALTO === 0 && valor.NIVEL_BAIXO === 1){
            nivel.classList.remove("nivelAlto");
            nivel.classList.add("nivelBaixo");
        }else{
            nivel.classList.remove("nivelAlto");
            nivel.classList.remove("nivelBaixo");
        }
       


    }

function handletemperatura(bomba, valor){
        const temperatura = document.getElementById(`${bomba}_temperatura`);

        if(temperatura === null) return;

        temperatura.innerText = valor.TEMPERATURA + "º C";

    }

// Ler dados do servidor!
window.bridge.data((_, { type, payload }) => {
    if (payload.GRUPO === "BOMBA") {
        handlebomba(type, payload);
      }
      if (payload.GRUPO === "AJUSTE") {
        handletemperatura(type, payload);
      }
});

