import "./navbar.css";

let Navbar = () => {
    return (
        <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src={"./src/assets/macdonalds.png"} className="logo" />
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="/">
                            <i className="bi bi-house bi-navbar"></i> Home
                        </a>

                        <a className="navbar-item" href="/login">
                            <i className="bi bi-people-fill bi-navbar"></i> Clientes
                    </a>
                </div>
            </div>
        </nav >
        </>
    )
}

export default Navbar;