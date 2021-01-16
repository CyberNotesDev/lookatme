import { Link } from 'react-router-dom';
import './../css/Header.css';

function Header() {
    return (
        <div className="header">
            <form method="GET" action="hi">
                <input type="search" />
                <button type="submit">?</button>
            </form>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
        </div>
    );
}

export default Header;