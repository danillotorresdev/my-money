import React from 'react'

import { Link, Redirect } from 'react-router-dom'
import Rest from '../../utils/rest'

const baseUrl = 'https://mymoney-danillotorresdev.firebaseio.com/'

const { useGet } = Rest(baseUrl)

const Meses = () => {
  const data = useGet('meses');

  if (data.loading) {
    return <span>Carregando...</span>
  }

  if (data.error && data.error === 'Permission denied') {
    return <Redirect to='/login' />
  }
  if (Object.keys(data.data).length > 0) {
    return (

      <table className="table" >
        <thead>
          <tr>
            <td>Mês</td>
            <td>Previsão de entrada</td>
            <td>Entrada</td>
            <td>Previsão de saída</td>
            <td>Saída</td>
          </tr>
        </thead>
        <tbody>
          {
            // extrai as chaves 
            Object
              .keys(data.data)
              .map(mes => {
                return (
                  <tr key={data.data}>
                    <td><Link to={`/movimentacoes/${mes}`}>{mes}</Link></td>
                    <td>{data.data[mes].previsao_entrada}</td>
                    <td>{data.data[mes].entradas}</td>
                    <td>{data.data[mes].previsao_saida}</td>
                    <td>{data.data[mes].saidas}</td>
                  </tr>
                )
              })
          }

        </tbody>
      </table >
    );
  }
  return null
}

export default Meses