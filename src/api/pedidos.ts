import http from './http'
import type { Pedido } from '../models/Pedido'

export async function listarPedidos(): Promise<Pedido[]> {
  const { data } = await http.get<Pedido[]>('/pedidos')
  return data
}

export async function criarPedido(pedido: Omit<Pedido, 'id'>): Promise<Pedido> {
  const { data } = await http.post<Pedido>('/pedidos', pedido)
  return data
}

export async function atualizarPedido(id: number, pedido: Partial<Pedido>): Promise<Pedido> {
  const { data } = await http.put<Pedido>(`/pedidos/${id}`, pedido)
  return data
}

export async function deletarPedido(id: number): Promise<void> {
  await http.delete(`/pedidos/${id}`)
}
