import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__backdrop" aria-hidden="true" />

      <div className="footer__content">
        <div className="footer__brand">
          <span className="footer__logo" aria-hidden="true">⬡</span>
          <span className="footer__name">
            vemk<span className="footer__name-accent">pedir</span>
          </span>
        </div>

        <p className="footer__copy">&copy; {year} — Todos os direitos reservados</p>
      </div>
    </footer>
  )
}
