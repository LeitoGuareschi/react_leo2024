import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <ul className="holder">
                <li><Link to="home">Home</Link></li>
                <li><Link to="nosotros">Nosotros</Link></li>
                <li><Link to="servicios">Sercicios</Link></li>
                <li><Link to="contacto">Contacto</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;