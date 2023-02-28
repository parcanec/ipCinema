import { Link } from "react-router-dom"


const Header = () => {
    return (
        <header>
            <Link to={'/'}><div className="homeLink">Home</div></Link>
            <Link to={'/login'}><button className="loginButton">Login</button></Link>
        </header>
    )
}

export default Header
