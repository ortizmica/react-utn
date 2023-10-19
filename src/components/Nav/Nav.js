import "./Nav.css"
import{ Link } from'react-router-dom';

function Nav () {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand color">Rick & Morty</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/characters" className="nav-link active color  btn" id="characters"  aria-current="page">Characters</Link>
                        </li>
                        <li className="nav-item" >
                            <Link to="/contact" className="nav-link active color btn" id="contact" href="#">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
</nav>
        </header>
    )
}

export default Nav;