
function handleMedidor(medidor, valor){
    const corrente_r = document.getElementById(`${medidor}_corrente_R`);
    const corrente_s = document.getElementById(`${medidor}_corrente_S`);
    const corrente_t = document.getElementById(`${medidor}_corrente_T`);
    const tensao_r = document.getElementById(`${medidor}_tensao_R`);
    const tensao_s = document.getElementById(`${medidor}_tensao_S`);
    const tensao_t = document.getElementById(`${medidor}_tensao_T`);
    const tensao_rs = document.getElementById(`${medidor}_tensao_RS`);
    const tensao_st = document.getElementById(`${medidor}_tensao_ST`);
    const tensao_rt = document.getElementById(`${medidor}_tensao_RT`);
    const energia_ativa = document.getElementById(`${medidor}_E_total_ativa`);
    const energia_reativa = document.getElementById(`${medidor}_E_total_reativa`);
    const potencia_ativa = document.getElementById(`${medidor}_P_ativa_total`);
    const potencia_reativa = document.getElementById(`${medidor}_P_reativa_total`);
    const potencia_aparente = document.getElementById(`${medidor}_P_aparente_total`);
    const fator_potencia = document.getElementById(`${medidor}_f_potencia`);
    const frequencia = document.getElementById(`${medidor}_frequencia`);

    //corrente_r.value = valor.CORRENTE_R;
    if (energia_ativa === null) return;
    if (energia_reativa === null) return;
    if (potencia_ativa === null) return;
    if (potencia_reativa === null) return;
    if (potencia_aparente === null) return;
    if (fator_potencia === null) return;
    if (frequencia === null) return;

    corrente_r.innerText = valor.CORRENTE_R + " A";
    corrente_s.innerText = valor.CORRENTE_S + " A";
    corrente_t.innerText = valor.CORRENTE_T + " A";
    tensao_r.innerText = valor.TENSAO_R + " V";
    tensao_s.innerText = valor.TENSAO_S + " V";
    tensao_t.innerText = valor.TENSAO_T + " V";
    tensao_rs.innerText = valor.TENSAO_RS + " V";
    tensao_st.innerText = valor.TENSAO_ST + " V";
    tensao_rt.innerText = valor.TENSAO_RT + " V";
    energia_ativa.innerHTML = valor.ENERGIA_ATIVA;
    energia_reativa.innerHTML = valor.ENERGIA_REATIVA;
    potencia_ativa.innerHTML = valor.POTENCIA_ATIVA;
    potencia_reativa.innerHTML = valor.POTENCIA_REATIVA;
    potencia_aparente.innerHTML = valor.POTENCIA_APARENTE;
    fator_potencia.innerHTML = valor.FATOR_POTENCIA;
    frequencia.innerHTML = valor.FREQUENCIA;
}



window.bridge.data((_, { type, payload }) => {
    
    if (payload.GRUPO === "MEDIDOR") {
        handleMedidor(type, payload);
       
      }
 
  });


  
  
  
  
  
  
  











