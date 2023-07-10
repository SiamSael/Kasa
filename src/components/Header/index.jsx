import { Link } from "react-router-dom"
import logo from "../../assets/HeaderLOGO.png"

const Header = () => {
    return (
        <header className="header">
            <img className="header__logo" src={ logo } alt="logo de kasa" />
            <nav className="header__nav"> 
                <ul className="header__nav--ul">
                    <Link className="header__nav--li" to="/">Accueil</Link>
                    <Link className="header__nav--li" to="/About">A Propos</Link>
                </ul>
            </nav>

        </header>
    )
}

export default Header