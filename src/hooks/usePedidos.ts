import { useEffect, useState } from 'react'
import axios from 'axios'
import { listarPedidos, criarPedido } from '../api/pedidos'
import type { Pedido, NovoPedido } from '../models/Pedido'

function mensagemErro(err: unknown): string {
  if (axios.isAxiosError(err)) {
    const status = err.response?.status
    const msg = err.response?.data
    if (status === 400) return typeof msg === 'string' ? msg : 'Dados inválidos. Verifique o pedido.'
    if (status === 401) return 'Não autorizado. Verifique as credenciais.'
    if (status === 500) return 'Erro no servidor. Tente novamente em instantes.'
  }
  return 'Erro inesperado.'
}

export function usePedidos() {
  const [pedidos, setPedidos] = useState<Pedido[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function carregar() {
    setLoading(true)
    setError(null)
    try {
      const data = await listarPedidos()
      setPedidos(data)
    } catch (err) {
      setError(mensagemErro(err))
    } finally {
      setLoading(false)
    }
  }

  async function adicionar(pedido: NovoPedido) {
    setError(null)
    try {
      const novo = await criarPedido(pedido)
      setPedidos((prev) => [...prev, novo])
    } catch (err) {
      setError(mensagemErro(err))
      throw err
    }
  }

  useEffect(() => {
    carregar()
  }, [])

  return { pedidos, loading, error, adicionar, recarregar: carregar }
}
