import React from 'react';
import Rest from './rest'

const baseUrl = 'https://mymoney-danillotorresdev.firebaseio.com/'

const { useGet, usePost, useDelete } = Rest(baseUrl)

function App() {
  const data = useGet('meses');
  // const [postData, post] = usePost('movimentacoes/2019-08')
  // const [deleteData, remove] = useDelete();

  const saveNew = () => {
    //post({ valor: 10, descricao: 'ola' });
  }

  const doRemove = () => {
    //remove('movimentacoes/2019-08/-LqNOsWQJZHvVIfgKPeX');
  }

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand">My money</a>
        </div>
      </nav>

      <div className="container">
        <h2>Adicionar mês</h2>
        <select>
          <option value='2019'>2019</option>
          <option value='2020'>2020</option>
        </select>
        <select>
          <option value='01'>01</option>
          <option value='02'>02</option>
        </select>
        <button>Adicionar Mes</button>

        {
          data.loading && <span>Carregando...</span>
        }
        {
          !data.loading && (
            <table className="table">
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
                          <td>{mes}</td>
                          <td>{data.data[mes].previsao_entrada}</td>
                          <td>{data.data[mes].entrada}</td>
                          <td>{data.data[mes].previsao_saida}</td>
                          <td>{data.data[mes].saida}</td>
                        </tr>
                      )
                    })
                }

              </tbody>
            </table>
          )
        }
        <pre>{JSON.stringify(data)}</pre>
      </div>

    </div>
  );
}

export default App;
