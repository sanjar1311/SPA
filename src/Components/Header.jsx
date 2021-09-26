import { Link } from 'react-router-dom'

function Header() {
  return(
    <header className="header">
      <div className="container header-inner">
        <a href="#!" className="logo">LoGo</a>
        <nav className="nav">
          <ul className="nav__list">
            <li>
              <Link to="/" className="nav__link active">Home</Link>
            </li>
            <li>
              <Link to="/about" className="nav__link">About</Link>
            </li>
            <li>
              <Link to="/contact" className="nav__link">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
export default Header