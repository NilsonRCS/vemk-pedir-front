import http from './http'
import type { Pedido, NovoPedido } from '../models/Pedido'

export async function listarPedidos(): Promise<Pedido[]> {
  const { data } = await http.get<Pedido[]>('/pedidos')
  return data
}

export async function buscarPedido(id: number): Promise<Pedido> {
  const { data } = await http.get<Pedido>(`/pedido/${id}`)
  return data
}

export async function criarPedido(pedido: NovoPedido): Promise<Pedido> {
  const { data } = await http.post<Pedido>('/pedido', pedido)
  return data
}
