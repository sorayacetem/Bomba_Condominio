

const bombarst = document.querySelectorAll(".reset");
bombarst.forEach(botao => {
  botao.onclick = () => {    
    btname = botao.name;
    window.bridge.events({
      event: "BombaRst",
      values: ["clp_1", btname, 1],
    });    
  };
});


function handlebomba(bomba, valor) {
  const status = document.getElementById(`${bomba}_status`);
  const rele = document.getElementById(`${bomba}_rele`);
  const nivel = document.getElementById(`${bomba}_nivel`);

  if (status === null) return;
  if (rele === null) return;

  if (valor.STATUS === 1 && valor.TERMICO === 0) {
    status.classList.remove("imgVermelho");
    status.classList.add("imgVerde");
  } else if (valor.TERMICO === 1) {
    status.classList.remove("imgVerde");
    status.classList.remove("imgCinza");
    status.classList.add("imgVermelho");
  } else {
    status.classList.remove("imgVermelho");
    status.classList.remove("imgVerde");
    status.classList.add("imgCinza");
  }

  if (valor.RELE === 1) {
    rele.innerText = "FALTA DE FASE";
    rele.classList.add("corVermelha");
  } else {
    rele.innerText = "STATUS OK";
    rele.classList.remove("corVermelha");
  }

  if (valor.NIVEL_ALTO === 1) {
    nivel.classList.remove("nivelBaixo");
    nivel.classList.add("nivelAlto");
  } else if (valor.NIVEL_ALTO === 0 && valor.NIVEL_BAIXO === 1) {
    nivel.classList.remove("nivelAlto");
    nivel.classList.add("nivelBaixo");
  } else {
    nivel.classList.remove("nivelAlto");
    nivel.classList.remove("nivelBaixo");
  }
}

function handleajuste(bomba, valor) {
    
  const horimetro = document.getElementById(`${bomba}_horimetro`);
  const consumo = document.getElementById(`${bomba}_consumo`);
  const partida_24 = document.getElementById(`${bomba}_partidas_24`);
  const partida_mes = document.getElementById(`${bomba}_partidas_mes`);
  if(horimetro === null) return;
  if(consumo === null) return;
  if(partida_24 === null) return;
  if(partida_mes === null) return;

  horimetro.innerText = valor.HORIMETRO;
  consumo.innerText = valor.CONSUMO;
  partida_24.innerText = valor.PARTIDA_24;
  partida_mes.innerText = valor.PARTIDA_MES;
}

// Ler dados do servidor!
window.bridge.data((_, { type, payload }) => {
 
  if (payload.GRUPO === "BOMBA") {
    handlebomba(type, payload);
  }
  if (payload.GRUPO === "AJUSTE") {
    handleajuste(type, payload);
  }
  
});


function reset(id){
  //id.RESET = 1
  console.log(id.RESET)
}