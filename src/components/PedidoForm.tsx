import { useState } from 'react'
import './PedidoForm.css'
import type { NovoPedido } from '../models/Pedido'

interface Props {
  onSubmit: (pedido: NovoPedido) => Promise<void>
}

export function PedidoForm({ onSubmit }: Props) {
  const [textoOriginal, setTextoOriginal] = useState('')
  const [cliente, setCliente] = useState('')
  const [dataEntrega, setDataEntrega] = useState('')

  const invalid = textoOriginal.trim() === ''

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const pedido: NovoPedido = { textoOriginal }
    if (cliente.trim()) pedido.cliente = cliente.trim()
    if (dataEntrega) pedido.dataEntrega = dataEntrega
    try {
      await onSubmit(pedido)
      setTextoOriginal('')
      setCliente('')
      setDataEntrega('')
    } catch {
      // onSubmit já registrou o erro — não limpa o form
    }
  }

  return (
    <form className="pedido-form" onSubmit={handleSubmit}>
      <label className="pedido-form__label">
        Descreva o pedido <span className="pedido-form__required"></span>
        <textarea
          className="pedido-form__input pedido-form__textarea"
          placeholder="Ex: 2 pizzas de calabresa e 3 sucos de laranja"
          value={textoOriginal}
          onChange={(e) => setTextoOriginal(e.target.value)}
          rows={2}
          required
        />
      </label>
      <div className="pedido-form__row">
        <label className="pedido-form__label">
          Seu nome
          <input
            className="pedido-form__input"
            type="text"
            placeholder="Ex: João Silva"
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
          />
        </label>
        <label className="pedido-form__label">
          Data para entrega
          <input
            className="pedido-form__input"
            type="date"
            value={dataEntrega}
            onChange={(e) => setDataEntrega(e.target.value)}
          />
        </label>
        <button
          className={`pedido-form__btn${invalid ? ' pedido-form__btn--invalid' : ''}`}
          type="submit"
          disabled={invalid}
        >
          Adicionar
        </button>
      </div>
    </form>
  )
}
