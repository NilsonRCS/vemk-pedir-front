import { useState } from 'react'
import './PedidoForm.css'
import type { Pedido } from '../models/Pedido'

interface Props {
  onSubmit: (pedido: Omit<Pedido, 'id'>) => Promise<void>
}

export function PedidoForm({ onSubmit }: Props) {
  const [descricao, setDescricao] = useState('')
  const [quantidade, setQuantidade] = useState<number | ''>('')

  const MAX_QTD = 254
  const nearLimit = typeof quantidade === 'number' && quantidade >= MAX_QTD * 0.9
  const atLimit = typeof quantidade === 'number' && quantidade >= MAX_QTD

  const invalid =
    descricao.trim() === '' ||
    quantidade === '' ||
    (typeof quantidade === 'number' && (quantidade < 1 || quantidade > MAX_QTD))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await onSubmit({ descricao, quantidade: quantidade as number, status: 'PENDENTE' })
    setDescricao('')
    setQuantidade('')
  }

  return (
    <form className="pedido-form" onSubmit={handleSubmit}>
      <input
        className="pedido-form__input"
        type="text"
        placeholder="Descrição do pedido"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        required
      />
      <input
        className={`pedido-form__input pedido-form__input--qty${nearLimit ? ' pedido-form__input--warning' : ''}`}
        type="number"
        min={1}
        max={MAX_QTD}
        placeholder="Qtd"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value === '' ? '' : Number(e.target.value))}
        required
      />
      <button
        className={`pedido-form__btn${invalid ? ' pedido-form__btn--invalid' : ''}`}
        type="submit"
        disabled={invalid}
      >
        Adicionar
      </button>
      {atLimit && (
        <span className="pedido-form__hint">O valor de cada pedido deve ser abaixo de {MAX_QTD}.</span>
      )}
      {nearLimit && !atLimit && (
        <span className="pedido-form__hint">Atenção: o valor de cada pedido deve ser abaixo de {MAX_QTD}.</span>
      )}
    </form>
  )
}
