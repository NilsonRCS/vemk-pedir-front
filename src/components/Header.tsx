import './Header.css'

export function Header() {
  return (
    <header className="header">
      <div className="header__backdrop" aria-hidden="true" />

      <div className="header__content">
        <div className="header__brand">
          <span className="header__logo" aria-hidden="true">⬡</span>
          <span className="header__name">vemk<span className="header__name-accent">pedir</span></span>
        </div>

        <p className="header__tagline">Gerencie seus pedidos com facilidade</p>

        <div className="header__pills">
          <span className="header__pill">Pedidos</span>
          <span className="header__pill header__pill--muted">Dashboard</span>
          <span className="header__pill header__pill--muted">Configurações</span>
        </div>
      </div>
    </header>
  )
}
