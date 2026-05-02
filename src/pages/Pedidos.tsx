import './Pedidos.css'
import { usePedidos } from '../hooks/usePedidos'
import { PedidoForm } from '../components/PedidoForm'
import { PedidoList } from '../components/PedidoList'

export function Pedidos() {
  const { pedidos, loading, error, adicionar, remover } = usePedidos()

  return (
    <main className="pedidos">
      <h1 className="pedidos__title">Seus <span>Pedidos</span></h1>
      <PedidoForm onSubmit={adicionar} />
      {loading && <p className="pedidos__status">Carregando...</p>}
      {error && <p className="pedidos__status pedidos__status--error">{error}</p>}
      <PedidoList pedidos={pedidos} onRemover={remover} />
    </main>
  )
}
