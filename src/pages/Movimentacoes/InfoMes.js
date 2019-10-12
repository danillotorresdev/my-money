import React from 'react'
import { useMesApi } from '../../api'

const InfoMes = ({ data }) => {
  const { infoMes, alterarMes } = useMesApi(data);
  const alterarPrevisaoEntrada = (evt) => {
    alterarMes({ previsao_entrada: evt.target.value })
  }
  const alterarPrevisaoSaida = (evt) => {
    alterarMes({ previsao_saida: evt.target.value })
  }

  if (infoMes.isLoading) {
    return <p>Carregando dados do mês...</p>
  }
  if (infoMes.data) {
    return (
      <div>
        <span> Previsāo de entrada: {infoMes.data.previsao_entrada} </span> <input type="text" onBlur={alterarPrevisaoEntrada} /> /
              Previsāo de saída: {infoMes.data.previsao_saida} <input type="text" onBlur={alterarPrevisaoSaida} /><br />
        Entradas: {infoMes.data.entradas} /
            Saídas: {infoMes.data.saidas}
      </div>
    )
  }
  return null

}

export default InfoMes