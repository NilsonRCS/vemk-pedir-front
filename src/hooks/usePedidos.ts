import { useEffect, useState } from 'react'
import { listarPedidos, criarPedido, deletarPedido } from '../api/pedidos'
import type { Pedido } from '../models/Pedido'

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
    } catch {
      setError('Falha ao carregar pedidos.')
    } finally {
      setLoading(false)
    }
  }

  async function adicionar(pedido: Omit<Pedido, 'id'>) {
    try {
      const novo = await criarPedido(pedido)
      setPedidos((prev) => [...prev, novo])
    } catch {
      setError('Falha ao criar pedido.')
    }
  }

  async function remover(id: number) {
    try {
      await deletarPedido(id)
      setPedidos((prev) => prev.filter((p) => p.id !== id))
    } catch {
      setError('Falha ao remover pedido.')
    }
  }

  useEffect(() => {
    carregar()
  }, [])

  return { pedidos, loading, error, adicionar, remover, recarregar: carregar }
}
