function handlealarmes(bomba, valor) {
  const termico_alarme = document.getElementById(`${bomba}_termico_alarme`);
  const rele_alarme = document.getElementById(`${bomba}_falta_de_fase_alarme`);
  const nivel_alarme = document.getElementById(`${bomba}_nivel_baixo_alarme`);

  if (termico_alarme === null) return;
  if (rele_alarme === null) return;
  if (nivel_alarme === null) return;

  // clp1
  if (bomba === "bomba1_1") {
    tag = "BB-01-01";
  }
  if (bomba === "bomba2_1") {
    tag = "BB-02-01";
  }
  if (bomba === "bomba3_1") {
    tag = "BB-03-01";
  }
  if (bomba === "bomba4_1") {
    tag = "BB-04-01";
  }
  if (bomba === "bomba5_1") {
    tag = "BB-05-01";
  }
  if (bomba === "bomba6_1") {
    tag = "BB-06-01";
  }
  // clp2
  if (bomba === "bomba1_2") {
    tag = "BB-01-02";
  }
  if (bomba === "bomba2_2") {
    tag = "BB-02-02";
  }
  if (bomba === "bomba3_2") {
    tag = "BB-03-02";
  }
  if (bomba === "bomba4_2") {
    tag = "BB-04-02";
  }
  if (bomba === "bomba5_2") {
    tag = "BB-05-02";
  }


  if (valor.TERMICO === 1) {
    termico_alarme.innerText = "X";
  } else {
    termico_alarme.innerText = "";
  }
  if (valor.RELE === 1) {
    rele_alarme.innerText = "X";
  } else {
    rele_alarme.innerText = "";
  }
  if (valor.NIVEL_BAIXO === 1) {
    nivel_alarme.innerText = "X";
  } else {
    nivel_alarme.innerText = "";
  }
}

window.bridge.data((_, { type, payload }) => {
  handlealarmes(type, payload);
});
