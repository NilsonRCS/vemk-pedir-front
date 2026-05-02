export interface Pedido {
  id?: number
  descricao: string
  quantidade: number
  status: 'PENDENTE' | 'EM_PREPARO' | 'ENTREGUE'
}
