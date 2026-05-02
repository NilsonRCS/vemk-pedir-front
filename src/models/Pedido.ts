export interface PedidoItem {
  produto: string
  quantidade: number
}

export interface Pedido {
  id: number
  textoOriginal: string
  cliente: string | null
  dataEntrega: string | null   // "YYYY-MM-DD" ou null
  itens: PedidoItem[]
  createdAt: string            // "YYYY-MM-DDTHH:mm:ss"
}

// Apenas textoOriginal é obrigatório; cliente e dataEntrega são opcionais
// (a IA tenta extrair do texto quando ausentes)
export interface NovoPedido {
  textoOriginal: string
  cliente?: string
  dataEntrega?: string
}
