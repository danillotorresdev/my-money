import Rest from '../utils/rest'

const baseUrl = 'https://mymoney-danillotorresdev.firebaseio.com/'

const { useGet, usePost, useDelete, usePatch } = Rest(baseUrl)

export const useMesApi = (data) => {
  const infoMeses = useGet(`meses/${data}`)
  const [dataPatch, alterarMes] = usePatch(`meses/${data}`)
  return { infoMeses, alterarMes }
}

export const useMovimentacaoApi = (data) => {
  const movimentacoes = useGet(`movimentacoes/${data}`)
  const [postData, salvarNovaMovimentacao] = usePost(`movimentacoes/${data}`)
  const [removeData, removerMovimentacao] = useDelete();
  return { movimentacoes, salvarNovaMovimentacao, removerMovimentacao }
}
