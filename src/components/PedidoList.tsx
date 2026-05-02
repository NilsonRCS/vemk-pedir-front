import './PedidoList.css'
import type { Pedido } from '../models/Pedido'

interface Props {
  pedidos: Pedido[]
  onRemover: (id: number) => void
}

export function PedidoList({ pedidos, onRemover }: Props) {
  if (pedidos.length === 0) {
    return <p className="pedido-list__empty">Nenhum pedido encontrado.</p>
  }

  return (
    <ul className="pedido-list">
      {pedidos.map((pedido) => (
        <li className="pedido-list__item" key={pedido.id}>
          <div className="pedido-list__info">
            <span className="pedido-list__desc">{pedido.descricao}</span>
            <span className="pedido-list__qty">× {pedido.quantidade}</span>
            <span className="pedido-list__badge">{pedido.status}</span>
          </div>
          <button
            className="pedido-list__remove"
            type="button"
            onClick={() => onRemover(pedido.id!)}
          >
            Remover
          </button>
        </li>
      ))}
    </ul>
  )
}
