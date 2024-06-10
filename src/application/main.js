const CETEMSup = require("./CETEMSup");
const { inserirSeMaisQueXmin } = require("./services/bombasDadosServices");
const bombasService = require('./services/bombas')

class Main extends CETEMSup {
  // Declare sua variável aqui!
  eventoDisparado = false; // Boolean

  // Executa quando inicia o programa
  constructor() {
    super(); // Obrigatório

    this.cmdBomba.bind(this);
    this.BombaRst.bind(this);
  }

  cmdBomba(values) {
    const [clp, coil, value] = values;
    this.writeCoil(clp, coil, value); // Seta o botão para zero (Pulso)

    //this.writeHoldingRegister(VELOCIDADE, 10) // Define a velocidade da bomba para 10

    //const self = this
    // const i = setTimeout(() => {
    //    self.writeHoldingRegister(VELOCIDADE, 50) // Definir velocidade da bomba para 50
    //     clearTimeout(i)
    // }, 5000)
  }
  BombaRst(values) {
    console.log(values)
    const [clp, coil, value] = values;
    this.writeCoil(clp, coil, value); // Seta o botão para zero (Pulso)

    //this.writeHoldingRegister(VELOCIDADE, 10) // Define a velocidade da bomba para 10

    //const self = this
    // const i = setTimeout(() => {
    //    self.writeHoldingRegister(VELOCIDADE, 50) // Definir velocidade da bomba para 50
    //     clearTimeout(i)
    // }, 5000)
  }

  // Disparar todas as vezes que ler os dados de Coil

  handleCoils(clp, coils) {
    console.log(clp);
    if (clp === "clp_1") {
      this.sendData("bomba1_1", {
        STATUS: coils.status_b1_clp_1,
        TERMICO: coils.termico_b1_clp_1,
        NIVEL_BAIXO: coils.n_baixo_b1_clp_1,
        NIVEL_ALTO: coils.n_alto_b1_clp_1,
        RELE: coils.n_rele_b1_clp_1,
        RESET: coils.cmd_reset_b1_clp_1,
        GRUPO: 'BOMBA'
      });
      this.sendData("bomba2_1", {
        STATUS: coils.status_b2_clp_1,
        TERMICO: coils.termico_b2_clp_1,
        NIVEL_BAIXO: coils.n_baixo_b2_clp_1,
        NIVEL_ALTO: coils.n_alto_b2_clp_1,
        RELE: coils.n_rele_b2_clp_1,
        RESET: coils.cmd_reset_b2_clp_1,
        GRUPO: 'BOMBA'
      });
      this.sendData("bomba3_1", {
        STATUS: coils.status_b3_clp_1,
        TERMICO: coils.termico_b3_clp_1,
        NIVEL_BAIXO: coils.n_baixo_b3_clp_1,
        NIVEL_ALTO: coils.n_alto_b3_clp_1,
        RELE: coils.n_rele_b3_clp_1,
        RESET: coils.cmd_reset_b3_clp_1,
        GRUPO: 'BOMBA'
      });
      this.sendData("bomba4_1",  {
        STATUS: coils.status_b4_clp_1,
        TERMICO: coils.termico_b4_clp_1,
        NIVEL_BAIXO: coils.n_baixo_b4_clp_1,
        NIVEL_ALTO: coils.n_alto_b4_clp_1,
        RELE: coils.n_rele_b4_clp_1,
        RESET: coils.cmd_reset_b4_clp_1,
        GRUPO: 'BOMBA'
      });
      this.sendData("bomba5_1", {
        STATUS: coils.status_b5_clp_1,
        TERMICO: coils.termico_b5_clp_1,
        NIVEL_BAIXO: coils.n_baixo_b5_clp_1,
        NIVEL_ALTO: coils.n_alto_b5_clp_1,
        RELE: coils.n_rele_b5_clp_1,
        RESET: coils.cmd_reset_b5_clp_1,
        GRUPO: 'BOMBA'
      });
      this.sendData("bomba6_1", {
        STATUS: coils.status_b6_clp_1,
        TERMICO: coils.termico_b6_clp_1,
        NIVEL_BAIXO: coils.n_baixo_b6_clp_1,
        NIVEL_ALTO: coils.n_alto_b6_clp_1,
        RELE: coils.n_rele_b6_clp_1,
        RESET: coils.cmd_reset_b6_clp_1,
        GRUPO: 'BOMBA'
      });
    }
    else if(clp === "clp_2") {
      this.sendData("bomba1_2", {
        STATUS: coils.status_b1_clp_2,
        TERMICO: coils.termico_b1_clp_2,
        NIVEL_BAIXO: coils.n_baixo_b1_clp_2,
        NIVEL_ALTO: coils.n_alto_b1_clp_2,
        RELE: coils.n_rele_b1_clp_2,
        RESET: coils.cmd_reset_b1_clp_2,
        GRUPO: 'BOMBA'
      });
      this.sendData("bomba2_2", {
        STATUS: coils.status_b2_clp_2,
        TERMICO: coils.termico_b2_clp_2,
        NIVEL_BAIXO: coils.n_baixo_b2_clp_2,
        NIVEL_ALTO: coils.n_alto_b2_clp_2,
        RELE: coils.n_rele_b2_clp_2,
        RESET: coils.cmd_reset_b2_clp_2,
        GRUPO: 'BOMBA'
      });
      this.sendData("bomba3_2", {
        STATUS: coils.status_b3_clp_2,
        TERMICO: coils.termico_b3_clp_2,
        NIVEL_BAIXO: coils.n_baixo_b3_clp_2,
        NIVEL_ALTO: coils.n_alto_b3_clp_2,
        RELE: coils.n_rele_b3_clp_2,
        RESET: coils.cmd_reset_b3_clp_2,
        GRUPO: 'BOMBA'
      });
      this.sendData("bomba4_2",  {
        STATUS: coils.status_b4_clp_2,
        TERMICO: coils.termico_b4_clp_2,
        NIVEL_BAIXO: coils.n_baixo_b4_clp_2,
        NIVEL_ALTO: coils.n_alto_b4_clp_2,
        RELE: coils.n_rele_b4_clp_2,
        RESET: coils.cmd_reset_b4_clp_2,
        GRUPO: 'BOMBA'
      });
      this.sendData("bomba5_2", {
        STATUS: coils.status_b5_clp_2,
        TERMICO: coils.termico_b5_clp_2,
        NIVEL_BAIXO: coils.n_baixo_b5_clp_2,
        NIVEL_ALTO: coils.n_alto_b5_clp_2,
        RELE: coils.n_rele_b5_clp_2,
        RESET: coils.cmd_reset_b5_clp_2,
        GRUPO: 'BOMBA'
      });
    }
    // this.sendData("clp_2",'bomba1_2', {
    //     STATUS: coils.status_b1_clp_1,
    //     TERMICO: coils.termico_b1_clp_1,
    //     NIVEL_BAIXO: coils.n_alto_b1_clp_1,
    //     NIVEL_ALTO: coils.n_alto_b1_clp_1,
    //     RELE: coils.n_rele_b1_clp_1
    // })
  }

  //Disparar todas as vezes que ler os dados de HR

  handleHoldingRegisters(clp, registers) {
    // this.sendData('clp_1', 'bomba1_vazao_1', registers.vazao_b1_clp_1)
    if (clp === "clp_1") {
      this.sendData("bomba1_1_r", {
        HORIMETRO: registers.horimetro_b1_clp_1,
        PARTIDA_24: registers.partida_mes_b1_clp_1,
        PARTIDA_MES: registers.partida_24_b1_clp_1,
        CONSUMO: registers.consumo_b1_clp_1,
        TEMPERATURA: registers.temperatura_b1_clp_1,
        GRUPO: 'AJUSTE'
      });
      inserirSeMaisQueXmin({
        bombaId: 'bomba1_1', 
        horasFuncionamento: registers.horimetro_b1_clp_1,
        consumo: registers.consumo_b1_clp_1,
        partidas24: registers.partida_24_b1_clp_1,
        partidasMes: registers.partida_24_b1_clp_1
      })
      this.sendData("bomba2_1_r", {
        HORIMETRO: registers.horimetro_b2_clp_1,
        PARTIDA_24: registers.partida_mes_b2_clp_1,
        PARTIDA_MES: registers.partida_24_b2_clp_1,
        CONSUMO: registers.consumo_b2_clp_1,
        TEMPERATURA: registers.temperatura_b2_clp_1,
        GRUPO: 'AJUSTE'
      });
      inserirSeMaisQueXmin({
        bombaId: 'bomba2_1', 
        horasFuncionamento: registers.horimetro_b2_clp_1,
        consumo: registers.consumo_b2_clp_1,
        partidas24: registers.partida_24_b2_clp_1,
        partidasMes: registers.partida_24_b2_clp_1
      })
      this.sendData("bomba3_1_r", {
        HORIMETRO: registers.horimetro_b3_clp_1,
        PARTIDA_24: registers.partida_mes_b3_clp_1,
        PARTIDA_MES: registers.partida_24_b3_clp_1,
        CONSUMO: registers.consumo_b3_clp_1,
        TEMPERATURA: registers.temperatura_b3_clp_1,
        GRUPO: 'AJUSTE'
      });
      inserirSeMaisQueXmin({
        bombaId: 'bomba3_1', 
        horasFuncionamento: registers.horimetro_b3_clp_1,
        consumo: registers.consumo_b3_clp_1,
        partidas24: registers.partida_24_b3_clp_1,
        partidasMes: registers.partida_24_b3_clp_1
      })
      this.sendData("bomba4_1_r", {
        HORIMETRO: registers.horimetro_b4_clp_1,
        PARTIDA_24: registers.partida_mes_b4_clp_1,
        PARTIDA_MES: registers.partida_24_b4_clp_1,
        CONSUMO: registers.consumo_b4_clp_1,
        TEMPERATURA: registers.temperatura_b4_clp_1,
        GRUPO: 'AJUSTE'
      });
      inserirSeMaisQueXmin({
        bombaId: 'bomba4_1', 
        horasFuncionamento: registers.horimetro_b4_clp_1,
        consumo: registers.consumo_b4_clp_1,
        partidas24: registers.partida_24_b4_clp_1,
        partidasMes: registers.partida_24_b4_clp_1
      })
      this.sendData("bomba5_1_r", {
        HORIMETRO: registers.horimetro_b5_clp_1,
        PARTIDA_24: registers.partida_mes_b5_clp_1,
        PARTIDA_MES: registers.partida_24_b5_clp_1,
        CONSUMO: registers.consumo_b5_clp_1,
        TEMPERATURA: registers.temperatura_b5_clp_1,
        GRUPO: 'AJUSTE'
      });
      inserirSeMaisQueXmin({
        bombaId: 'bomba5_1', 
        horasFuncionamento: registers.horimetro_b5_clp_1,
        consumo: registers.consumo_b5_clp_1,
        partidas24: registers.partida_24_b5_clp_1,
        partidasMes: registers.partida_24_b5_clp_1
      })
      this.sendData("bomba6_1_r", {
        HORIMETRO: registers.horimetro_b6_clp_1,
        PARTIDA_24: registers.partida_mes_b6_clp_1,
        PARTIDA_MES: registers.partida_24_b6_clp_1,
        CONSUMO: registers.consumo_b6_clp_1,
        TEMPERATURA: registers.temperatura_b6_clp_1,
        GRUPO: 'AJUSTE'
      });
      inserirSeMaisQueXmin({
        bombaId: 'bomba6_1', 
        horasFuncionamento: registers.horimetro_b6_clp_1,
        consumo: registers.consumo_b6_clp_1,
        partidas24: registers.partida_24_b6_clp_1,
        partidasMes: registers.partida_24_b6_clp_1
      })
      this.sendData("medidor_1", {
        TENSAO_R: registers.tensao_r,
        TENSAO_S: registers.tensao_s,
        TENSAO_T: registers.tensao_t,
        TENSAO_RS: registers.tensao_rs,
        TENSAO_ST: registers.tensao_st,
        TENSAO_RT: registers.tensao_rt,
        CORRENTE_R: registers.corrente_r,
        CORRENTE_S: registers.corrente_s,
        CORRENTE_T: registers.corrente_t,
        ENERGIA_ATIVA: registers.energia_ativa_m1,
        ENERGIA_REATIVA: registers.energia_reativa_m1,
        POTENCIA_ATIVA: registers.potencia_ativa_m1,
        POTENCIA_REATIVA: registers.potencia_reativa_m1,
        POTENCIA_APARENTE: registers.potencia_aparente_m1,
        FATOR_POTENCIA: registers.fator_potencia_m1,
        FREQUENCIA: registers.frequencia_m1,
        GRUPO: 'MEDIDOR'
      });
     
    }
    else if (clp === "clp_2") {
      this.sendData("bomba1_2_r", {
        HORIMETRO: registers.horimetro_b1_clp_2,
        PARTIDA_24: registers.partida_mes_b1_clp_2,
        PARTIDA_MES: registers.partida_24_b1_clp_2,
        CONSUMO: registers.consumo_b1_clp_2,
        TEMPERATURA: registers.temperatura_b1_clp_2,
        GRUPO: 'AJUSTE'
      });
      inserirSeMaisQueXmin({
        bombaId: 'bomba1_2', 
        horasFuncionamento: registers.horimetro_b1_clp_2,
        consumo: registers.consumo_b1_clp_2,
        partidas24: registers.partida_24_b1_clp_2,
        partidasMes: registers.partida_24_b1_clp_2
      })
      this.sendData("bomba2_2_r", {
        HORIMETRO: registers.horimetro_b2_clp_2,
        PARTIDA_24: registers.partida_mes_b2_clp_2,
        PARTIDA_MES: registers.partida_24_b2_clp_2,
        CONSUMO: registers.consumo_b2_clp_2,
        TEMPERATURA: registers.temperatura_b2_clp_2,
        GRUPO: 'AJUSTE'
      });
      inserirSeMaisQueXmin({
        bombaId: 'bomba2_2', 
        horasFuncionamento: registers.horimetro_b2_clp_2,
        consumo: registers.consumo_b2_clp_2,
        partidas24: registers.partida_24_b2_clp_2,
        partidasMes: registers.partida_24_b2_clp_2
      })
      this.sendData("bomba3_2_r", {
        HORIMETRO: registers.horimetro_b3_clp_2,
        PARTIDA_24: registers.partida_mes_b3_clp_2,
        PARTIDA_MES: registers.partida_24_b3_clp_2,
        CONSUMO: registers.consumo_b3_clp_2,
        TEMPERATURA: registers.temperatura_b3_clp_2,
        GRUPO: 'AJUSTE'
      });
      inserirSeMaisQueXmin({
        bombaId: 'bomba3_2', 
        horasFuncionamento: registers.horimetro_b3_clp_2,
        consumo: registers.consumo_b3_clp_2,
        partidas24: registers.partida_24_b3_clp_2,
        partidasMes: registers.partida_24_b3_clp_2
      })
      this.sendData("bomba4_2_r", {
        HORIMETRO: registers.horimetro_b4_clp_2,
        PARTIDA_24: registers.partida_mes_b4_clp_2,
        PARTIDA_MES: registers.partida_24_b4_clp_2,
        CONSUMO: registers.consumo_b4_clp_2,
        TEMPERATURA: registers.temperatura_b4_clp_2,
        GRUPO: 'AJUSTE'
      });
      inserirSeMaisQueXmin({
        bombaId: 'bomba4_2', 
        horasFuncionamento: registers.horimetro_b4_clp_2,
        consumo: registers.consumo_b4_clp_2,
        partidas24: registers.partida_24_b4_clp_2,
        partidasMes: registers.partida_24_b4_clp_2
      })
      this.sendData("bomba5_2_r", {
        HORIMETRO: registers.horimetro_b5_clp_2,
        PARTIDA_24: registers.partida_mes_b5_clp_2,
        PARTIDA_MES: registers.partida_24_b5_clp_2,
        CONSUMO: registers.consumo_b5_clp_2,
        TEMPERATURA: registers.temperatura_b5_clp_2,
        GRUPO: 'AJUSTE'
      });
      inserirSeMaisQueXmin({
        bombaId: 'bomba5_2', 
        horasFuncionamento: registers.horimetro_b5_clp_2,
        consumo: registers.consumo_b5_clp_2,
        partidas24: registers.partida_24_b5_clp_2,
        partidasMes: registers.partida_24_b5_clp_2
      })
      this.sendData("medidor_2", {
        TENSAO_R: registers.tensao_r,
        TENSAO_S: registers.tensao_s,
        TENSAO_T: registers.tensao_t,
        TENSAO_RS: registers.tensao_rs,
        TENSAO_ST: registers.tensao_st,
        TENSAO_RT: registers.tensao_rt,
        CORRENTE_R: registers.corrente_r,
        CORRENTE_S: registers.corrente_s,
        CORRENTE_T: registers.corrente_t,
        ENERGIA_ATIVA: registers.energia_ativa_m2,
        ENERGIA_REATIVA: registers.energia_reativa_m2,
        POTENCIA_ATIVA: registers.potencia_ativa_m2,
        POTENCIA_REATIVA: registers.potencia_reativa_m2,
        POTENCIA_APARENTE: registers.potencia_aparente_m2,
        FATOR_POTENCIA: registers.fator_potencia_m2,
        FREQUENCIA: registers.frequencia_m2,
        GRUPO: 'MEDIDOR'
      });
     
    }

    // bombasService.listarTodos().then(console.log).catch(console.error)
   
  }

  // Dispara todas as vezes que um evento é executado na tela
  handleEvents(event, values) {
    if (event === "cmdBomba") {
      this.cmdBomba(values);
    }
    if (event === "BombaRst") {
      this.BombaRst(values);
    }
  }
}

module.exports = Main;
