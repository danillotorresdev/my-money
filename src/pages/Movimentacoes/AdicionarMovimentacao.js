import React, { useState } from 'react'

const AdicionarMovimentacao = ({ salvarNovaMovimentacao }) => {
  //gestao form
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState();

  //arrumar o modal de edicao segunda-feira
  const salvarMovimentacao = async (dados) => {
    if (!isNaN(valor) && valor.search(/^[-]?\d+(\.)?\d+?$/) >= 0) {
      await salvarNovaMovimentacao({
        descricao,
        valor: parseFloat(valor)
      });
      setDescricao('')
      setValor(0);
    }
  }

  const onChangeDescricao = evt => {
    setDescricao(evt.target.value)
  }

  const onChangeValor = evt => {
    setValor(evt.target.value);
  }

  return (
    <tr>
      <td><input type="text" value={descricao} onChange={onChangeDescricao} /></td>
      <td>
        <input type="text" value={valor} onChange={onChangeValor} />
        <button className='btn btn-success' onClick={salvarMovimentacao}>+</button>
      </td>
    </tr>
  )
}

export default AdicionarMovimentacao