import './PedidoList.css'
import type { Pedido } from '../models/Pedido'

interface Props {
  pedidos: Pedido[]
}

export function PedidoList({ pedidos }: Props) {
  if (pedidos.length === 0) {
    return <p className="pedido-list__empty">Nenhum pedido encontrado.</p>
  }

  return (
    <ul className="pedido-list">
      {pedidos.map((pedido) => (
        <li className="pedido-list__item" key={pedido.id}>
          <div className="pedido-list__info">
            <span className="pedido-list__desc">{pedido.textoOriginal}</span>
            {pedido.cliente && <span className="pedido-list__badge">{pedido.cliente}</span>}
            {pedido.dataEntrega && <span className="pedido-list__qty">📅 {pedido.dataEntrega}</span>}
          </div>
          {pedido.itens.length > 0 && (
            <ul className="pedido-list__itens">
              {pedido.itens.map((item, i) => (
                <li key={i} className="pedido-list__item-detalhe">
                  {item.produto} × {item.quantidade}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}
